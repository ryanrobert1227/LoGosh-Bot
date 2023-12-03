const { EmbedBuilder } = require("discord.js");

function replyMsg(msg, title, description) {
  return msg.reply({
    embeds: [
      new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor("Random"),
    ],
  });
}

function sendMsg(channel, title, description) {
  return channel.send({
    embeds: [
      new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor("Random"),
    ],
  });
}

module.exports = {
  replyMsg,
  sendMsg,
};
