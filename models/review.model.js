const { db, DataTypes } = require('../utils/database.util')

const Review = db.define('review', {
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

    userId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    comment: {
        allowNull: false,
        type: DataTypes.STRING
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
})

module.exports = { Review }