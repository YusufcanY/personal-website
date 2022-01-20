module.exports = {
  theme: {
    extend: {
      colors: {
        foreground: '#181b1b',
      },
    },
  },
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
