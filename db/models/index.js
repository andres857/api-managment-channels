const { Streaming, streamingSchema } =  require('./streaming.model')
const { Player, playerSchema } =  require('./player.model')
const { Client, clientSchema } =  require('./client.model')

function setupModels(sequelize){
    Streaming.init(streamingSchema, Streaming.config(sequelize))
    Player.init(playerSchema, Player.config(sequelize))
    Client.init(clientSchema, Client.config(sequelize))
}

module.exports = setupModels

