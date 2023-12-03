const cron = require("node-cron");
const { EmbedBuilder } = require("discord.js");

function timerMsg(channel, time, msg) {
  cron.schedule(time, () => {
    channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("Hora do Evento!!")
          .setDescription(msg + " @everyone")
          .setColor("Random"),
      ],
    });
  });
}

module.exports = {
  timerMsg,
};
