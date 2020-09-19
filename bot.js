require("dotenv").config();
const Discord = require("discord.js");

const bot = new Discord.Client();

const botListeningChannel = "dev-test-steamid";

function correctMessageChannel(channelName) {
  return channelName === botListeningChannel;
}

bot.on("ready", () => {
  console.log("Bot ready");
});

bot.on("message", (message) => {
  if (!correctMessageChannel(message.channel.name)) {
    return;
  }
  if (message === "devTest") {
    message.channel.send("test complete");
  }
});

bot.login(process.env.DISCORD_TOKEN);
