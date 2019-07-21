const Enemy = require('./enemy');

const EnemySprites = require('../../Game/Sprites/enemy_sprites')

const COLOR = "#ad1113";
const RADII = [30,33,35]
// const RADII = [10,12]

class Bug extends Enemy {
    constructor(options) {
        options.color = COLOR;
        options.vel = options.vel
        options.shape = "circle";
        options.ticksPerFrame = 1;
        options.healthPoints = 9;
        options.currentSpriteImages = EnemySprites.blackBug;
        super(options);

        this.ascending = true;
        this.radius = RADII[Math.floor(Math.random() *3)];
        this.width = this.radius*2;
        this.height = this.radius*2;

    }

}


module.exports = Bug;

// for a given starting point y
// the bugs fluctuate up and down but not uniformly
// so yCap = [10,15,20]
// if 