import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        steel: "#334155",
        mist: "#f8fafc",
        cloud: "#e2e8f0",
        accent: "#1d4ed8"
      },
      boxShadow: {
        premium: "0 10px 40px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
