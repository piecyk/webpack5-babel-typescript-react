const path = require('path')

const nodePathParts = ['./src', './node_modules'].map(p => path.resolve(p))

module.exports = {
  // https://github.com/webpack/changelog-v5/blob/master/README.md#persistent-caching
  cache: {
    type: 'filesystem',
  },
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: nodePathParts,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
