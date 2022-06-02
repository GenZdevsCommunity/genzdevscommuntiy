module.exports = {
  content: [
    '*.html'
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui")
  ],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      "light",
      "dark"
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "du-",
    darkTheme: "dark"
  },
}
