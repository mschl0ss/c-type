const Enemy = require('./enemy');

const EnemySprites = require('../../Game/Sprites/enemy_sprites')

const RADII = [30,25];

class Voidlette extends Enemy {
    constructor(options) {
        options.shape="circle";
        options.ticksPerFrame = 2;
        options.healthPoints = 3;
        options.currentSpriteImages = EnemySprites.voidPuff;
        super(options);

        this.radius = RADII[Math.floor(Math.random() * RADII.length)];
        this.width = this.radius*2;
        this.height = this.radius*2;
        this.owner = "voidpuff"
    }

}

module.exports = Voidlette;