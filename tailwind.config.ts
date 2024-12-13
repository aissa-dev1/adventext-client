import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          ring: "var(--primary-ring)",
        },
        secondary: "var(--secondary)",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
