const MovingObject = require('../moving_object');
const BasicShot = require('../Projectile/basic_shot');
const RapidFire = require('../Projectile/rapid_fire');
const SpreadShot = require('../Projectile/spread_shot');
const LaserShot = require('../Projectile/laser_shot');
const Util = require('../../Util/util');

const ShipSprites = require('../../Game/Sprites/ship_sprites')



class Ship extends MovingObject {
    constructor(options) {
        options.color = "#545454";
        options.pos = options.pos
        options.vel = options.vel
        // options.isBounded = true;
        options.type = "playerShip";
        
        options.frameIndex = 0;
        options.tickCount = 0;
        options.ticksPerFrame = 3;

        options.shape = "rectangle"
        
        super(options);
        
        this.projectileType = "BasicShot";
        this.lastShotTime = 0;
        this.lastPowerTime = 0;
        this.reloadTime = BasicShot.reloadTime;
        this.ammoCount = BasicShot.ammoCount;
        
        this.respawnShield = true;
        this.respawnTicks = 0;
        this.respawnInterval = 30;
        this.respawnTotalInterval = 90;

        //ratio is 0.625
        this.width = 64;
        this.height = 40;
        this.currentSpriteImages = ShipSprites.default;


    }
    
    power(impulse) {this.vel = impulse;}

    loadProjectile(projectileString) {
        switch(projectileString) {
            case "BasicShot":
                this.projectileType = "BasicShot"
                this.reloadTime = BasicShot.reloadTime;
                this.ammoCount = BasicShot.ammoCount;
                break;
            case "RapidFire":
                this.projectileType = "RapidFire";
                this.reloadTime = RapidFire.reloadTime;
                this.ammoCount = RapidFire.ammoCount;
                break;
            case "SpreadShot":
                this.projectileType = "SpreadShot";
                this.reloadTime = SpreadShot.reloadTime;
                this.ammoCount = SpreadShot.ammoCount;
                break;
            case "LaserShot":
                this.projectileType = "LaserShot";
                this.reloadTime = LaserShot.reloadTime;
                this.ammoCount = LaserShot.ammoCount;
                break;
            default:
                console.log("default case reached in Ship.prototype.loadProjectile")
        }
    }
    fireProjectile(time) {
        
        const timeDelta = time - this.lastShotTime;
        this.currentSpriteImages = ShipSprites.shooting
        if(this.game.renderShip === false) {return console.log('cant fire youre dead bruh')}
        else if(timeDelta > this.reloadTime ) {
            switch(this.projectileType) {
                case 'BasicShot':
                    const projectile = new BasicShot ({
                        pos: [this.pos[0] + (this.width*0.75), this.pos[1] + (this.height*0.6)],
                        vel: [BasicShot.speed,0],
                        game: this.game,
                        owner: "playerShip"
                    })
                    this.game.add(projectile);
                    break;
                case 'RapidFire':
                    if (this.ammoCount <= 0) this.loadProjectile('BasicShot');
                    else {
                        const projectile = new RapidFire({
                            pos: [this.pos[0] + (this.width * 0.75), this.pos[1] + (this.height * 0.6)],
                            vel: [RapidFire.speed, 0],
                            game: this.game,
                            owner: "playerShip"
                        })
                        this.game.add(projectile);
                        this.ammoCount -= 1;
                    }  
                    break;
                case 'SpreadShot':
                    if (this.ammoCount <= 0) this.loadProjectile('BasicShot');
                    else {
                        for(let i = -4; i < 4; i+=2) {
                            const projectile = new SpreadShot({
                                pos: [this.pos[0] + (this.width * 0.75), this.pos[1] + (this.height * 0.6)],
                                vel: [SpreadShot.speed, i],
                                game: this.game,
                                owner: "playerShip"
                            })
                            this.game.add(projectile);
                        }
                        this.ammoCount -= 4;
                    }  
                    break;
                case 'LaserShot':
                    if (this.ammoCount <= 0) this.loadProjectile('BasicShot');
                    else {
                        const projectile = new LaserShot({
                            pos: [this.pos[0] + (this.width * 0.75), this.pos[1] + (this.height * 0.6)],
                            vel: [LaserShot.speed, 0],
                            game: this.game,
                            owner: "playerShip"
                        })
                        this.game.add(projectile);
                        this.ammoCount -= 1;
                    }
                    break;
                default:
                    debugger;
                    console.log('default case reached in Ship.prototype.fireProjectile')
            }
            this.lastShotTime = time;
            }
    }

    draw(ctx,timeDelta) {
        // debugger;
        if(this.ammoCount !== -100) {
            ctx.globalAlpha = 1;
            ctx.font = "18px Helvetica";
            ctx.strokeStyle = "white;"
            ctx.fillStyle = "white"
            ctx.fillText(`x ${this.ammoCount}`, this.pos[0]+this.width/8, this.pos[1]-10);
        }

        if(this.respawnShield){
            let pos = this.pos.concat([]);

            ctx.drawImage(this.currentSpriteImages[this.frameIndex],
                pos[0]-this.width,
                pos[1],
                this.width*2,
                this.height,
            )
            ctx.strokeStyle = "#94e5f7";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.arc(
                this.pos[0] + this.width / 2, this.pos[1] + this.height / 2, this.width * 0.8, 0, 2 * Math.PI, true
            );
            ctx.stroke();
            this.animateSprite(timeDelta);
        }
        else {
            if(this.frameIndex > this.currentSpriteImages.length ) this.frameIndex = 0;
            MovingObject.prototype.draw.call(this, ctx,timeDelta)
        }
    }

    drawRespawning(){
        this.currentSpriteImages = ShipSprites.twinkles;
    }
    //necessary because ship has many different sprites, and it needs to
    //reset to default after for example shooting animation is done;
    animateSprite() {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            if (this.frameIndex >= this.currentSpriteImages.length - 1) {

                this.frameIndex = 0;
                if(this.respawnShield === false) this.currentSpriteImages = ShipSprites.default;
            }
            else { this.frameIndex += 1; }
        }
    }
    move(timeDelta) {
        // debugger;
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
 
        const x = this.pos[0] + (this.vel[0] * velocityScale);
        const y = this.pos[1] + (this.vel[1] * velocityScale);
        this.pos = [x, y];

        // isOutOfBounds returns a 2 item array
        // [0] === true/false
        // [1] === bad pos aka "top", "right", etc;
        if(this.game.renderShip === true && this.respawnShield === true){
            
            if(this.pos[0] >= 200) {
                // this.pos[0] = 250;
                this.vel = [0,0]
                this.respawnShield = false;
                this.currentSpriteImages = ShipSprites.default;
            }
        }
        else if (this.game.isShipOutOfBounds(this.pos)[0]===true ) {
                this.vel = [0,0];
                switch (this.game.isShipOutOfBounds(this.pos)[1]) {
                    case "right":
                        this.pos = [DIM_X-this.width, this.pos[1]];
                        break;
                    case "left":
                        this.pos = [10, this.pos[1]];
                        break;
                    case "top":
                        this.pos = [this.pos[0], 10];
                        break;
                    case "bottom":
                        this.pos = [this.pos[0], DIM_Y - 20];
                        break;
                    default:
                        console.log('Reached default case in MovingObject.prototype.move')
                }
            }
           
        
    }


}
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
const DIM_X = 1400;
const DIM_Y = 700;


module.exports = Ship;