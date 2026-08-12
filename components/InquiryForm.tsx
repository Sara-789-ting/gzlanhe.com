"use client";

import { useState } from "react";

const products = [
  "Swimming Pool LED Light",
  "Underwater LED Light",
  "Fountain LED Light",
  "SPA Pool Light",
  "Custom Lighting Solution",
  "RGB Swimming Pool Light"
];

const successMessage = "Thank you for your inquiry. We will reply within 24 hours.";

type InquiryFormProps = {
  buttonLabel?: string;
};

export function InquiryForm({ buttonLabel = "Get Quote" }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const email = String(payload.email || "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid business email address.");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });
    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(result.error || "Submission failed. Please email sales@gzlanhe.com directly.");
      return;
    }

    setStatus("sent");
    setMessage(result.message || successMessage);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Name
          <input required name="name" minLength={2} className="focus-ring rounded border border-slate-300 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Company Name
          <input required name="company" minLength={2} className="focus-ring rounded border border-slate-300 px-4 py-3" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <input required name="email" type="email" className="focus-ring rounded border border-slate-300 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          WhatsApp
          <input name="whatsapp" className="focus-ring rounded border border-slate-300 px-4 py-3" placeholder="+1 555 000 0000" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Country
          <input required name="country" className="focus-ring rounded border border-slate-300 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Product Interested
          <select required name="productInterested" className="focus-ring rounded border border-slate-300 px-4 py-3">
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product}>{product}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="focus-ring rounded border border-slate-300 px-4 py-3"
          placeholder="Tell us your quantity, voltage, color, application or OEM requirements."
        />
      </label>
      <button
        disabled={status === "sending"}
        className="focus-ring rounded bg-ocean px-6 py-3 font-bold text-white hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : buttonLabel}
      </button>
      {status === "sent" ? (
        <p className="rounded bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          {message}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {message}
        </p>
      ) : null}
    </form>
  );
}
