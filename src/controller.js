const renderFactory = require('./renderFactory')
const contextFactory = require('./contextFactory')

class MainController {

  async render(req, res) {
    const { url } = req
    const context = contextFactory.getContext(url, {})
    const renderer = renderFactory.getRenderer()

    renderer.renderToString(context, (error, html) => {
      if (error) {
        console.error('MainController.render', { error })
      }

      res.send(html)
    })
  }
}

module.exports = MainController