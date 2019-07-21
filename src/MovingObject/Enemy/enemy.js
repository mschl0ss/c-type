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
                this.game.remove(otherObject);
                this.deductHealth(otherObject.dmg);
            // }
        }
        else if (otherObject instanceof Ship) {
            otherObject.respawnShield ? this.deductHealth(100) : otherObject.deductHealth(1)
        }
    }

    deductHealth(dmg) {
        
        this.healthPoints -= dmg;
        if (this.healthPoints <= 0) { 
            // debugger;
            this.game.player.addToScore(this)
            this.game.remove(this) 
        }
    }
    


}

module.exports = Enemy;