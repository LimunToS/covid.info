module.exports = {
    name: 'help',
    execute(){
        message.channel.send('-login [ime]');
        message.channel.send('-rename [novo_ime]');
        message.channel.send('-info');
        message.channel.send('-ranklist');
        message.channel.send('-vote [broj]');
    }
}