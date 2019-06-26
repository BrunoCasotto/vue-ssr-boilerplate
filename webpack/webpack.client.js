const path = require('path')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = {
  entry: [
    path.join(__dirname, '..', 'entry', 'client.js'),
    path.join(__dirname, '..', 'resources', 'images', 'favicon.ico'),
  ],
  plugins: [
    new VueSSRClientPlugin(),
  ],
}