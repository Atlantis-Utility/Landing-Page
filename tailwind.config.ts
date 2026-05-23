import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-dm)",   "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#EEF4FB",
          100: "#D4E5F5",
          200: "#A8CBEA",
          300: "#6AAAD8",
          400: "#3585C3",
          500: "#1B65A6",
          600: "#154F85",
          700: "#103C65",
          800: "#0B2A48",
          900: "#071B30",
        },
      },
    },
  },
  plugins: [],
};

export default config;