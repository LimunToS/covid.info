const fs = require('fs');
module.exports = {
    name: 'login',
    execute(message, args, nizTakmicara){
        if(args.length !== 1){
            message.channel.send('Unesite ispravan broj argurmenata: -login ime');
            return;
        }
        
        for(const elem of nizTakmicara){
            if(elem.id == message.author.id){
                message.channel.send('Govno jedno već si registrovan!');
                return;
            }
        }

        for(const elem of nizTakmicara){
            if(elem.ime == args[0]){
                message.channel.send('Tvoje ime već je zauzeto, možeš da ga puši ga pseto');
                message.channel.send('#smorucetu');
                return;
            }
        }

        const takmicar = `{"id": "${message.author.id}", "ime": "${args[0]}", "poeni": 0, "vote": 0,"dw":0}\n`;
        const obj = JSON.parse(takmicar);
        nizTakmicara.push(obj);
        message.channel.send('Uspesno ste se ulogovali :)');
        fs.appendFile('takmicari.txt',takmicar,'utf8',(err)=>{
            if(err) throw err;
        });
        return;
    }
}