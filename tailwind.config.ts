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
    },
  },
  plugins: [],
};

export default config;