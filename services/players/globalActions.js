const axios = require('axios')
const { hostBroker , route , auth } = require('../../config')


function newStreamingPlayers(data){ 
    const { client, streaming } = data
    const topic = `${client}/players`
    console.log(streaming);
    const streamobj = {
        "":"streaming",
        nombre: streaming[0],
        url: streaming[1]
    }
    console.log('-----');
    console.log(streamobj);
    axios.post(`${hostBroker}/api/v4/mqtt/publish`, {
        "topic": topic,
        "payload": streamobj,
        "qos":2,
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

function optionsPlayer(data){ 
    const { client, request } = data
    const topic = `${client}/players`
    axios.post(`${hostBroker}/api/v4/mqtt/publish`, {
        "topic": topic,
        "payload": {
            mediaplayer:request[0]
        },
        "qos":0,
        "retain":false,
        },{ auth }).then((response) =>{
        if (response.status === 200) {
            console.log(`Mensaje enviado get ${request[0]}`);
        }else{
            console.log('l');
        }
    }).catch(e => console.log({
        code: e.code,
        statusCode: e.response.status,
        statusMessage: e.response.statusText
    }))
}

function evaluate(data){
    console.log(data);
    const options = {
        status: optionsPlayer(data),
        nothing: function(){
            console.log('Nada para hacer');
        }
    }
    return options[data.request[0]] ?? options['nothing']
}

function service(data){
    if(data.hasOwnProperty('streaming')){
        newStreamingPlayers(data)
    }else{
        evaluate(data)
    }
}

module.exports = {
    newStreamingPlayers,
    service
}