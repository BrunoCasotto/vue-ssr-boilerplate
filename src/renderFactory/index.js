const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const LRU = require('lru-cache')

const templatePath = path.join(__dirname, '..', '..', 'template.html')
const template = require('fs').readFileSync(templatePath,'utf-8')

const clientManifest = require('./../../dist/vue-ssr-client-manifest.json')
const serverBundle = require('./../../dist/vue-ssr-server-bundle.json')

class RenderFactory {
  constructor() {
    this.renderer = this.createRenderer()
  }

  createRenderer() {
    const renderer = createBundleRenderer(serverBundle, {
      cache: new LRU({
        max: 10000,
        maxAge: 1000 * 15
      }),
      template,
      clientManifest,
    })

    return renderer
  }

  getRenderer() {
    return this.renderer
  }
}

module.exports = new RenderFactory()