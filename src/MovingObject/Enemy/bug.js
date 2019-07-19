const MovingObject = require('../moving_object');

const COLOR = "#ad1113";
const RADII = [6,7]

class Bug extends MovingObject {
    constructor(options) {
        options.color = COLOR;
        options.pos = options.pos;
        options.vel = options.vel;

        super(options);

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
}



// for a given starting point y
// the bugs fluctuate up and down but not uniformly
// so yCap = [10,15,20]
// if 