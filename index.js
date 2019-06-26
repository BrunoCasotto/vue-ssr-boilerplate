const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

const staticPath = path.resolve(__dirname, 'dist')
app.use('/static', express.static(staticPath))

const MainController = require('./src/controller')
const controller = new MainController()
app.get('*', controller.render)

app.listen(
  port,
  () => {
    console.log(`Example app listening on ${port}!`)
  }
)
