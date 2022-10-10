const { Model, DataTypes, Sequelize } = require('sequelize')

const PLAYER_table = 'player'

const playerSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING,
    },
    model:{
        allowNull:true,
        type: DataTypes.STRING
    },
    site:{
        allowNull: false,
        type: DataTypes.STRING
    },
    ip:{
        allowNull: false,
        type: DataTypes.STRING
    },
    mac:{
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    }
}

class Player extends Model {
    static associate(){
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: PLAYER_table,
            modelName: 'Player',
            timestamps: false
        }
    }
}

module.exports = {
    PLAYER_table,
    playerSchema,
    Player
}