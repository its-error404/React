/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      fontFamily:
      {
        'poppins' : ['Poppins'],
        'tangerine': ['Tangerine'],
      },
    },
  },
  plugins: [],
}