const steamIdRouter = require("express").Router()
const { getSteamId, postSteamId, deleteSteamId } = require("../contollers/steamIdController")

steamIdRouter.route("/").get(getSteamId).post(postSteamId).delete(deleteSteamId)

module.exports = steamIdRouter
