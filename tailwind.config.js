module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "main": "#191746"
      },
      height: {
        "header": "70px"
      },
      borderWidth: {
        "thin": "1px"
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },],
}
