var express = require('express')
var app = express()
const port = process.env.PORT || 8080

const MainController = require('./src/main-controller')
const controller = new MainController()

app.get('/*', controller.render)
app.listen(port, () => (console.log(`Example app listening on ${port} 3000!`)))