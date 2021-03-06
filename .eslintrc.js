module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-underscore-dangle': [
      'error',
      { allow: ['_id', '__v'] },
    ],
    'no-console': [
      'error',
      { allow: ['info', 'error'] },
    ],
  },
};
