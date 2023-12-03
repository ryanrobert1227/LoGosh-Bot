const { EmbedBuilder } = require("discord.js");
const axios = require("axios");

const { tempApi } = require("./config.json");

function handleGetTemp(msg) {
  const cidade = msg.content.split(" ")[1];
  if (cidade === undefined) {
    return msg.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Erro, Comando incompleto")
          .setDescription("Em Qual Cidade?")
          .setColor("Random"),
      ],
    });
  }
  axios
    .get(tempApi.apiUrl + cidade + "&appid=" + tempApi.apiKey)
    .then((response) => {
      const temperatura = response.data.main.temp;
      return msg.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Cidade encontrada com sucesso!")
            .setDescription(
              `A temperatura em ${cidade} é: ${(temperatura - 273.15).toFixed(
                2
              )} °C`
            )
            .setColor("Random"),
        ],
      });
    })
    .catch((error) => {
      if (error.response.data.message === "city not found") {
        return msg.reply(`A ${cidade} não foi encontrada!`);
      }
      console.error("Erro ao obter temperatura:", error);
    });
  return;
}

module.exports = {
  handleGetTemp,
};
