const MovingObject = require('../moving_object');


class Enemy extends MovingObject {
    constructor(options) {

        super(options);
        this.spawnDelay = options.spawnDelay;
        this.spawnTime = options.spawnTime;
        this.spawnX = options.spawnX;
        this.spawnY = options.spawnY;
    }
}

module.exports = Enemy;