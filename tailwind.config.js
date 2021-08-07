module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },

    animation: {
      'fade-in-down': 'fade-in-down 0.5s ease-out'
  },
      colors:{
        primary:'#07202A',
        lightergray:'#eaebd4',
        darkergray:'#EBEBD3',
        coolYellow:'#debc79',

      },
      backgroundImage: theme =>({
        'header-image':"url(img/header-image.jpg)",
        'tradex-home':"url('https://cdn.discordapp.com/attachments/817048198022430761/859981621717630976/Screen_Shot_2021-07-01_at_4.18.41_AM.png')",
        'netflix-home':"url('https://cdn.discordapp.com/attachments/855873527881531402/855921341872996362/unknown.png')",
        'cartopia-home':"url('https://media.discordapp.net/attachments/817048198022430761/855492893045030942/IMG-20210305-WA0002.jpg?width=944&height=468')",
        'ecom-home':"url('https://media.discordapp.net/attachments/817048198022430761/855492295620558908/IMG-20210531-WA0004.jpg?width=749&height=468')",
        'nav-image':"url('http://www.mobileswall.com/wp-content/uploads/2013/11/640-Programming-Code-l.jpg')",
        'admin-image':"url('https://cdn.discordapp.com/attachments/817048198022430761/872177757625385000/Screen_Shot_2021-08-03_at_5.25.44_PM.png')",
        
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