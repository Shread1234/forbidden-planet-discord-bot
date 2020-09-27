require("dotenv").config()
const { Rcon } = require("rcon-client")

const rconCystalIsles = new Rcon({
  host: process.env.RCON_CENTER_HOST,
  port: process.env.RCON_CENTER_PORT,
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
  const test = await server.send(`ScriptCommand TCsAR AddArcTotal ${steamId} 5000`)
  console.log(test)
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
