const MovingObject = require('./moving_object');


const DEFAULTS = {
    RADIUS: 20,
    COLOR: "#f3b44d",
}

class Ship extends MovingObject {
    constructor(options) {
        options.radius = DEFAULTS.RADIUS;
        options.color = DEFAULTS.COLOR;
        options.vel = [0,0];

        super(options)
        // debugger;
    }

    power(impulse) {
        this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]]
    }

    relocate() {
        
        this.pos = this.game.randomPosition();
        this.vel=[0,0];
    }

}


module.exports = Ship;