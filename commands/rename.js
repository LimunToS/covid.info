const fs = require('fs');

module.exports = {
    name: 'rename',
    execute(message, args,nizTakmicara){
        if(args.length !== 1){
            message.channel.send('Unesite ispravan broj argurmenata: -rename ime');
            return;
        }
        let nadjen = false;
        for(const elem of nizTakmicara){
            if(elem.id == message.author.id){
                nadjen = true;
            }
        }
        if(!nadjen){
            message.channel.send('GK moras se prvo ulogobati, probaj sa -login zeljenoIme');
            return;
        }
        for(const elem of nizTakmicara){
            if(elem.ime == args[0]){
                message.channel.send('Tvoje ime već je zauzeto, možeš da ga puši ga pseto');
                message.channel.send('#smorucetu');
                return;
            }
        }

        for(let elem of nizTakmicara){
            if(elem.id == message.author.id){
                elem.ime = args[0];
                message.channel.send('Ime uspesno promenjeno :)');
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

        
        return;


    }
}