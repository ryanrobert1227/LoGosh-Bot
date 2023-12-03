const { Client, GatewayIntentBits, Events } = require("discord.js");
const { token, sadWords, sendEventsChannel } = require("./config.json");
const { data } = require("./cards.json");

const { handleGetTemp } = require("./externalApi");

const { replyMsg, sendMsg } = require("./utils/responseMsg");

const {
  getRacoonsTime,
  getBugTime,
  getWorldBossTime,
  getTreasureHunterTime,
  getKingdomEventsTime,
  getApocTime,
  getGuildBall,
  getZodiacTime,
} = require("./TimersMessages/DailyEvents");
const {
  getSundayEvents,
  getMondayEvents,
  getTuesdayEvents,
  getWednessdayEvents,
  getThursdayEvents,
  getFridayEvents,
  getSaturdayEvents,
} = require("./TimersMessages/EspecificEvents");

const { DiscordRooms } = require("./DiscordRooms/DiscordRooms");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
const date = new Date();

client.once(Events.ClientReady, (c) => {
  console.log(`Ready, Logged in as ${c.user.tag}`);
});

const prefix = "?";

client.on("ready", () => {
  const channel = client.channels.cache.get(sendEventsChannel);
  const dayWeek = date.getDay();

  // Geral Events
  getKingdomEventsTime(channel);
  getRacoonsTime(channel);
  getBugTime(channel);
  getWorldBossTime(channel);
  getTreasureHunterTime(channel);

  if (dayWeek % 2 === 0) {
    getZodiacTime(channel);
  } else {
    getApocTime(channel);
    getGuildBall(channel);
  }

  // Especific Events

  // Sunday
  if (dayWeek === 0) {
    getSundayEvents(channel);
  }

  //Monday
  if (dayWeek === 1) {
    getMondayEvents(channel);
  }

  //Tuesday
  if (dayWeek === 2) {
    getTuesdayEvents(channel);
  }

  //Wednessday
  if (dayWeek === 3) {
    getWednessdayEvents(channel);
  }

  if (dayWeek === 4) {
    getThursdayEvents(channel);
  }

  if (dayWeek === 5) {
    getFridayEvents(channel);
  }

  if (dayWeek === 6) {
    getSaturdayEvents(channel);
  }
});

client.on(Events.MessageCreate, (msg) => {
  if (msg.author.bot || msg.content.slice(0, 1) !== prefix) return;

  DiscordRooms(msg);

  if (msg.content.slice(1).toLowerCase() === "ping") {
    replyMsg(msg, "Ping!", "Pong!");
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "equips") {
    msg.channel.send("https://imgur.com/oZlRN1L");
    return;
  }

  if (msg.content.split(" ")[0].slice(1).toLowerCase() === "card") {
    const cardName = msg.content.split(" ")[1];

    if (!cardName) {
      sendMsg(msg.channel, "Qual?", "Por favor,  especifique a carta");
      return;
    }

    const getSelectedData = data.find(
      (item) => item.name.toLowerCase() === cardName.toLowerCase()
    );

    if (!getSelectedData) {
      sendMsg(
        msg.channel,
        "Erro, Essa Carta Existe?",
        "Caso tenha certeza de que a carta foi digitada corretamente, fale com um Staff."
      );
      return;
    }

    const aboutCard = `Name: ${getSelectedData.name}\nTier: ${
      getSelectedData.tier
    }\nSlot: ${getSelectedData.type}\nAttributes: ${getSelectedData.att.map(
      (item) => "```\n" + item + "```"
    )}`;

    sendMsg(msg.channel, getSelectedData.name, aboutCard.replaceAll(",", ""));
    msg.delete();
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "cardlist") {
    const getList = data.map((item) => "```\n" + item.name + "```");

    const replaced = getList.join(",").replaceAll(",", "");

    sendMsg(msg.channel, "Lista de cartas", `${replaced}`);
    msg.delete();
    return;
  }

  if (msg.content.slice(1).toLowerCase() === "salario") {
    replyMsg(msg, "E o salario?", "láaaaaaaaaaaaaaaa enbaxiooo...");
    return;
  }

  if (msg.content.split(" ")[0].slice(1).toLowerCase() === "noticia") {
    if (msg.author.id !== 378714231996022804) return msg.delete();

    const title = msg.content.slice(
      msg.content.indexOf("(") + 1,
      msg.content.indexOf(")")
    );

    const conteudo = msg.content.slice(
      msg.content.indexOf("<") + 1,
      msg.content.indexOf(">")
    );
    sendMsg(msg.channel, title, conteudo);

    msg.delete();
  }
});

client.login(token);

// for (let sadWord of sadWords) {
//   if (msg.content.toLowerCase().split(" ").includes(sadWord.toLowerCase())) {
//     const channel = client.channels.cache.get(msg.channelId);
//     if (channel) {
//       msg.delete();
//       sendMsg(
//         channel,
//         "Ops!",
//         `${msg.author} Você não deveria fala essas coisas!!`
//       );
//     } else {
//       console.error("Canal não encontrado!");
//     }
//   }
// }
