const Enemy = require('./enemy');

const EnemySprites = require('../../Game/Sprites/enemy_sprites')


// const RADII = [300];

class VoidPuff extends Enemy {
    constructor(options) {
        options.vel = [-1, 0];
        options.shape = "rectangle";
        options.ticksPerFrame = 2;
        options.healthPoints = 20;
        options.currentSpriteImages = EnemySprites.voidPuff;
        super(options);

        this.limitX = 700;
        // this.radius = RADII[Math.floor(Math.random() * 1)];
        this.width = 450;
        this.height = 200;
    }

    // move(timeDelta) {
    //     const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;

    //     const x = this.pos[0] + (this.vel[0] * velocityScale);
    //     const y = this.pos[1] + (this.vel[1] * velocityScale);
    //     this.pos = [x, y];

    //     if (this.game.isOutOfBounds(this.pos)[0] === true) {this.game.remove(this) }
        
    // }

    shouldDodge () {
        let result = false;
        this.game.playerProjectiles.each(pp => {
            if(Math.abs(pp.pos[x] - this.pos[x]) < 100 
                && Math.abs(pp.pos[y] - this.pos) < 100) {
                    result = true;
                    console.log('voidpuff should dodge')
                }
        })
        return result;

    }
}

module.exports = VoidPuff;