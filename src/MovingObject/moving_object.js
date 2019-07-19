const Util = require('../Util/util');

class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.game = options.game;
        this.color = options.color;
        
        this.isWrappable = options.isWrappable || false;
        this.isBounded = options.isBounded || false;
    }

    draw() {}
    move(timeDelta) {
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
 
        const x = this.pos[0] + (this.vel[0] * velocityScale);
        const y = this.pos[1] + (this.vel[1] * velocityScale);
        this.pos = [x, y];

        // console.log(this.pos)
        // isOutOfBounds returns a 2 item array
        // [0] === true/false
        // [1] === bad pos aka "top", "right", etc;
        if (this.game.isOutOfBounds(this.pos)[0]===true) { 
            if(this.isWrappable === true) this.pos = this.game.wrap([x, y]) ;
            else if(this.isBounded === true) {
                this.vel = [0,0];
                switch (this.game.isOutOfBounds(this.pos)[1]) {
                    case "right":
                        this.pos = [DIM_X-this.width, this.pos[1]];
                        break;
                    case "left":
                        this.pos = [10, this.pos[1]];
                        break;
                    case "top":
                        this.pos = [this.pos[0], 10];

                        break;
                    case "bottom":
                        this.pos = [this.pos[0], DIM_Y - 10];
                        break;
                    default:
                        console.log('Reached default case in MovingObject.prototype.move')
                }
            }
            else {this.game.remove(this)}
        }
    }
}

// const NORMAL_FRAME_TIME_DELTA = 15;
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
const DIM_X = 1400;
const DIM_Y = 700;

module.exports = MovingObject;