require('dotenv').config()

const hostBroker = 'http://broker.windowschannel.com:8081'
const route = 'api/v4/clients' 
const routeSubscriber = 'api/v4/subscriptions'

const auth = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}

const db = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT
}
module.exports = {
    hostBroker,
    route,
    routeSubscriber,
    auth,
    config:db
}