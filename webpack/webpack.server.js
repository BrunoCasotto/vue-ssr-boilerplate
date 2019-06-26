const path = require('path')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

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
  plugins: [
    new VueSSRServerPlugin(),
  ]
}
