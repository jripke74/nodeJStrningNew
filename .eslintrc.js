'use strict';

module.exports = {
  env: {
    es6: true,
  },
  rules: {
    strict: ['error', 'global'],
    'multiline-comment-style': ['error', 'starred-block'],
    'spaced-comment': ['error', 'always'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'max-len': ['error', { code: 80 }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'space-infix-ops': 'error',
    'space-before-blocks': 'error',
    'brace-style': 'error',
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    'newline-per-chained-call': 'error',
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-var': 'error',
    'prefer-const': 'error',
    'one-var': ['error', 'never'],
    camelcase: 'error',
    'no-unused-vars': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-multi-assign': 'error',
    quotes: ['error', 'single'],
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'quote-props': ['error', 'as-needed'],
    'no-new-wrappers': 'error',
    'no-extra-boolean-cast': 'error',
    eqeqeq: 'error',
    yoda: 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
  },
};

