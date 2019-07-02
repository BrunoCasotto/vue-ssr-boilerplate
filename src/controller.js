const renderFactory = require('./renderFactory')
const contextFactory = require('./contextFactory')
const apiService = require('./service')
class MainController {
  async render(req, res) {
    const { id } = req.query
    //mock purpose
    const dataFromApi = {
      product: apiService.getProduct(id)
    }

    const { url } = req
    const context = contextFactory.getContext(url, {
      Product: dataFromApi.product
    })

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