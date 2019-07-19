const MovingObject = require('../moving_object');
const Util = require('../../Util/util');

const DEFAULTS = {
    COLORS: ["#d3d3d3"],
    RADII: [5,6],
    SPEEDS: [1]
}
const generateVel = () => {
    const result = Util.randomVec(DEFAULTS.SPEEDS[0]);
    const x = Math.abs(result[0]) * -1;
    return [x, 0];
}


class Moon extends MovingObject {
    constructor(options = {}) {
        options.color = DEFAULTS.COLORS[0];
        options.pos = options.pos;
        options.vel = generateVel();
        options.isWrappable = false;
        super(options);

        this.radius = DEFAULTS.RADII[Math.floor(Math.random() * 2)];
    }
}


module.exports = Moon;