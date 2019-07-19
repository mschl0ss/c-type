const MovingObject = require('./moving_object');
const Bullet = require('./bullet');
const Util = require('../utils/util');


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

        this.firingInterval = 0;
        // debugger;
    }


    fireBullet() {
        const norm = Util.norm(this.vel);
        
        const relVel = Util.scale(
            Util.dir(this.vel),
            Bullet.SPEED
        );

        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];
        // debugger;
        const bullet = new Bullet({
            pos: this.pos,
            vel: [5,0],
            color: this.color,
            game: this.game
        });

        this.game.add(bullet);
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