const { db, DataTypes } = require('../utils/database.util')

const Game = db.define('game', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    genre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
})

module.exports = { Game }