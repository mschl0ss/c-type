const MovingObject = require('../moving_object');
const Util = require('../../Util/util');


const DEFAULTS = {
    COLORS: ["#5746b5", "#5746b5", "#5746b5","#d3d3d3"],
    RADII: [1,1],
    SPEEDS: [0.5,0.5,1,1]
}
const generateVel = () => {
    const result = Util.randomVec(DEFAULTS.SPEEDS[Math.floor(Math.random() * 4)]);
    const x = Math.abs(result[0]) * -1;
    return [x, 0];
}

class Star extends MovingObject {
    constructor(options={}) {
        options.color = DEFAULTS.COLORS[Math.floor(Math.random() * 4)];
        options.pos = options.pos;
        options.vel = generateVel();
        options.isWrappable = true;
        super(options);

        this.radius = DEFAULTS.RADII[Math.floor(Math.random() * 2)];
    }


    draw(ctx) {
        // debugger;
        ctx.globalAlpha = 0.7
        ctx.fillStyle = this.color;
        

        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
        ctx.globalAlpha = 1
    }

    
    


}

module.exports = Star;