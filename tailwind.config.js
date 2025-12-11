/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fashion-bg': '#F8F8F8',   // O cinza claro do fundo
        'fashion-black': '#111111', // O preto suave
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Fonte dos títulos
        sans: ['"Inter"', 'sans-serif'],        // Fonte do texto
      },
    },
  },
  plugins: [],
}