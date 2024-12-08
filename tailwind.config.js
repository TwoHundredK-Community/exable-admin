/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'light-blue': '#3781f1',
      white: 'background-color: rgb(248 250 252);',
      'primary-color': '#235460',
      'secondary-color': '#49a0bb',
      'background-color': '#b9e2ef',
    },
    extend: {},
  },
  plugins: [],
};
