const MovingObject = require('../moving_object');

class Projectile extends MovingObject { 
    constructor(options) {
        super(options)
        this.owner = options.owner;

    }

}

module.exports = Projectile;