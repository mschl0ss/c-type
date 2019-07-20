const Enemy = require('./enemy');

const EnemySprites = require('../../Game/Sprites/enemy_sprites')

const COLOR = "#ad1113";
const RADII = [55,60,65]
// const RADII = [10,12]

class Bug extends Enemy {
    constructor(options) {
        options.color = COLOR;
        options.vel = [-4,0];
        options.shape = "circle";
        options.ticksPerFrame = 2;
        options.healthPoints = 1;
        options.currentSpriteImages = EnemySprites.brownBug;
        super(options);

        this.ascending = true;
        this.radius = RADII[Math.floor(Math.random() *3)];
        this.width = this.radius;
        this.height = this.radius;

    }

}


module.exports = Bug;

// for a given starting point y
// the bugs fluctuate up and down but not uniformly
// so yCap = [10,15,20]
// if 