const fs = require('fs');
module.exports = {
    name: 'update',
    execute(message,args,nizTakmicara){
        if(args.length!=1){
            message.channel.send(`Neispravan unos`);
            return;
        }
        for(const elem of nizTakmicara){
            elem.poeni+= Math.abs(parseInt(args[0],10)-parseInt(elem.vote),10); 

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