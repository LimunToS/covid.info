const fs = require('fs');
module.exports = {
    name: 'vote',
    execute(message,args,nizTakmicara){
        for(const elem of nizTakmicara){
            if(elem.id == message.author.id){
                elem.vote = parseInt(args[0],10);
                message.channel.send('Uspesno ste glasali');
                break;
            }
        }
        fs.open('takmicari.txt','w',(err)=>{
            if (err) {
                throw err;
            }
        });
        for(const elem of nizTakmicara){
            fs.appendFile('takmicari.txt',JSON.stringify(elem),(err)=>{
                if (err) {
                    throw err;
                }
            });
        }
    }
}