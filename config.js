require('dotenv').config()

const hostBroker = 'http://broker.windowschannel.com:8081'
const route = 'api/v4/clients' 
const routeSubscriber = 'api/v4/subscriptions'

const auth = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}

module.exports = {
    hostBroker,
    route,
    routeSubscriber,
    auth
}