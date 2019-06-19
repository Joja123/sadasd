const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTkxMDA1Njc3NzAzNTI4NDkx.XQqlbg.I3Yodh7cgYhpHDO0xDBSwM0GLn4);
