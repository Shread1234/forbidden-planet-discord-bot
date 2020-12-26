require("dotenv").config({ path: `${__dirname}/../.env` })
const { connectAndSendPoints } = require("./rcon")
const { checkSteamId } = require("./utils/api")
const Discord = require("discord.js")

const bot = new Discord.Client()

const botListeningChannel = "dev-test-steamid"

function correctMessageChannel(channelName) {
  console.log("channelName", channelName)
  return channelName === botListeningChannel
}

bot.on("ready", () => {
  console.log("Bot ready")
})

bot.on("message", async (message) => {
  if (!correctMessageChannel(message.channel.name)) {
    return
  }
  if (message.content.includes("devtest")) {
    try {
      console.log(message.content)
      const [_, server, steamId] = message.content.split(" ")
      const serverCheck = await checkSteamId(steamId, server)
      // if: throw error and message channel
      console.log("serverCheck", serverCheck)
      // else continue
      // add id to correct table for map
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
