// Models
const { User } = require('./user.model');
const { Review } = require('./review.model')
const { Game } = require('./game.model')
const { Console } = require('./console.model')

const initModels = () => {
    // 1 usuario tiene muchas reviews, para establecer la relacion el segundo parametro sera la llave foranea del segundo a modelo que tomara para hacer la relacion en este caso la llave foranea es 'userId'
    User.hasMany(Review, { foreignKey: 'userId' })
    Review.belongsTo(User)

    Game.hasMany(Review, { foreignKey: 'gameId' })
    Review.belongsTo(Game)

    // realacion de muchos a muchos, senecesita un intermediario para esto ocuparemos el metodo belongstomany, como segundo parametro el modelo intermediario con el throug y  la llave foranea para poder comunicarse, no es necesario exportar el modelo intermediario pero si debe coincidir con el nombre bajo el que fue creado

    Game.belongsToMany(Console, { through: 'gameInConsole', foreignKey: 'gameId' })
    Console.belongsToMany(Game, { through: 'gameInConsole', foreignKey: 'consoleId' })

};

module.exports = { initModels };
