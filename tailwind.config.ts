import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f1117",
        paper: "#f5efe6",
        sand: "#d8c8b0",
        ember: "#d46a3f",
        moss: "#59705d",
        steel: "#6b7280",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "page-radial":
          "radial-gradient(circle at top, rgba(212,106,63,0.16), transparent 34%), radial-gradient(circle at right top, rgba(89,112,93,0.16), transparent 26%), linear-gradient(180deg, #0f1117 0%, #10131a 48%, #12151d 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
