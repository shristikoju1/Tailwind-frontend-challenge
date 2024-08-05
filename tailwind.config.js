/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css", "./*html"],
  theme: {
    extend: {
      fontFamily: {
        young: ["Young Serif", "serif"],
        outfit: ["Outfit","sans-serif"],
      },
      colors: {
       'rose-light': 'hsl(330, 100%, 98%)',
       'color-brown': 'hsl(14, 45%, 36%)',
      },
    },
  },
  plugins: [],
}

