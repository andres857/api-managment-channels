const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')

function getSubscriptionByClient(client){
    return new Promise((resolve) => {
        axios.get(`${hostBroker}/${route}`, { auth })
        .then(function(response){
            if(response.status === 200){
                let playersfound = []
                const players = response.data.data
                players.find( player => {
                    if ( client === player.username ){
                        playersfound.push({
                            "clientid": player.clientid,
                            "username": player.username,
                            "connected_at": player.connected_at,
                            "subscriptions_cnt": player.subscriptions_cnt,
                            "connected": player.connected,
                            "ip_address": player.ip_address
                        })
                    }
                });
                resolve(playersfound);
            }else{
                console.log(response.status);
            }
        }).catch(e =>{
            console.log(e);
        })
    })
}

module.exports = {
    getSubscriptionByClient,
}





