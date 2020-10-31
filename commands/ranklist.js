const fs = require('fs');
module.exports = {
    name: 'ranklist',
    execute(message, nizTakmicara){
        nizTakmicara.sort((a,b)=>{
            return a.poeni-b.poeni;
        });
        let k = 1;
        for(const elem of nizTakmicara){
            message.channel.send(`${k}. ${elem.ime} ${elem.poeni}`);
            k++;
        }
    }
}