require("dotenv").config()
const { Rcon } = require("rcon-client")

const rconCystalIsles = new Rcon({
  host: process.env.RCON_CRYSTAL_HOST,
  port: process.env.RCON_CRYSTAL_PORT,
  password: process.env.RCON_ALL_SERVERS_PASSWORD,
})

async function giveSteamIDPoints(steamId, server) {
  server.on("authenticated", () => console.log("Server connection authenticated"))
  server.on("error", (error) => {
    server.end()
    throw error
  })
  console.log("connecting...")
  await server.connect()
  console.log("connected!")
  await server.send(`ScriptCommand TCsAR AddArcTotal ${steamId} 5000`)
  server.end()
}

async function connectAndSendPoints(steamId) {
  await giveSteamIDPoints(steamId, rconCystalIsles)
}

module.exports = { connectAndSendPoints }
