module.exports = {
    name: 'info',
    execute(message,nizTakmicara){
        for(const elem of nizTakmicara){
            if(elem.id == message.author.id){
                message.channel.send('```'+`Ime: ${elem.ime}\nBroj poena: ${elem.poeni}\nPoslednji vote: ${elem.vote} \nDnevnih pobeda: ${elem.dw}`+'```');

                //message.channel.send(`RANK: #TODO`);
            }
        }
    }
}