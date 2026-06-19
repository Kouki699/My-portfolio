import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        navy: "#10233f",
        steel: "#475569",
        line: "#d9e2ec",
        soft: "#f6f8fb",
        accent: "#1d4ed8",
      },
      boxShadow: {
        calm: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
