const axios = require("axios")

const channelToTableNameMapping = {
  "『💫』𝘼𝙗𝙗𝙚𝙧𝙖𝙩𝙞𝙤𝙣": "abberation_steamids",
  "『⚡』𝙀𝙭𝙩𝙞𝙣𝙘𝙩𝙞𝙤𝙣": "extinction_steamids",
  "『🌌』𝙂𝙚𝙣𝙚𝙨𝙞𝙨": "genesis_steamids",
  "『🌋』𝙍𝙖𝙜𝙣𝙖𝙧𝙤𝙠": "ragnarok_steamids",
  "『🌴』𝙑𝙖𝙡𝙜𝙪𝙚𝙧𝙤": "valguero_steamids",
  "『💎』𝘾𝙧𝙮𝙨𝙩𝙖𝙡-𝙄𝙨𝙡𝙚𝙨": "crystal_isles_steamids",
  "test-server": "test_steamids",
  "『🐉』𝘾𝙚𝙣𝙩𝙚𝙧": "center_steamids",
  "『🌲』𝙄𝙨𝙡𝙖𝙣𝙙": "island_steamids",
}

const baseUrl = "https://forbidden-planet.herokuapp.com/api/"

function getTableName(channelName) {
  return channelToTableNameMapping[channelName]
}

exports.checkSteamId = async (steamId, channelName) => {
  const tableName = getTableName(channelName)
  return await axios.get(`${baseUrl}steamid?steamId=${steamId}&tableName=${tableName}`)
}

exports.insertSteamId = async (steamId, channelName) => {
  const tableName = getTableName(channelName)
  return await axios.post(`${baseUrl}steamid?steamId=${steamId}&tableName=${tableName}`)
}

exports.removeSteamId = async (steamId, channelName) => {
  throw new Error("Not yet implemented")
}
