module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  plugins: [
    'prettier',
    "vue"
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 'off',
    'max-len': 'off'
  }
}
