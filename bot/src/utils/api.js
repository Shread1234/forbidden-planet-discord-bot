const axios = require("axios")

const baseUrl = "https://forbidden-planet.herokuapp.com/api/"

exports.checkSteamId = async (steamId, server) => {
  return await axios.get(`${baseUrl}steamid?steamId=${steamId}server=${server}`)
}

exports.insertSteamId = async (steamId, server) => {
  return await axios.post(`${baseUrl}steamid?steamId=${steamId}server=${server}`)
}

exports.removeSteamId = async (steamId, server) => {
  throw new Error("Not yet implemented")
}
