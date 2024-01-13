/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"  ,'./index.html',],
  theme: {
    backgroundImage:{
      'desk':"url('./images/bg-desktop.svg')",
    },
    backgroundColor:{
      'violet': "hsl(257, 40%, 49%)",
      'white':"hsl(0, 0%, 100%)",
      'trans':"hsl(0,0%,100%)",
      'soft': "hsl(300, 69%, 71%)",
    },
    
    textColor:{
      'violet': "hsl(257, 40%, 49%)",
      'white':"hsl(0, 0%, 100%)",
      'soft': "hsl(300, 69%, 71%)",
    },
   fontFamily:{
    font1: "'Figtree', sans-serif",
   },
    
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
 
  },
}

