/** @type {import('tailwindcss').Config} */

module.exports = {
  // content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xss: '320px',
      xs: '375px',
      xr: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      my: '1200px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#ffd301',
      secondary: '#FAFDFA',
      black: '#2f2f2f',
      white: '#f9f9f9'
    },
    extend: {
      
    },
  },
  plugins: [],
};
