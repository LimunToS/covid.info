const fs = require('fs');
module.exports = {
    name: 'update',
    execute(message,args,nizTakmicara){
        let tmp=[];
        if(args.length!=1){
            message.channel.send(`Neispravan unos`);
            return;
        }
        if(message.author.id !== '217738777177751553'){
            message.channel.send(`ne mere`);
            return;
        }
        for(const elem of nizTakmicara){
            let osv_poeni = Math.abs(parseInt(args[0],10)-parseInt(elem.vote),10);
            elem.poeni+=  osv_poeni;
            let tmp_o = {
                ime: elem.ime,
                osv_p: osv_poeni
            };
            tmp.push(tmp_o);
        }

        let max_o = {
            ime: "",
            osv_p: 1000000000000
        };

        for(const elem of tmp){
            if(elem.osv_p<max_o.osv_p){
                max_o.ime = elem.ime;
                max_o.osv_p = elem.osv_p;
            }
        }

        message.channel.send(`Današnji pobednik je: ${max_o.ime} sa ${max_o.osv_p} osvojenih poena\nggwp`);

        for(const elem of nizTakmicara){
            if(elem.ime === max_o.ime) elem.dw++;
        }

        fs.open('takmicari.txt','w',(err)=>{
            if (err) {
                throw err;
            }
        });
        for(const elem of nizTakmicara){
            fs.appendFile('takmicari.txt',JSON.stringify(elem)+'\n',(err)=>{
                if (err) {
                    throw err;
                }
            });
        }
    }
}