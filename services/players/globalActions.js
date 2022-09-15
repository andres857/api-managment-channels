const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')


function newStreamingPlayers(data){ 
    const {client, newstreaming} = data
    console.log(client);
    axios.get(`${hostBroker}/${route}`, { auth })
        .then((response) =>{
            if (response.status === 200) {
                let playersfound = []
                const players = response.data.data
                // console.log(players);
                players.find(player => {
                    if (client.name === player.username) {
                        playersfound.push(player)
                    }
                })
                
            }
        })
}

module.exports = {
    newStreamingPlayers,
}