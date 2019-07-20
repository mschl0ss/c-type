const MovingObject = require('../moving_object');
const Enemy = require('../Enemy/enemy')

class Projectile extends MovingObject { 
    constructor(options) {
        super(options)
        this.owner = options.owner;

    }

   
}

module.exports = Projectile;