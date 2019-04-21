const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')
const serverConfig = require('./webpack.server')
const clientConfig = require('./webpack.client')
const env = process.env.NODE_ENV

const config = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  output: {
    publicPath: '',
  },
  resolve: {
    alias: {
      '@components': path.join(__dirname, '..', 'resources', 'components'),
      '@images': path.join(__dirname, '..', 'resources', 'images'),
      '@modules': path.join(__dirname, '..', 'resources', 'modules'),
      '@public': path.join(__dirname, '..', 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {},
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '/images/[hash].[ext]',
          },
        },
      },
      {
        test: /\.(ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}

module.exports = [
  merge(config, serverConfig),
  merge(config, clientConfig)
]