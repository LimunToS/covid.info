module.exports = {
    name: 'help',
    execute(message){
        message.channel.send('```'+`-login [ime]
-rename [novo_ime]
-info
-ranklist {p/dw}
-vote [broj]`+'```');
    }
}