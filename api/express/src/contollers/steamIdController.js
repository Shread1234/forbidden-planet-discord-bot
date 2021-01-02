const { selectSteamId, insertSteamId, sendAllSteamIds } = require("../models/steamIdModel")

exports.getSteamId = async (req, res) => {
  const { steamId, tableName } = req.query
  if (!steamId.length) {
    return res.status(400).send("Invalid Steam ID")
  }
  if (steamId === "all") {
    try {
      const result = await sendAllSteamIds(tableName)
      return res.status(200).send(result)
    } catch (error) {
      return res.status(400).send(error)
    }
  }
  try {
    const selectResult = await selectSteamId(steamId, tableName)
    if (!selectResult.length) {
      return res.status(200).send("Steam ID not found")
    } else {
      return res.status(200).send(selectResult)
    }
  } catch (error) {
    return res.status(400).send(error)
  }
}

exports.postSteamId = async (req, res) => {
  const { steamId, tableName } = req.query
  if (!steamId.length) {
    return res.status(400).send("Invalid Steam ID")
  }
  try {
    await insertSteamId(steamId, tableName)
    return res
      .status(200)
      .send(`Steam id ${steamId} was successfully added to the ${tableName} database.`)
  } catch (error) {
    return res.status(400).send(error)
  }
}

exports.deleteSteamId = async (req, res) => {
  throw new Error("Not yet implemented")
}
