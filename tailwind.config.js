/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Flux: ["Afacad Flux", "sans-serif"]
      },
      spacing: {
        '1/10': '10%',
        '1/15': '5%',
      }
    },
  },
  plugins: [],
}

