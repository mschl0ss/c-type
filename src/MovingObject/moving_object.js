const Util = require('../utils/util');
// const Asteroid = require('./asteroid');

class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    collideWith(otherObject) {

    }

    isCollidedWith(otherObject){
        return Util.dist(this,otherObject) < this.radius + otherObject.radius
        
    }
    move() {
        const x = this.pos[0] + this.vel[0];
        const y = this.pos[1] + this.vel[1];
        this.pos = this.game.wrap([x,y]);
    }

}

module.exports = MovingObject;