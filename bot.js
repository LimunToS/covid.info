const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

const lineReader = require('line-reader');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

let nizTakmicara = [];

lineReader.eachLine('takmicari.txt', line => {
    nizTakmicara.push(JSON.parse(line));
});

client.once('ready', () =>{
    console.log('Im online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const comand = args.shift().toLowerCase();
    
    if(comand === 'radi'){
        client.commands.get('radi').execute(message, args);
    }
    if(comand === 'login'){
        client.commands.get('login').execute(message, args, nizTakmicara);
    }
    if(comand === 'rename'){
        client.commands.get('rename').execute(message, args,nizTakmicara);       
    }
    if(comand === 'info'){
        client.commands.get('info').execute(message,nizTakmicara);
    }
    if(comand === 'vote'){
        client.commands.get('vote').execute(message,args,nizTakmicara);
    }
    if(comand === 'ranklist'){
        client.commands.get('ranklist').execute(message,nizTakmicara);
    }
    if(comand === 'update'){
        client.commands.get('update').execute(message,args,nizTakmicara);
        client.commands.get('ranklist').execute(message,nizTakmicara);
    }
    if(comand === 'help'){
        client.commands.get('help').execute();
    }
});


client.login('NzcyMDUzMzU5MjcyMjYzNjkw.X51EuA.Yix3LKeCP2rEVMZ3IQj7VUHl1cc');