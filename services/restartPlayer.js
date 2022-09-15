const axios = require('axios')
const { hostBroker , route , auth } = require('../config')

function restartPlayers(client, room){
    return new Promise((resolve) => {
        axios.get(`${hostBroker}/${route}`, { auth })
        .then(function(response){
            if(response.status === 200){
                let playersfound = []
                const players = response.data.data
                players.find( player => {
                    if ( client === player.username ){
                        playersfound.push(player)
                    }
                });
                axios.get(`${hostBroker}/api/v4/subscriptions/${playersfound}`, {auth})
                    .then(
                        function (response) {
                            if (response.status === 200) {
                                console.log(response);
                            }
                        }
                    )
                resolve(playersfound);
            }else{
                console.log(response.status);
            }
        }).catch(e =>{
            console.log(e);
        })
    })
}