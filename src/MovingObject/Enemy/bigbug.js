const Enemy = require('./enemy');

const BrownBugSprites = require('../../Game/Sprites/brown_bug_sprites')

const COLOR = "#ad1113";
const RADII = [50]
// const RADII = [10,12]

class BigBug extends Enemy {
    constructor(options) {
        options.color = COLOR;
        options.vel = [-12, -0.05];
        options.shape = "circle";
        options.ticksPerFrame = 1;
        options.healthPoints = 9;
        options.currentSpriteImages = BrownBugSprites;
        super(options);

        this.ascending = true;
        this.radius = 20;
        this.width = this.radius * 2.05;
        this.height = this.radius * 2;
        this.maxRadius = 300;

    }


    move(timeDelta) {
        if(this.radius < this.maxRadius && this.game.renderShip) {
            this.radius *= 1.009;
            this.width = this.radius *2;
            this.height = this.radius *2;
            
        }
        Enemy.prototype.move.call(this,timeDelta);
    }
}


module.exports = BigBug;

// for a given starting point y
// the bugs fluctuate up and down but not uniformly
// so yCap = [10,15,20]
// if 