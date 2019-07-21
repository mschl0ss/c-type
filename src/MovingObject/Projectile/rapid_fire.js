const Projectile = require('./projectile')
const ProjectileSprites = require('../../Game/Sprites/projectile_sprites');
const BasicShot = require('./basic_shot');
const PowerUp = require('../PowerUp/power_up')

class RapidFire extends Projectile {
    constructor(options) {
        options.dmg = 2;
        options.color = PowerUp.shotTypes['RapidFire']
        options.shape = "rectangle";
        options.frameIndex = 0;
        options.tickCount = 0;
        options.ticksPerFrame = 2;
        super(options)

        // this.radius = 35;
        this.speed = 1;

        this.width = 32;
        this.height = 12;
        this.currentSpriteImages = ProjectileSprites.basicShot
    }

}

RapidFire.reloadTime = 50;
RapidFire.speed = BasicShot.speed;
RapidFire.ammoCount = 125;

module.exports = RapidFire;