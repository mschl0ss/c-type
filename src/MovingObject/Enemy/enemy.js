const MovingObject = require('../moving_object');
const Projectile = require('../Projectile/projectile');
const Explode = require('../Background/explode');
const HitSprites = require('../../Game/Sprites/hit_sprites')
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
        else {
            this.game.add(
                new Explode({ pos: [this.pos[0]-this.width/2, this.pos[1]-this.height/2],
                    w: this.width, h: this.height, game: this.game,
                currentSpriteImages: HitSprites })
            )
        }
    }
    


}

module.exports = Enemy;