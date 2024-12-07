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
        whiteText: "var(--whiteText)",
        blackText: "var(--blackText)",
        grayBackground: "var(--grayBackground)",
        redBackgroundColor: "var(--redBackgroundColor)",
        lightRedBgColor: "var(--lightRedBgColor)",
        greenTextColor: "var(--greenTextColor)",
        bgRedDotColor: "var(--bgRedDotColor)",
        hoverRedBgColor: "var(--hoverRedBgColor)",
        circlebgColor: "var(--circlebgColor)",
        lightSeaGreenBgColor: "var(--lightSeaGreenBgColor)"
      },
      fontFamily: {
        poppins: ["poppins", "serif"],
        inter: ["inter", "serif"]
      }
    },
  },
  plugins: [],
};
export default config;
