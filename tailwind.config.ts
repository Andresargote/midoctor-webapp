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
        neutrals: {
          black: "#000000",
          darkGray: "#333333",
          lightGray: "#F7F7F7",
          white: "#FFFFFF",
        },
        primary: {
          10: "#F5F8FF",
          50: "#DBFAF9",
          100: "#B7F6F3",
          200: "#73EDE9",
          300: "#2BE3DD",
          400: "#16ABA6",
          500: "#0D6360",
          600: "#0B514F",
          700: "#083B39",
          800: "#052927",
          900: "#021212",
          950: "#010909",
        },
        success: {
          100: "#CFF5D2",
          500: "#28A745",
          600: "#1E7A38",
        },
        warning: {
          100: "#FFF3CD",
          500: "#FFC107",
          600: "#E0A800",
        },
        error: {
          100: "#F8D7DA",
          500: "#DC3545",
          600: "#B02A37",
        },
        info: {
          100: "#D1ECF1",
          500: "#17A2B8",
          600: "#0F7A8B",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
