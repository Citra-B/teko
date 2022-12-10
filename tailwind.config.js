/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      brand: '#315343',
      accent: '#cce1d7',
      second: '#757575',
      warning: '#ff49db',
      danger: '#ff7849',
      grey: '#696969',
      white: '#ffffff',
    },
    screens: {
      xs: '430px',

      s: '500px',

      sm: '576px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1400px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
