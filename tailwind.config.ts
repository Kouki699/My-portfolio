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
        navy: "#0b1220",
        steel: "#526173",
        line: "#dfe5ec",
        soft: "#f7f9fb",
        accent: "#175cff",
      },
      boxShadow: {
        calm: "0 24px 70px rgba(15, 23, 42, 0.07)",
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
