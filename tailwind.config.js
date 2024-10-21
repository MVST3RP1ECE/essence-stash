/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "shopCartAccent": "#FDCAC7",
        "shopCartSecondary": "#6A60D3",
      },
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

