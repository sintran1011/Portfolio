import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#151E12",
        primary: "#00B9FC",
        secondary: "#A3A3A3",
        error: "#D04455",
        "gray-50": "#FAFAFA",
        "gray-100": "#F5F5F5",
        "gray-300": "#E0E0E0",
        "gray-400": "#BDBDBD",
        "gray-500": "#9E9E9E",
        "gray-900": "#212121",
      },
      borderRadius: {
        "16": "16px",
        "24": "24px",
        "32": "32px",
      },
      grayscale: {
        50: "50%",
      },
      backdropBlur: {
        "blur-6.9": "6.9px",
      },
    },
  },
  plugins: [],
};
export default config;
