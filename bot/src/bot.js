require("dotenv").config({ path: `${__dirname}/../../.env` })
const { connectAndSendPoints } = require("./rcon")
const { checkSteamId, insertSteamId } = require("./utils/api")
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
  if (/^!points\s\d{16,17}$/.test(message.content)) {
    try {
      const [_, steamId] = message.content.split(" ")
      const channelName = message.channel.name
      const { data } = await checkSteamId(steamId, channelName)
      if (data !== "Steam ID not found") {
        message.channel.send(
          `Steam id: ${
            data[0].steam_id
          } already received their points for ${channelName} on ${new Date(
            data[0].created_at,
          )}. If you have deleted your character and require points, please contact SkEeZ or Shread.`,
        )
        return
      }
      await connectAndSendPoints(steamId, channelName)
      await insertSteamId(steamId, channelName)
      message.channel.send(`Enjoy your points ${message.author.username}!`)
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
