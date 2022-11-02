/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      screens: {
        mobile: { min: '375px', max: '767px' },
        mob: { min: '375px'},
        tablet: { min: '768px', max: '1439px' },
        tab: { min: '768px'},
        desktop: { min: '1440px', max: '2000px' },
        des: { min: '1440px'},
      },
      fontSize: {
        n1: ['48px', {
          lineHeight: '56px',
        }],
        n2: ['40px', {
          lineHeight: '55px',
        }],
        n3: ['32px', {
          lineHeight: '44px',
        }],
        n4: ['18px', {
          lineHeight: '25px',
        }],
        m1: ['15px', {
          lineHeight: '25px'
        }]
      },
      fontFamily: {
        'manrope-bold': 'Manrope ExtraBold',
        'manrope-medium': 'Manrope Medium',
      },
      colors: {
        'mk-primary': '#3EE9E5',
        'mk-secondary': '#093F68',
        'mk-gray': '#777F98',
        'mk-white': '#FFFFFF',
        'mk-dark': '#080C20',
        'mk-error':'#FF2965',
      }
    },
  },
  plugins: [],
}
