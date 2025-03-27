/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      clipPath: {
        custom: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
      },
      height: {
        hero: 'calc(100vh - 104px)',
      },
      colors: {
        primary: '#f7dc6f', // Azul crema
        secondary: '#f7dc6f', // azul cielo
        third: '#e74c3c', // Azul claro
        black: '#001', // Gris oscuro
      },

      backgroundImage: {
        hero: 'url("/images/mesa1.jpeg")',
        details: 'url("/images/mesa2.jpeg")',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        urbanist: ['var(--font-urbanist)'],
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
