const Projectile = require('./projectile')
const ProjectileSprites = require('../../Game/Sprites/projectile_sprites')

class BasicShot extends Projectile {
    constructor(options) {
        options.dmg = 3;
        options.color = "#00CCFF";
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

BasicShot.reloadTime = 170;
BasicShot.speed = 16
BasicShot.ammoCount = -100;

module.exports = BasicShot;