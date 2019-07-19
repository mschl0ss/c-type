const MovingObject = require('../moving_object');
const BasicShot = require('../Projectile/basic_shot');
const Util = require('../../Util/util');

const ShipSprites = require('../../Game/Sprites/ship_sprites')


const basicShotSpeeds = [15,16]
class Ship extends MovingObject {
    constructor(options) {
        options.color = "#545454";
        options.pos = options.pos
        options.vel = options.vel
        options.isBounded = true;
        options.type = "playerShip";
        options.frameIndex = 0;
        options.tickCount = 0;
        options.ticksPerFrame = 2;
        super(options);
        
        this.projectileType = "BasicShot";
        this.lastShotTime = 0;
        this.lastPowerTime = 0;
        this.reloadTime = BasicShot.reloadTime;
        this.width = 80;
        this.height = 50;
        this.currentSpriteImages = ShipSprites.default;


    }
    

 
    animateSprite() {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            if (this.frameIndex >= this.currentSpriteImages.length - 1) {

                this.frameIndex = 0;
                this.currentSpriteImages = ShipSprites.default;
            }
            else { this.frameIndex += 1; }
        }
    }
   
    power(impulse) {this.vel = impulse;}

    fireProjectile(time) {
        this.currentSpriteImages = ShipSprites.shooting
        const timeDelta = time - this.lastShotTime;
        if(this.game.renderShip === false) {return console.log('cant fire youre dead bruh')}
        else if(timeDelta > this.reloadTime ) {
            const projectile = new BasicShot ({
                pos: [this.pos[0] + (this.width*0.75), this.pos[1] + (this.height*0.4)],
                vel: [basicShotSpeeds[Math.floor(Math.random() *2)],0],
                game: this.game,
                owner: "playerShip"
            })

            this.game.add(projectile);
            this.lastShotTime = time;
            }
    }


}


module.exports = Ship;