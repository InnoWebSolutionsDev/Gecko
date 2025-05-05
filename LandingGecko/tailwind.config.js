module.exports = {
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
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
  ],
};