import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
} satisfies Config

