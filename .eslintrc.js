const jest = {
  files: ['src/**/*.test.{ts,tsx}'],
  env: {
    jest: true,
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
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',

    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
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
    'react-hooks/rules-of-hooks': 2,
    'no-console': 0,
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
