const Discord = require("discord.js");
const config = require('../config.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "COMPETING", name: `Reawen ❤️ Ravenn`}, status: 'online' })
};
