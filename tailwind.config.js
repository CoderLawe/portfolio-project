module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#07202A'
      },
      backgroundImage: theme =>({
          'header-image':"url(img/header-image.jpg)"
      }),
     fontSize:{
      'lawe-xl': ['9rem', { lineHeight: '1' }],
     }
    },
  },

  height:{
    xl:'198px',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
