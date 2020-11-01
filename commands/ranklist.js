const fs = require('fs');
module.exports = {
    name: 'ranklist',
    execute(message,args, nizTakmicara){
        if(args[0]==='dw'){
            nizTakmicara.sort((a,b)=>{
                return b.dw-a.dw;
            });
        }
        else{
            nizTakmicara.sort((a,b)=>{
                return a.poeni-b.poeni;
            });
        }
        let k = 1;
        let tabela = "";
        for(const elem of nizTakmicara){
            let d = elem.ime.length;

            tabela+=`${k}. `;
            tabela+=`${elem.ime}`;
            for(let i = 15-d;i>0;i--){
                tabela+=" ";
            }
            tabela+=` ${elem.poeni}`;
            tabela+=` ${elem.dw}\n`;
            //message.channel.send(`${k}. ${elem.ime} ${elem.poeni}`);
            k++;
        }
        message.channel.send('```'+'#  IME             P DW\n'+tabela+'```');
    }
}