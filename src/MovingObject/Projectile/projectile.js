const MovingObject = require('../moving_object');
const Enemy = require('../Enemy/enemy')

class Projectile extends MovingObject { 
    constructor(options) {
        super(options)
        this.owner = options.owner || "playerShip";
        this.dmg = options.dmg;

    }

    draw(ctx) {

        ctx.fillStyle = this.color;
        // ctx.fillStyle = "#00CCFF"
        ctx.beginPath();
        ctx.ellipse(
            this.pos[0] + this.width * 0.6,
            this.pos[1] + this.height * 0.5,
            this.width * 0.4,
            this.height * 0.6,
            Math.PI * 4, 0, 2 * Math.PI * 1.5
        )
        ctx.fill();
        ctx.drawImage(this.currentSpriteImages[this.frameIndex],
            this.pos[0],
            this.pos[1]+this.height/4,
            this.width,
            this.height * 0.5,
        )
        this.animateSprite();
    }

    animateSprite() {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            if (this.frameIndex >= this.currentSpriteImages.length - 1) {

                this.frameIndex = 0;
            }
            else { this.frameIndex += 1; }
        }
    }
   
}

module.exports = Projectile;