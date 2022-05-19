module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'eslint-plugin-d3',
  ],
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
  globals: {
    d3: true,
  },
};
