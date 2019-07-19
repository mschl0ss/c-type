const Star = require('../MovingObject/Background/star')
const Projectile = require('../MovingObject/Projectile/projectile')

const GameLogic = {
    add(game,obj) {
        if (obj instanceof Star) {
            game.stars.push(obj);
        }
        else if (obj instanceof Projectile) {

            if (obj.owner === "playerShip") { game.playerProjectiles.push(obj) }

        }
        else {
            debugger;
            console.log(`Game.prototype.add : can't handle ${obj}`)
        }
    },
    
    addStars(game) {
        for (let i = 0; i < NUM_STARS; i++) {
            GameLogic.add(new Star({ game: game, pos: [GameLogic.randomX(), GameLogic.randomY()] }))
            // this.add( new Star( {game: this, pos: [Game.DIM_X, this.randomY()]}))
        }
    },

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