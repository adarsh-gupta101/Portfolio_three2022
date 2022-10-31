/** @type {import('tailwindcss').Config} */
  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {
        animation: ['group-hover'],

       },
     },
     plugins: [],
   }