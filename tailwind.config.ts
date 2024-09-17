import type { Config } from "tailwindcss";

export default {
	content: [
		"./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
		"./node_modules/drawy/src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
