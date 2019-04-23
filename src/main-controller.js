const path = require('path')
const { createRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync(path.join(__dirname, '..', 'template.html'),'utf-8')
const clientManifest = require('./../dist/vue-ssr-client-manifest.json')
const serverBundle = require('./../dist/server.bundle')

class MainController {

  async render(req, res) {
    const { url } = req

    const context = {
      title: 'vue page',
      url,
      state: {
        Utils: {
          page: 'search'
        }
      }
    }

    const renderer = createRenderer({
      template,
      clientManifest,
    })

    const app = await serverBundle.default(context)

    renderer.renderToString(app, context, (error, html) => {
      if (error) {
        console.error('MainController.render', { error })
      }

      res.send(html)
    })
  }
}

module.exports = MainController