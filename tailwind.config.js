/** @type {import('tailwindcss').Config} */

module.exports = {
  // content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      light: "IBMPlexSans-Light",
      regular: "IBMPlexSans-Regular",
      medium: "IBMPlexSans-Medium",
      semibold: "IBMPlexSans-SemiBold",
      bold: "IBMPlexSans-Bold",
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      md: '1.25rem',
      lg: '1.75rem',
      xl: '2rem',
    },
    extend: {
      backgroundImage: {
        'prev-icon': "url('/assets/images/prev-icon.svg')",
        'next-icon': "url('/assets/images/next-icon.svg')",
      },
      colors: {
        primary: '#ffdb26',
        primaryDark: '#ffb726',
        black: '#000000',
        dark: '#777777',
        white: '#ffffff',
        danger: '#ff514d',
        success: '#6fc600',
      }, 
      borderColor: {
        primary: '#ffdb26',
        primaryDark: '#ffb726',
        black: '#000',
        dark: '#777777',
        white: '#ffffff',
        danger: '#ff514d',
        success: '#6fc600',
      },
      strokeWidth: {
        '0': '0',
      },
      boxShadow: {
        'xl': '0 4px 6px 5px rgb(0, 0, 0,0.9)',
      }
    },
  },
  plugins: [],
};
