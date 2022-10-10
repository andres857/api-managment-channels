const { Model, DataTypes, Sequelize } = require('sequelize')

const CLIENT_table = 'client'

const clientSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING,
    },
    name:{
        allowNull:false,
        type: DataTypes.STRING
    },
    country:{
        allowNull: true,
        type: DataTypes.STRING
    },
    contact:{
        allowNull: true,
        type: DataTypes.STRING
    },
    phone:{
        allowNull: true,
        type: DataTypes.INTEGER
    },
    email:{
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    }
}

class Client extends Model {
    static associate(){
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CLIENT_table,
            modelName: 'client',
            timestamps: false
        }
    }
}

module.exports = {
    CLIENT_table,
    clientSchema,
    Client
}