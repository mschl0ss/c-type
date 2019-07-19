const Enemy = require('./enemy');
const Projectile = require('../Projectile/projectile');
const BasicShot = require('../Projectile/basic_shot');
const Ship = require('../Ship/ship');

const COLOR = "#ad1113";
// const RADII = [50,50]
const RADII = [10,12]

class Bug extends Enemy {
    constructor(options) {
        options.color = COLOR;
        options.vel = [-4,0];
        options.shape = "circle";
        options.healthPoints = 3;
        super(options);
        this.spawnDelay = 400
        this.spawnTime = 0;
        this.spawnY = 300;

        this.ascending = true;
        this.radius = RADII[Math.floor(Math.random() * 2)];

    }

    draw(ctx) {
        // debugger;
        ctx.globalAlpha = 0.5
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
        ctx.globalAlpha = 1
    }

    collideWith(otherObject) {
        // debugger;
        if (otherObject instanceof Projectile) {
            if(otherObject instanceof BasicShot) {
                this.game.remove(otherObject);
                this.healthPoints -=1;
                if(this.healthPoints <= 0) this.game.remove(this);
            }
        }
        else if (otherObject instanceof Ship) {
            const [x,y] = this.pos;
            debugger;
        }
    }
}


module.exports = Bug;

// for a given starting point y
// the bugs fluctuate up and down but not uniformly
// so yCap = [10,15,20]
// if 