const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("511598752369344528")
setInterval(function() {
channel.send(`**Volly,Volly,Volly,Volly,Volly,**`);
}, 25)
})
 
client.on('message', message => {
    var prefix = "2";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
  
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + 'say')) {
        message.channel.send(''+x);
            message.delete(999)
    }
    
   
  });

client.login(process.env.BOT_TOKEN1);  
