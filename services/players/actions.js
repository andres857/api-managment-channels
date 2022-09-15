const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')

axios.get(`${hostBroker}/${route}`, { auth })
    .then(function(response){
        if(response.status === 200){
            const players = response
            console.log(players.data);
        }else{
            console.log(response.status);
        }
    }).catch(e =>{
        console.log(e);
    })