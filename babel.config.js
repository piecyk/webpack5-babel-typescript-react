'use strict'

module.exports = function(api) {
  const env = api.env()

  const config = {
    presets: [
      '@babel/typescript',
      '@babel/preset-react',
      [
        '@babel/env',
        {
          modules: env === 'test' ? 'commonjs' : false,
          targets: {
            browsers: ['last 2 versions'],
          },
        },
      ],
    ],
    plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  }

  return config
}
