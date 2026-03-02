import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins:    ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        purple: "#291231",
        yellow: "#F18C1B",
      },
      keyframes: {
        orbit: {
          "0%":   { transform: "rotate(calc(var(--angle) * 1deg)) translateX(var(--radius, 1px)) rotate(calc(var(--angle) * -1deg))" },
          "100%": { transform: "rotate(calc(var(--angle) * 1deg + 360deg)) translateX(var(--radius, 1px)) rotate(calc(var(--angle) * -1deg - 360deg))" },
        },
      },
      animation: {
        orbit: "orbit calc(var(--duration) * 1s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;