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

        this.width = 50;
        this.height = 35;
        this.currentSpriteImages = ProjectileSprites.basicShot
    }

    draw(ctx) {
        ctx.drawImage(this.currentSpriteImages[this.frameIndex],
            this.pos[0],
            this.pos[1],
            this.width,
            this.height,
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

BasicShot.reloadTime = 150;

module.exports = BasicShot;