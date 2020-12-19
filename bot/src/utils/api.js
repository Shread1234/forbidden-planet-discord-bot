const axios = require('axios')

const baseUrl = "https://forbidden-planet.herokuapp.com/api/"

exports.checkSteamId = async (steamId, server) => {
  return await axios.get(`${baseUrl}steamid?steamId=${steamId}`)
}