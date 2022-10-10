const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')

function newStreamingPlayers(data){ 
    const {client, newstreaming} = data
    const topic = `p${client}/`
    console.log(client);
    axios.get(`${hostBroker}/${route}`, { auth })
        .then((response) =>{
            if (response.status === 200) {
                let playersfound = []
                const players = response.data.data
                // console.log(players);
                players.find(player => {
                    if (client.name === player.username) {
                        playersfound.push({
                            "clientid": player.clientid,
                            "username": player.username,
                            "connected_at": player.connected_at,
                            "subscriptions_cnt": player.subscriptions_cnt,
                            "connected": player.connected,
                            "ip_address": player.ip_address
                        })
                    }
                })
                return playersfound
            }
        })
}

module.exports = {
    newStreamingPlayers,
}