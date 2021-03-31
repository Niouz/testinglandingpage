module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], //removeve unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: {
          100: '#2A3B43',
          200: '#345cd1'
        }
      },
      spacing: {
        88: '22.5rem',
      },
      fontFamily: {
        body: ['Montserrat'],
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
