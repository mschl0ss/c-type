const Projectile = require('./projectile')
const ProjectileSprites = require('../../Game/Sprites/projectile_sprites')

class BasicShot extends Projectile {
    constructor(options) {
       
        options.color = "#64ccef";
        options.shape = "rectangle";
        options.frameIndex = 0;
        options.tickCount = 0;
        options.ticksPerFrame = 2;
        super(options)

        // this.radius = 35;
        this.speed = 1;

        this.width = 40;
        this.height = 15;
        this.currentSpriteImages = ProjectileSprites.basicShot
    }

    draw(ctx) {
       
        ctx.fillStyle = "#00CCFF"
        ctx.beginPath();
        ctx.ellipse(
            this.pos[0] + this.width*0.6,
            this.pos[1] + this.height*0.5,
            this.width*0.4,
            this.height*0.6,
            Math.PI *4, 0, 2 * Math.PI*1.5
        )
        ctx.fill();
        ctx.drawImage(this.currentSpriteImages[this.frameIndex],
            this.pos[0],
            this.pos[1],
            this.width,
            this.height*0.9,
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

    // draw(ctx) {
    //     ctx.fillStyle = this.color;
    //     ctx.strokeStyle = "#EF8500";
    //     ctx.lineWidth = 1;
    //     ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
    //     ctx.fill(); ctx.stroke();
    // }
}

BasicShot.reloadTime = 170;

module.exports = BasicShot;