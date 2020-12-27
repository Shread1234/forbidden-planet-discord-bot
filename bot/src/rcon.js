require("dotenv").config({ path: `${__dirname}/../.env` })
const { Rcon } = require("rcon-client")

const channelToServerNameMapping = {
  "『💫』𝘼𝙗𝙗𝙚𝙧𝙖𝙩𝙞𝙤𝙣": "RCON_ABBERATION_PORT",
  "『⚡』𝙀𝙭𝙩𝙞𝙣𝙘𝙩𝙞𝙤𝙣": "RCON_EXTINCTION_PORT",
  "『🌌』𝙂𝙚𝙣𝙚𝙨𝙞𝙨": "RCON_GENESIS_PORT",
  "『🌋』𝙍𝙖𝙜𝙣𝙖𝙧𝙤𝙠": "RCON_RAGNAROK_PORT",
  "『🌴』𝙑𝙖𝙡𝙜𝙪𝙚𝙧𝙤": "RCON_VALGUERO_PORT",
  "『💎』𝘾𝙧𝙮𝙨𝙩𝙖𝙡-𝙄𝙨𝙡𝙚𝙨": "RCON_CRYSTAL_PORT",
  "test-server": "RCON_TEST_PORT",
  "『🐉』𝘾𝙚𝙣𝙩𝙚𝙧": "RCON_CENTER_PORT",
}

async function giveSteamIDPoints(steamId, server) {
  server.on("authenticated", () => console.log("Server connection authenticated"))
  server.on("error", (error) => {
    server.end()
    throw error
  })
  console.log("connecting...")
  await server.connect()
  console.log("connected!")
  const command = `ScriptCommand TCsAR AddArcTotal ${steamId} 5000`
  console.log(`Sending command: ${command}`)
  await server.send(command)
  console.log("command successful")
  server.end()
}

async function connectAndSendPoints(steamId, channelName) {
  const serverPort = channelToServerNameMapping[channelName]
  const server = new Rcon({
    host: process.env.RCON_HOST,
    port: process.env[serverPort],
    password: process.env.RCON_ALL_SERVERS_PASSWORD,
  })
  await giveSteamIDPoints(steamId, server)
}

module.exports = { connectAndSendPoints }
