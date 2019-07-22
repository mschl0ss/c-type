const Projectile = require('./projectile')
const ProjectileSprites = require('../../Game/Sprites/projectile_sprites');
const BasicShot = require('./basic_shot');
const PowerUp = require('../PowerUp/power_up')

class LaserShot extends Projectile {
    constructor(options) {
        options.type = "LaserShot"
        options.dmg = 3;
        options.color = PowerUp.shotTypes['LaserShot']
        options.shape = "rectangle";
        options.frameIndex = 0;
        options.tickCount = 0;
        options.ticksPerFrame = 2;
        super(options)

        // this.radius = 35;
        this.speed = 1;

        this.startingWidth = 100;
        this.width = this.startingWidth;
        this.maxWidth = 300;
        this.height = 6;
        this.currentSpriteImages = ProjectileSprites.basicShot
    }

    draw(ctx) {

        ctx.fillStyle = this.color;
        
        // ctx.drawImage(this.currentSpriteImages[this.frameIndex],
        //     this.pos[0],
        //     this.pos[1] + this.height / 4,
        //     this.width,
        //     this.height * 0.5,
        // )
        // this.animateSprite();
        ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height);
        
        ctx.strokeStyle = "#6a7af2"
        ctx.strokeRect(this.pos[0], this.pos[1]+0.5, this.width, 2)
    }

    move(timeDelta) {
        if(this.width <= this.maxWidth ) {
            this.width += 10;
            this.vel = [0,0]
        }
        else{
            this.vel = [LaserShot.speed,0]
            Projectile.prototype.move.call(this,timeDelta)
        }
    }
}

LaserShot.reloadTime = 750;
LaserShot.speed = BasicShot.speed;
LaserShot.ammoCount = 15;

module.exports = LaserShot;