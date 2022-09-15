const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')

function getPlayersByClient(client){
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
    getPlayersByClient,
}





