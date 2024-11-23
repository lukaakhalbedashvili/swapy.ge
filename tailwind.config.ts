import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#191a1a",
        header: "#3d3e3e",
        body: "#242727",
        main: "#4edd98",
        secondary: "#34b377",
        active: "#ff7f29",
        disabledBTN: "#2b2e2e",
        error: "#e14a44",
        smallSecondaryTxt: "#414444",
        success: "#1cbf62",
      },
    },
  },
  plugins: [],
};
export default config;
