const renderFactory = require('./renderFactory')
const contextFactory = require('./contextFactory')

class MainController {

  async render(req, res) {
    const dataFromApi = {
      product: {
        name: 'product_name',
        price: 10000,
      },
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