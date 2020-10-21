require("dotenv").config()
const { connectAndSendPoints } = require("./rcon")
const Discord = require("discord.js")

const bot = new Discord.Client()

const botListeningChannel = "dev-test-steamid"
const toAllocatePointsRole = 'devtest-role'

function correctMessageChannel(channelName) {
  return channelName === botListeningChannel
}

bot.on('ready', () => {
  console.log('Bot ready')
})

bot.on("message", async (message) => {
  if (!correctMessageChannel(message.channel.name)) {
    return
  }
  if (message.content.includes("devtest")) {
      const pointsToAllocateRole = message.guild.roles.cache.find((role) => role.name === toAllocatePointsRole)
      try {
        const steamId = message.content.split(" ")[1]
        // is ID in db?
        // if: throw error and message me and luke
        // else continue
        await connectAndSendPoints(steamId)
        // add ID to db
        message.member.roles.remove(pointsToAllocateRole)
        message.channel.send('devtest-role removed')
        message.channel.send('test complete')
      } catch (error) {
        console.log(error)
        message.channel.send(`Something went wrong allocating points. Error: ${error.message.replace(/Error:/, '')}`)
      }
  }
})

bot.login(process.env.DISCORD_TOKEN)
