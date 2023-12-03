const { timerMsg } = require("../utils/timerMsg");

function getRacoonsTime(channel) {
  timerMsg(channel, "00 12 * * *", "Inicio do Ataque da Legião dos Guaxinins");

  timerMsg(
    channel,
    "45 18 * * *",
    "Em 5 Minutos irá Começar Invasão de Guaxinins"
  );

  timerMsg(channel, "30 00 * * *", "Fim do Ataque da Legião dos Guaxinins");
}

function getBugTime(channel) {
  timerMsg(channel, "15 12 * * *", "Inicio da Caça aos Insetos");

  timerMsg(channel, "45 1 * * *", "Fim da Caça aos Insetos");
}

function getWorldBossTime(channel) {
  timerMsg(channel, "25 13 * * *", "Em 5 Minutos irá Começar Chefe do Mundo");

  timerMsg(channel, "25 17 * * *", "Em 5 Minutos irá Começar Chefe do Mundo");

  timerMsg(channel, "25 23 * * *", "Em 5 Minutos irá Começar Chefe do Mundo");
}

function getTreasureHunterTime(channel) {
  timerMsg(
    channel,
    "55 14 * * *",
    "Em 5 Minutos irá Começar Caçador de Tesouros"
  );

  timerMsg(
    channel,
    "55 21 * * *",
    "Em 5 Minutos irá Começar Caçador de Tesouros"
  );
}

function getKingdomEventsTime(channel) {
  timerMsg(
    channel,
    "55 11 * * *",
    "Em 5 Minutos irá Começar os Eventos do Reino"
  );

  timerMsg(
    channel,
    "55 13 * * *",
    "Em 5 Minutos irá Começar os Eventos do Reino"
  );

  timerMsg(
    channel,
    "55 15 * * *",
    "Em 5 Minutos irá Começar os Eventos do Reino"
  );

  timerMsg(
    channel,
    "55 17 * * *",
    "Em 5 Minutos irá Começar os Eventos do Reino"
  );

  timerMsg(
    channel,
    "55 19 * * *",
    "Em 5 Minutos irá Começar os Eventos do Reino"
  );

  timerMsg(
    channel,
    "55 23 * * *",
    "Em 5 Minutos irá Começar os Eventos do Reino"
  );

  timerMsg(
    channel,
    "55 01 * * *",
    "Em 5 Minutos irá Começar os Eventos do Reino"
  );
}

function getApocTime(channel) {
  timerMsg(channel, "00 7 * * *", "Trilha da Revelação está Aberta!");
}

function getZodiacTime(channel) {
  timerMsg(channel, "25 12 * * *", "Em 5 Minutos irá Começar o Boss Zodíaco");
}

function getGuildBall(channel) {
  timerMsg(channel, "25 21 * * *", "Em 5 Minutos irá Começar o Baile da Guild");
}

module.exports = {
  getRacoonsTime,
  getBugTime,
  getWorldBossTime,
  getTreasureHunterTime,
  getKingdomEventsTime,
  getApocTime,
  getZodiacTime,
  getGuildBall,
};
