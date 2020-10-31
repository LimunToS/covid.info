module.exports = {
    name: 'info',
    execute(message,nizTakmicara){
        for(const elem of nizTakmicara){
            if(elem.id == message.author.id){
                message.channel.send(`Ime: ${elem.ime}`);
                message.channel.send(`Broj poena: ${elem.poeni}`);
                message.channel.send(`Poslednji vote: ${elem.vote}`);
                //message.channel.send(`RANK: #TODO`);
            }
        }
    }
}