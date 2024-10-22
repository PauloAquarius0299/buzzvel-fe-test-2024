import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        whiteSlider: "#E2E8F0",
        textColor: "#0F172A",
        greyText: "#475569",
        purple: "#7E22CE",
        orange: "#F59E0B",
        cyanOrange: "#FBBF24",
        purpleBold: "#581C87",
        orangeBold: "#D97706",
        cyanPurple: "#A252EE",
      },
    },
  },
  plugins: [], 
};

export default config;
