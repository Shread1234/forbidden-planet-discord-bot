const { selectSteamId, insertSteamId } = require("../models/steamIdModel")

const serverToTableMapping = {
  "crystal isles": "crystal_isles_steamids",
  ragnarok: "ragnarok_steamids",
  abberation: "abberation_steamids",
  extinction: "extinction_steamids",
  genesis: "genesis_steamids",
  valguero: "valguero_steamids",
  test: "test_steamids",
}

exports.getSteamId = async (req, res) => {
  const { steamId, server } = req.query
  if (!steamId.length) {
    res.status(400).send("Invalid Steam ID")
    return
  }
  try {
    const selectResult = await selectSteamId(steamId, server)
    if (!selectResult.length) {
      res.status(200).send("Steam ID not found")
      return
    } else {
      res.status(200).send(selectResult)
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.postSteamId = async (req, res) => {
  const { steamId, server } = req.query
  if (!steamId.length) {
    res.status(400).send("Invalid Steam ID")
    return
  }
  try {
    await insertSteamId(steamId, server)
    res.status(200).send(`Steam id ${steamId} was successfully added to the ${server} database.`)
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.deleteSteamId = async (req, res) => {
  throw new Error("Not yet implemented")
}
