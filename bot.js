require("dotenv").config()
const { connectAndSendPoints } = require("./rcon")
const Discord = require("discord.js")

const bot = new Discord.Client()

const botListeningChannel = "dev-test-steamid"

function correctMessageChannel(channelName) {
  return channelName === botListeningChannel
}

bot.on("ready", () => {
  console.log("Bot ready")
})

bot.on("message", async (message) => {
  if (!correctMessageChannel(message.channel.name)) {
    return
  }
  if (message.content.includes("devTest")) {
    const steamId = message.content.split(" ")[1]
    await connectAndSendPoints(steamId)
    message.channel.send("test complete")
  }
})

bot.login(process.env.DISCORD_TOKEN)
