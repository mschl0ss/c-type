const MovingObject = require('../moving_object');
const Projectile = require('../Projectile/projectile');
const BasicShot = require('../Projectile/basic_shot');
const Ship = require('../Ship/ship');

class Enemy extends MovingObject {
    constructor(options) {

        super(options);
        this.healthPoints = options.healthPoints;
        this.isShooter = options.isShooter || false;
        
 
    }

    collideWith(otherObject) {
        if (otherObject instanceof Projectile) {
            if (otherObject instanceof BasicShot) {
                this.game.remove(otherObject);
                this.deductHealth();
            }
        }
        else if (otherObject instanceof Ship) {
            otherObject.deductHealth();

        }
    }

    deductHealth() {
        this.healthPoints -= 1;
        if (this.healthPoints <= 0) { 
            this.game.player.addToScore(this)
            this.game.remove(this) 
        }
    }
    


}

module.exports = Enemy;