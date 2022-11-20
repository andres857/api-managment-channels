const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')
const {playersmocks} = require ('../../mock')

function getPlayersByClient(client){
    console.log(`get players of ${client}`);
    return new Promise((resolve) => {
        axios.get(`${hostBroker}/${route}`, { auth })
        .then(function(response){
            if(response.status === 200){
                const players = response.data.data
                // get all players
                players.find( player => {
                    if ( client === player.username ){
                        playersmocks.push({
                            "clientid": player.clientid,
                            "username": player.username,
                            "connected_at": player.connected_at,
                            "subscriptions_cnt": player.subscriptions_cnt,
                            "connected": player.connected,
                            "ip_address": player.ip_address
                        })
                    }
                });
                resolve(playersmocks);
            }else{
                console.log(response.status);
            }
        }).catch(e =>{
            console.log(e);
        })
    })
}

module.exports = {
    getPlayersByClient,
}





