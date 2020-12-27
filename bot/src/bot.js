require("dotenv").config({ path: `${__dirname}/../../.env` })
const { connectAndSendPoints } = require("./rcon")
const { checkSteamId } = require("./utils/api")
const Discord = require("discord.js")

const bot = new Discord.Client()

const botListeningChannels = [
  "『💫』𝘼𝙗𝙗𝙚𝙧𝙖𝙩𝙞𝙤𝙣",
  "『⚡』𝙀𝙭𝙩𝙞𝙣𝙘𝙩𝙞𝙤𝙣",
  "『🌌』𝙂𝙚𝙣𝙚𝙨𝙞𝙨",
  "『🌋』𝙍𝙖𝙜𝙣𝙖𝙧𝙤𝙠",
  "『🌴』𝙑𝙖𝙡𝙜𝙪𝙚𝙧𝙤",
  "『💎』𝘾𝙧𝙮𝙨𝙩𝙖𝙡-𝙄𝙨𝙡𝙚𝙨",
  "test-server",
  "『🐉』𝘾𝙚𝙣𝙩𝙚𝙧",
]

function correctMessageChannel(channelName) {
  return botListeningChannels.includes(channelName)
}

bot.on("ready", () => {
  console.log("Bot ready")
})

bot.on("message", async (message) => {
  if (!correctMessageChannel(message.channel.name)) {
    return
  }
  if (message.content.includes("!points")) {
    try {
      message.channel.send(`Channel detected as ${message.channel.name}`)
      const [_, steamId] = message.content.split(" ")
      console.log("steamID", steamId)
      const channelName = message.channel.name
      // const serverCheck = await checkSteamId(steamId, channelName)
      // if: throw error and message channel
      // else continue
      // add id to correct table for map
      await connectAndSendPoints(steamId, channelName)
      message.channel.send("test complete")
    } catch (error) {
      console.log(error)
      message.channel.send(
        `Something went wrong allocating points. Error: ${error.message.replace(
          /Error:/,
          "",
        )}. FYI: <@!252777113579552769> <@!220878901084160012>`,
      )
    }
  }
})

bot.login(process.env.DISCORD_TOKEN)
