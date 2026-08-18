import { NextResponse } from "next/server";
import { Resend } from "resend";
import { productPages } from "@/lib/productPages";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedProducts = new Set(productPages.map((product) => product.name));

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  country?: string;
  productInterested?: string;
  quantity?: string;
  application?: string;
  specificationRequirement?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown) {
  return String(value || "").trim();
}

function validate(payload: ContactPayload) {
  const data = {
    name: clean(payload.name),
    company: clean(payload.company),
    email: clean(payload.email).toLowerCase(),
    whatsapp: clean(payload.whatsapp),
    country: clean(payload.country),
    productInterested: clean(payload.productInterested),
    quantity: clean(payload.quantity),
    application: clean(payload.application),
    specificationRequirement: clean(payload.specificationRequirement),
    message: clean(payload.message),
    website: clean(payload.website)
  };

  if (data.website) {
    return { error: "Spam submission blocked." };
  }

  if (
    data.name.length < 2 ||
    data.company.length < 2 ||
    data.whatsapp.length < 3 ||
    data.country.length < 2 ||
    data.quantity.length < 1 ||
    data.application.length < 2 ||
    data.specificationRequirement.length < 4 ||
    data.message.length < 8
  ) {
    return { error: "Please complete all required fields." };
  }

  if (!emailPattern.test(data.email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!allowedProducts.has(data.productInterested)) {
    return { error: "Please select a valid product." };
  }

  return { data };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = validate(payload);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const emailTo = process.env.CONTACT_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Please set RESEND_API_KEY." },
      { status: 503 }
    );
  }

  if (!emailTo || !emailPattern.test(emailTo)) {
    return NextResponse.json(
      { error: "Email recipient is not configured. Please set CONTACT_EMAIL." },
      { status: 503 }
    );
  }

  const resend = new Resend(resendApiKey);
  const inquiry = result.data;

  const text = `New Website Inquiry

Name:
${inquiry.name}

Company:
${inquiry.company}

Email:
${inquiry.email}

WhatsApp:
${inquiry.whatsapp || "Not provided"}

Country:
${inquiry.country}

Product:
${inquiry.productInterested}

Quantity:
${inquiry.quantity}

Application:
${inquiry.application}

Specification Requirement:
${inquiry.specificationRequirement}

Message:
${inquiry.message}
`;

  try {
    await resend.emails.send({
      from: "gzlanhe.com Inquiry <onboarding@resend.dev>",
      to: emailTo,
      replyTo: inquiry.email,
      subject: "New Inquiry From gzlanhe.com",
      text
    });
  } catch {
    return NextResponse.json(
      { error: "Email sending failed. Please try again or email sales@gzlanhe.com directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you for your inquiry. We will reply within 24 hours."
  });
}
