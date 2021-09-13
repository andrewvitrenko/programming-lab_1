module.exports = {
  'env': {
    'node': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-trailing-spaces': [
      2,
      {
        'skipBlankLines': false,
        'ignoreComments': false,
      }
    ],
    'no-unused-vars': [
      'warn'
    ],
    'no-prototype-builtins': [
      'off'
    ]
  }
};
