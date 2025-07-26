export default {
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
      },
      colors: {
        verde: '#6cb37d', // verde
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  plugins: [],
  safelist: [
    'w-20',
    'w-64',
    'border-green-500',
    'border-transparent',
    'bg-verde',
  ],
};