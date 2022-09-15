 const serviceRestart = require ('./restartPlayer')
 const serviceStatus = require('./statusPlayer')
 const newStreaming = require('./newStreamingPlayer')


function optionsPlayer(options){
    const { restart, status, newstreaming } = options
    
    if (restart){
        console.log('restart device');
    } else if (status) {
        console.log('status log');
    } else if( newstreaming){
        console.log('newstremaing');
    }
}

module.exports = {
    optionsPlayer
}