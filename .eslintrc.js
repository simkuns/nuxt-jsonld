module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
    'no-underscore-dangle': ['error', { 'allow': ['_uid', '__dangerouslyDisableSanitizersByTagID'] }],
    'no-param-reassign': ['error',  { "props": false }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
        ],
      },
    },
    'import/core-modules': ['vue'],
  },
  overrides: [
    {
      files: ['**/*.spec.ts'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
    },
  ],
}
