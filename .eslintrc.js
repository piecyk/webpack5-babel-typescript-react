const jest = {
  files: ['src/**/*.test.{ts,tsx}'],
  env: {
    jest: true,
    node: true,
    browser: false,
  },
}

const build = {
  files: ['webpack.config.js', 'babel.config.js'],
  env: {
    node: true,
    browser: false,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
}

module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',

    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    'no-console': 0,
    'no-var': 2,
    'no-void': 2,
    'no-with': 2,
    'object-shorthand': 1,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,

    'react-hooks/rules-of-hooks': 2,

    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/explicit-member-accessibility': 0,

    'import/first': 2,
    'import/newline-after-import': 2,
  },
  overrides: [jest, build],
}
