/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#3b0764',
            light: '#581c87',
            dark: '#2e1065',
        },
        secondary: {
            DEFAULT: '#d97706',
        },
        canada: {
            DEFAULT: '#D42B2B',
            dark: '#a81e1e',
            light: '#f87171',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
