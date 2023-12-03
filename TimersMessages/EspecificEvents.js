const { timerMsg } = require("../utils/timerMsg");

function getMondayEvents(channel) {
  timerMsg(channel, "00 20 * * *", "Começou o Evento As Cavaleiro");
}

function getSundayEvents(channel) {
  timerMsg(channel, "45 19 * * *", "Em 5 Minutos irá Começar o Evento Erudito");

  timerMsg(channel, "15 20 * * *", "Em 5 Minutos irá Começar o Evento Miragem");
}

function getTuesdayEvents(channel) {
  timerMsg(channel, "30 19 * * *", "Em 30 Minutos irá Começar a GvG");
}

function getWednessdayEvents(channel) {
  timerMsg(channel, "55 19 * * *", "Em 5 Minutos irá Começar o Evento Corrida");
}

function getThursdayEvents(channel) {
  timerMsg(channel, "30 19 * * *", "Em 30 Minutos irá Começar a GvG");
}

function getFridayEvents(channel) {
  timerMsg(
    channel,
    "5 19 * * *",
    "Em 5 Minutos irá Começar o Evento Susserano"
  );

  timerMsg(channel, "55 15 * * *", "Em 5 Minutos irá Começar o Boss da Ruina");

  timerMsg(channel, "55 23 * * *", "Em 5 Minutos irá Começar o Boss da Ruina");
}

function getSaturdayEvents(channel) {
  timerMsg(channel, "00 14 * * *", "Torre Celestial está Aberta");

  timerMsg(channel, "55 15 * * *", "Em 5 Minutos irá Começar o Boss da Ruina");

  timerMsg(channel, "00 22 * * *", "O Evento Guerra das Abóboras está Aberto");

  timerMsg(channel, "30 23 * * *", "Torre Celestial está Fechada");

  timerMsg(channel, "55 23 * * *", "Em 5 Minutos irá Começar o Boss da Ruina");

  timerMsg(channel, "59 23 * * *", "O Evento Guerra das Abóboras está Fechado");
}
module.exports = {
  getSundayEvents,
  getMondayEvents,
  getTuesdayEvents,
  getWednessdayEvents,
  getThursdayEvents,
  getFridayEvents,
  getSaturdayEvents,
};
