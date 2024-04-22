/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-gray': '#202124',
        'light-gray': '#303134',
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
    },
  },
  plugins: [],
};
