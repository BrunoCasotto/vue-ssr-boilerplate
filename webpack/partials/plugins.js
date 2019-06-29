const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const plugins = [
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
]

const serverPlugins = [
  new VueSSRServerPlugin(),
]

const clientPlugins = [
  new VueSSRClientPlugin(),
]

module.exports = {
  plugins,
  serverPlugins,
  clientPlugins,
}