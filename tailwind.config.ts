import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
      },
      fontSize: {
        display: "var(--display)",
      },
      keyframes: {
        rotation: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(180deg)" },
        },
        opacity: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        rotation: "rotation 10s linear infinite",
        emerge: "opacity .5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
