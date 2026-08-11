import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        ocean: "#075f73",
        aqua: "#15a6b7",
        signal: "#f2b84b",
        mist: "#eef7f8"
      }
    }
  },
  plugins: []
};

export default config;
