const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.join(__dirname, '..', 'entry', 'server.js'),
  target: 'node',
  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  externals: nodeExternals({
    whitelist: /\.css$/,
  }),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'null-loader',
        ],
      },
    ],
  },
}
