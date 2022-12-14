module.exports = {
  mode: 'jit',

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    colors: {
      dark: 'var(--color-dark)',
      light: 'var(--color-light)',
      transparent: 'transparent'
    },
    extend: {
      screens: {
        lg: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1400px',
        '2xl': '1536px',
        '3xl': '1720px',
        big: '2560px',
        portrait: { raw: '(orientation: portrait)' },
        'hover-hover': { raw: '(hover: hover)' }
      },
      inset: {
        4: '1rem'
      }
    },

    fontFamily: {
      texta: ['"Texta"'],
    },
    fontSize: {
      headline01: ['40px', {
        lineHeight: '40px',
        letterSpacing: '0.04em',
        fontWeight: '900'
      }],
      headline01Mobile: ['32px', {
        lineHeight: '26px',
        letterSpacing: '0.04em',
      }],
      headline02: ['32px', {
        lineHeight: '32px',
        letterSpacing: '0.04em',
      }],
      headline02Mobile: ['20px', {
        lineHeight: '18px',
        letterSpacing: '0.04em',
      }],
      'headline03': ['24px', {
        lineHeight: '24px',
        letterSpacing: '0.04em',
      }],
      headline03Mobile: ['16px', {
        lineHeight: '14px',
        letterSpacing: '0.04em',
      }],
      headline04: ['20px', {
        lineHeight: '20px',
        letterSpacing: '0.04em',
      }],
      headline04Mobile: ['14px', {
        lineHeight: '13px',
        letterSpacing: '0.04em',
      }],
      headline05: ['20px', {
        lineHeight: '20px',
        letterSpacing: '0.04em',
      }],
      headline05Mobile: ['14px', {
        lineHeight: '13px',
        letterSpacing: '0.04em',
      }],
      paragraph: ['24px', {
        lineHeight: '26px',
        letterSpacing: '0.04em',
      }],
      paragraphMobile: ['16px', {
        lineHeight: '18px',
        letterSpacing: '0.04em',
      }],
      label: ['8px', {
        lineHeight: '6px',
        letterSpacing: '0.04em'
      }],
      link: ['18px', {
        lineHeight: '16px',
        letterSpacing: '0.04em'
      }]
    },
    zIndex: {
      behind: -1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      10: 10,
      20: 20,
      22: 22,
      25: 25,
      menu: 29,
      header: 30,
      overlay: 31
    }
  }
}
