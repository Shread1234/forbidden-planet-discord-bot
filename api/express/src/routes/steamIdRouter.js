const steamIdRouter = require('express').Router()
const { getSteamId, postSteamId } = require('../contollers/steamIdController')

steamIdRouter.route('/').get(getSteamId).post(postSteamId)

module.exports = steamIdRouter