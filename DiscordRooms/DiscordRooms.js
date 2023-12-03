const { replyMsg } = require("../utils/responseMsg");

function DiscordRooms(msg) {
  if (msg.content.slice(1).toLowerCase() === "gvg") {
    replyMsg(
      msg,
      "GvG",
      "Informaçãoes sobre GvG podem ser encontradas em: https://discord.com/channels/881326331000922173/1165686861688217720"
    );
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "fada") {
    replyMsg(
      msg,
      "Fada",
      "Informaçãoes sobre fada podem ser encontradas em: https://discord.com/channels/881326331000922173/1165378305181098034"
    );
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "zodiaco") {
    replyMsg(
      msg,
      "Zodiac",
      "Informaçãoes sobre Zodiaco podem ser encontradas em: https://discord.com/channels/881326331000922173/1165375559640031303"
    );
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "erudito") {
    replyMsg(
      msg,
      "Fada",
      "Informaçãoes sobre Erudito podem ser encontradas em: https://discord.com/channels/881326331000922173/1165379473584177202"
    );
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "receitas") {
    replyMsg(
      msg,
      "Receitas",
      "Informaçãoes sobre Receitas podem ser encontradas em: https://discord.com/channels/881326331000922173/1165380421085835324"
    );
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "wb") {
    replyMsg(
      msg,
      "Boss do Mundo",
      "Informaçãoes sobre WorldBoss podem ser encontradas em: https://discord.com/channels/881326331000922173/1165371256418349138"
    );
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "eyes") {
    replyMsg(
      msg,
      "Truesight Eye",
      "Informaçãoes sobre Truesight Eye podem ser encontradas em: https://discord.com/channels/881326331000922173/1165371256418349138"
    );
    return;
  }
}

module.exports = {
  DiscordRooms,
};
