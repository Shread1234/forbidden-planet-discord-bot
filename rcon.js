require("dotenv").config()
const { Rcon } = require("rcon-client")

const rconCystalIsles = new Rcon({
  host: process.env.RCON_CRYSTAL_ISLES_HOST,
  port: process.env.RCON_CRYSTAL_ISLES_PORT,
  password: process.env.RCON_ALL_SERVERS_PASSWORD,
})

async function giveSteamIDPoints(steamId, server) {
  server.on("authenticated", () => console.log("Server connection authenticated"))
  server.on("error", (error) => {
    throw error
  })
  console.log("connecting...")
  await server.connect()
  console.log("connected!")
  server.end()
}

async function connectAndSendPoints(steamId) {
  try {
    await giveSteamIDPoints(steamId, rconCystalIsles)
  } catch (error) {
    console.log(`Error giving points: ${error}`)
  }
}

module.exports = { connectAndSendPoints }
