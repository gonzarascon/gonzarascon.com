import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
		"./node_modules/drawy/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
			},
			keyframes: {
				"slide-in-right": {
					from: {
						transform: "translate3d(100%,0,0)",
					},
					to: {
						transform: "translate3d(0,0,0)",
					},
				},
				"slide-out-right": {
					from: {
						transform: "translate3d(0,0,0)",
					},
					to: {
						transform: "translate3d(100%,0,0)",
					},
				},
			},
			animation: {
				"slide-out-right":
					"slide-out-right 150ms cubic-bezier(0.22, 1, 0.36, 1)",
				"slide-in-right": "slide-in-right 150ms cubic-bezier(0.22, 1, 0.36, 1)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
