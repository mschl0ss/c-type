const MovingObject = require('./moving_object');
const Util = require('../utils/util');
const Ship = require('./ship');

const DEFAULTS = {
    COLOR: '#505050',
    RADIUS: 50,
    SPEED: 5,
}

class Asteroid extends MovingObject {
    constructor(options = {}) {
        options.color = DEFAULTS.COLOR;
        options.radius = DEFAULTS.RADIUS;
        options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
        options.pos = options.pos;

        super(options);
    }

    collideWith(otherObject) {
        // debugger;
            if(otherObject instanceof Ship ) {
                otherObject.relocate();
                this.game.remove(this);
            }
    }
}

module.exports = Asteroid;