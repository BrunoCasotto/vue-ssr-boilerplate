const path = require('path')
const merge = require('webpack-merge')
const serverConfig = require('./webpack.server')
const clientConfig = require('./webpack.client')
const rules = require('./partials/rules')
const plugins = require('./partials/plugins')

const config = {
  mode: process.env.NODE_ENV,
  watch: true,
  devtool: 'source-map',
  output: {
    publicPath: '/static',
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
    rules,
  },
  plugins,
}

module.exports = [
  merge(config, serverConfig),
  merge(config, clientConfig)
]