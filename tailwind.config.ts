import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#1a1a2e",
        accent: "#10b981",
        background: "#0d0d1a",
        surface: "#16213e",
        "surface-2": "#1a1a2e",
        border: "#2d3748",
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite",
        floatUp: "floatUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
