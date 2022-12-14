const { Game } = require("../models/game.model");
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");



const gameExists = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const game = await Game.findOne({ where: { id, status: 'active' } })

    if (!game) {
        return next(new AppError('game does not exist', 404))
    }

    req.game = game
    next()
})

module.exports = { gameExists }