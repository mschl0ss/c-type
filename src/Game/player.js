const VoidPuff = require('../MovingObject/Enemy/void_puff');
const Bug = require('../MovingObject/Enemy/bug');
const Voidlette = require('../MovingObject/Enemy/voidlette');
const BigBug = require('../MovingObject/Enemy/bigbug');

class Player {
    constructor(game) {
        this.game = game;
        this.lives = 3;
        this.score = 0;
    }

    addToScore(obj) {
        switch(obj.constructor) {
            case Bug:
                this.score += 10;
                break;
            case Voidlette:
                this.score += 2;
                break;
            case VoidPuff:
                this.score += 100;
                break;
            case BigBug:
                this.score += 30;
            default:
                console.log('default case of Player.prototype.addToScore')
        }
        this.game.updateScoreDisplay();
    }
}

module.exports = Player;