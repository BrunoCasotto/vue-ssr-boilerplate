const path = require('path')
const optimization = require('./partials/optimization')
const { clientPlugins } = require('./partials/plugins')

module.exports = {
  entry: [
    path.join(__dirname, '..', 'entry', 'client.js'),
    path.join(__dirname, '..', 'resources', 'images', 'favicon.ico'),
  ],
  plugins: clientPlugins,
  optimization,
}