const Star = require('../MovingObject/Background/star')
const Projectile = require('../MovingObject/Projectile/projectile')

const GameLogic = {
    

    randomY() {
        return Math.floor(Math.random() * DIM_Y);
    },

    randomX() {
        return Math.floor(Math.random() * DIM_X);
    }

}

const NUM_STARS = 500;
const NUM_MOONS = 1;


const DIM_X = 1400;
const DIM_Y = 700;

module.exports = GameLogic;