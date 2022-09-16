const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')

function restartPlayers(data){ 
    const { client } = data
    const topic = `${ client.name }/players`

    axios.post(`${hostBroker}/api/v4/mqtt/publish`, {
        "topic": topic,
        "payload":{ 
            "restart": "device"
         },
        "qos":0,
        "retain":false,
        },{ auth }).then((response) =>{
        if (response.status === 200) {
            console.log(' Mensaje enviado ');
        }else{
            console.log('l');
        }
    }).catch(e => console.log({
        code: e.code,
        statusCode: e.response.status,
        statusMessage: e.response.statusText
    }))
}

function newStreamingPlayers(data){ 
    const { client, newstreaming } = data
    const topic = `${client.name}/players`

    axios.post(`${hostBroker}/api/v4/mqtt/publish`, {
        "topic": topic,
        "payload": newstreaming,
        "qos":0,
        "retain":false,
        },{ auth }).then((response) =>{
        if (response.status === 200) {
            console.log('Mensaje enviado');
        }else{
            console.log('l');
        }
    }).catch(e => console.log({
        code: e.code,
        statusCode: e.response.status,
        statusMessage: e.response.statusText
    }))
}

module.exports = {
    newStreamingPlayers,
    restartPlayers
}