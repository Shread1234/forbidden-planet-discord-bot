const apiRouter = require('express').Router()
const steamIdRouter = require('./steamIdRouter')

apiRouter.use('/steamid', steamIdRouter)

module.exports = apiRouter