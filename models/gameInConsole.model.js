const { db, DataTypes } = require('../utils/database.util')

const GameInColsole = db.define('gameInConsole', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    gameId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },

    consoleId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },

    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
})

module.exports = { GameInColsole }