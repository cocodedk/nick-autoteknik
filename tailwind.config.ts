import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#DC2626",
          black: "#000000",
          white: "#FFFFFF",
          green: "#16A34A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
