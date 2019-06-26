const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

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