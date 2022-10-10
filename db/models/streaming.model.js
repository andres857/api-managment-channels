const { Model, DataTypes, Sequelize } = require('sequelize')

const STREAMING_table = 'streaming'

const streamingSchema = {
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
    url:{
        allowNull:false,
        type: DataTypes.STRING
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW,
    }
}

class Streaming extends Model {
    static associate(){
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: STREAMING_table,
            modelName: 'Streaming',
            timestamps: false
        }
    }
}

module.exports = {
    streamingSchema,
    STREAMING_table,
    Streaming
}