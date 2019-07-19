const MovingObject = require('../moving_object');
const Projectile = require('../Projectile/projectile');
const BasicShot = require('../Projectile/basic_shot');
const Ship = require('../Ship/ship');

class Enemy extends MovingObject {
    constructor(options) {

        super(options);
        this.healthPoints = options.healthPoints;
 
    }

    collideWith(otherObject) {
        // debugger;
        if (otherObject instanceof Projectile) {
            if (otherObject instanceof BasicShot) {
                this.game.remove(otherObject);
                this.healthPoints -= 1;
                if (this.healthPoints <= 0) this.game.remove(this);
            }
        }
        else if (otherObject instanceof Ship) {
            const [x, y] = this.pos;
            debugger;
        }
    }


}

module.exports = Enemy;