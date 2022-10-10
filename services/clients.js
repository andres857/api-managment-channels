const pool = require('../libs/db/postgress.pool')
const { models } = require ('../libs/db/sequialize')

class clientService{
    constructor(){
        this.pool = pool
        this.pool.on('error', e => console.log(e))
    }

    async create(data){
        try {
            let clientCreated = await models.Client.create(data)
            return clientCreated
        } catch (error) {
            console.error(error);
        }
    }
    find(){

    }
    findOne(id){

    }
    update(id,changes){

    }
    delete(id){

    }
}

module.exports = {
    clientService
}