import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blackBgColor: "var(--blackBgColor)",
        whiteBgColor: "var(--whiteBgColor)",
        bgLightGrayColor: "var(--bgLightGrayColor)",
        BannerBgColor: "var(--BannerBgColor)",
        redOfferBgColor: "var(--redOfferBgColor)",
        redTextOfferColor: "var(--redTextOfferColor)",
        productDetailBbImageColor: "var(--productDetailBbImageColor)",
        productDetailBgCircle1: "var(--productDetailBgCircle1)",
        productDetailBgCircle2: "var(--productDetailBgCircle2)",
        productDetailBgCircle3: "var(--productDetailBgCircle3)",
      },
      fontFamily: {
        integralCf: ["integralCF", "serif"],
        satoshi: ["satoshi", "serif"],
        satoshiBold: ["satoshiBold", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
