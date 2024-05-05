import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        nigeria: {
          green: "#008000",
          white: "#FFFFFF",
          red: "#FF0000",
          earth1: "#964B00",
          earth2: "#786C3B",
          earth3: "#452B1F",
          deepBlue1: "#032B44",
          deepBlue2: "#021331",
          gradient: {
            "earth-to-green": "linear-gradient(to bottom, #964B00, #008000)",
            "blue-to-red": "linear-gradient(to bottom, #032B44, #FF0000)",
          },
        },
        backgroundImage: {
          "earth-gradient":
            "linear-gradient(to bottom, #964B00, #786C3B, #452B1F)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
