const serviceRestart = require ('./globalActions')
const serviceStatus = require('./actions')

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