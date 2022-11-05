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
    const { client, streaming } = data
    const topic = `${client.name}/players`
    console.log(streaming);
    axios.post(`${hostBroker}/api/v4/mqtt/publish`, {
        "topic": topic,
        "payload": streaming,
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

function service(data){
    if (data.hasOwnProperty('streaming')){
        console.log('llamar a la funcion streaming');
        newStreamingPlayers(data)
    }else if(data.hasOwnProperty('restart') && data.restart){
        restartPlayers(data)
    }else{
        console.log('Dont anything');
    }
}

module.exports = {
    newStreamingPlayers,
    restartPlayers,service
}