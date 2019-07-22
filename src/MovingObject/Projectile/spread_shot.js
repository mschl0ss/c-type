const Projectile = require('./projectile')
const ProjectileSprites = require('../../Game/Sprites/projectile_sprites');
const BasicShot = require('./basic_shot');
const PowerUp = require('../PowerUp/power_up')

class SpreadShot extends Projectile {
    constructor(options) {
        options.dmg = 3;
        options.color = PowerUp.shotTypes['SpreadShot']
        options.shape = "rectangle";
        options.frameIndex = 0;
        options.tickCount = 0;
        options.ticksPerFrame = 2;
        super(options)

        // this.radius = 35;
        this.speed = 1;

        this.width = 40;
        this.height = 15;
        this.currentSpriteImages = ProjectileSprites.basicShot
    }

}

SpreadShot.reloadTime = 220;
SpreadShot.speed = BasicShot.speed;
SpreadShot.ammoCount = 200;

module.exports = SpreadShot;