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
        'josefin-italic-500': ['Josefin Sans','sans-serif','italic'],
        
      },
    },
  },
  plugins: [],
}