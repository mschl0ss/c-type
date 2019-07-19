const MovingObject = require("./moving_object");
const Asteroid = require('./asteroid');

class Bullet extends MovingObject {
    constructor(options) {
        options.radius = Bullet.RADIUS;
        super(options)
        this.isWrappable = false;
        // this.vel = Bullet.SPEED;
    }

    collideWith(otherObject) {
        // debugger;
        // if (otherObject instanceof Asteroid) {
        //     this.game.remove(this);
        //     this.game.remove(otherObject);
        // }
    }
}

Bullet.RADIUS = 10;
Bullet.SPEED = 1;


module.exports = Bullet;