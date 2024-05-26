/** @type {import('tailwindcss').Config} */

module.exports = {
  // content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: '312px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1199px',
    },
    fontFamily: {
      light: "Exo2-Light",
      regular: "Exo2-Regular",
      medium: "Exo2-Medium",
      semibold: "Exo2-SemiBold",
      bold: "Exo2-Bold",
      extrabold: 'Exo2-ExtraBold',
      black: 'Exo2-Black',
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      10: '.625rem',
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
    },
    extend: {
      backgroundImage: {
        'prev-icon': "url('/assets/images/prev-icon.svg')",
        'next-icon': "url('/assets/images/next-icon.svg')",
      },
      maxWidth: {
        'container': '82rem',
        'banner': '90rem',
      },
      colors: {
        'primary': {
          50: '#fefde8',
          100: '#fffcc2',
          200: '#fff687',
          300: '#ffea43',
          400: '#ffdb26',
          500: '#efbe03',
          600: '#ffb726',
          700: '#a46904',
          800: '#88510b',
          900: '#734210',
          950: '#734210',
        },
        'secondary': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
        white: '#ffffff'
      }, 
      boxShadow: {
        'white': '2px 2px 0 #ffffff',
      },
      flex: {
        'image': '0 0 auto'
      },
    },
  },
  plugins: [],
};
