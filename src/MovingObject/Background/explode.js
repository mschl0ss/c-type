const ExplodeSprites = require('../../Game/Sprites/explode_sprites');


class Explode {
    constructor(options) {
        this.pos = options.pos,
        this.width = options.w;
        this.height = options.h;
        this.game = options.game;
        this.currentSpriteImages = ExplodeSprites;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 1;
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

                this.game.remove(this)
            }
            else { this.frameIndex += 1; }
        }
    }
}

module.exports = Explode;