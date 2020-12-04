const { selectSteamId, insertSteamId } = require('../models/steamIdModel')

exports.getSteamId = async (req, res) => {
  const { steamId } = req.query
  if(!steamId.length) {
    return res.status(400).send('Invalid Steam ID')
  }
  try {
    const selectResult = await selectSteamId(steamId)
    if(!selectResult.length) {
      return res.status(404).send('steamId not found')
    } else {
      return res.status(200).send(selectResult)
    }
  } catch (error) {
    return res.status(400).res.send(error)
  }
}

exports.postSteamId = async (req, res) => {
  const { steamId } = req.query 
    if(!steamId.length) {
    res.status(400).send('Invalid Steam ID')
    return
  }
  try {
    await insertSteamId(steamId)
    return res.status(200).send(`Steam id ${steamId} was successfully added to the database.`)
  } catch (error) {
    return res.status(400).res.send(error)
  }
}