// Initialize
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("The RBXBot is started");
});

// Set the prefix
const prefix = '?';
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
  
   if (message.content === '!ping') {
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }

  if (message.content === '!server-info') {
    let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)

        message.channel.send(embed)
  }
  if (message.content === '!invite') {
    message.channel.send(' Invite Me To Ur Discord Server https://discord.com/api/oauth2/authorize?client_id=775469641790783549&permissions=8&scope=bot')
  }
  if (message.content === '!help') {
    message.channel.send(' Commands Are ?help ?invite ?ping ?server-info')
  }
});

const config = require('./config.json');

client.login(config.token)
