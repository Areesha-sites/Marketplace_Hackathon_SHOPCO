import type { Config } from "tailwindcss";
const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			xs: '320px',
  			ms: '390px',
  			sm: '375px',
  			xsm: '425px',
  			xxs: '600px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			xxl: '1440px'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			blackBgColor: 'var(--blackBgColor)',
  			whiteBgColor: 'var(--whiteBgColor)',
  			bgLightGrayColor: 'var(--bgLightGrayColor)',
  			BannerBgColor: 'var(--BannerBgColor)',
  			redOfferBgColor: 'var(--redOfferBgColor)',
  			redTextOfferColor: 'var(--redTextOfferColor)',
  			productDetailBbImageColor: 'var(--productDetailBbImageColor)',
  			productDetailBgCircle1: 'var(--productDetailBgCircle1)',
  			productDetailBgCircle2: 'var(--productDetailBgCircle2)',
  			productDetailBgCircle3: 'var(--productDetailBgCircle3)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			integralCf: [
  				'integralCF',
  				'serif'
  			],
  			satoshi: [
  				'satoshi',
  				'serif'
  			],
  			satoshiBold: [
  				'satoshiBold',
  				'serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
	  keyframes: {
			dot1: {
				'0%, 100%': { opacity: '0' },
				'33%': { opacity: '1' },
			},
			dot2: {
				'0%, 66%': { opacity: '0' },
				'33%, 100%': { opacity: '1' },
			},
			dot3: {
				'0%, 33%': { opacity: '0' },
				'66%, 100%': { opacity: '1' },
			},
		},
		animation: {
			dot1: 'dot1 1.5s infinite',
			dot2: 'dot2 1.5s infinite',
			dot3: 'dot3 1.5s infinite',
		},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
