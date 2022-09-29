const { db, DataTypes } = require('../utils/database.util')

const Console = db.define('console', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    company: {
        allowNull: false,
        type: DataTypes.STRING
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
})

module.exports = { Console }