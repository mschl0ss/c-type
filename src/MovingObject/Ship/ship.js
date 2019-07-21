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
        // options.isBounded = true;
        options.type = "playerShip";
        options.frameIndex = 0;
        options.tickCount = 0;
        options.ticksPerFrame = 3;
        options.shape = "rectangle"
        
        super(options);
        
        this.projectileType = "BasicShot";
        this.lastShotTime = 0;
        this.lastPowerTime = 0;
        this.reloadTime = BasicShot.reloadTime;
        //ration is 0.625
        this.width = 64;
        this.height = 40;
        this.currentSpriteImages = ShipSprites.default;


    }
    

    //necessary because ship has many different sprites, and it needs to
    //reset to default after for example shooting animation is done;
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
                pos: [this.pos[0] + (this.width*0.75), this.pos[1] + (this.height*0.6)],
                vel: [basicShotSpeeds[Math.floor(Math.random() *2)],0],
                game: this.game,
                owner: "playerShip"
            })

            this.game.add(projectile);
            this.lastShotTime = time;
            }
    }

    move(timeDelta) {
        // debugger;
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
 
        const x = this.pos[0] + (this.vel[0] * velocityScale);
        const y = this.pos[1] + (this.vel[1] * velocityScale);
        this.pos = [x, y];

        // isOutOfBounds returns a 2 item array
        // [0] === true/false
        // [1] === bad pos aka "top", "right", etc;
        if (this.game.isShipOutOfBounds(this.pos)[0]===true) {
                this.vel = [0,0];
                switch (this.game.isShipOutOfBounds(this.pos)[1]) {
                    case "right":
                        this.pos = [DIM_X-this.width, this.pos[1]];
                        break;
                    case "left":
                        this.pos = [10, this.pos[1]];
                        break;
                    case "top":
                        this.pos = [this.pos[0], 10];
                        break;
                    case "bottom":
                        this.pos = [this.pos[0], DIM_Y - 20];
                        break;
                    default:
                        console.log('Reached default case in MovingObject.prototype.move')
                }
            }
           
        
    }


}
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
const DIM_X = 1400;
const DIM_Y = 700;


module.exports = Ship;