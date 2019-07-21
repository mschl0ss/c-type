const Enemy = require('./enemy');
const Voidlette = require('./voidlette');

const EnemySprites = require('../../Game/Sprites/enemy_sprites')




class VoidPuff extends Enemy {
    constructor(options) {
        options.vel = [-1, 0];
        options.shape = "rectangle";
        options.ticksPerFrame = 6;
        options.healthPoints = 45;
        options.currentSpriteImages = EnemySprites.voidPuff;
        options.isShooter = true;
        super(options);

        //ration should be: h is .6666 of w
        this.width = 300;
        this.height = 200;
        this.fireInterval = 25,
        this.fireTick = 0;
        this.fireMax = 10;
    }

    shouldDodge () {
        let result = false;
        this.game.playerProjectiles.each(pp => {
            if(Math.abs(pp.pos[x] - this.pos[x]) < 100 
                && Math.abs(pp.pos[y] - this.pos) < 100) {
                    result = true;
                    console.log('voidpuff should dodge')
                }
        })
        return result;
    }
    shouldFireUp() {
        return this.game.ship.pos[1] > this.pos[1];
    }
    shouldFireForward() {
        return this.game.ship.pos[0] < this.pos[0]
    }

    fireTrajectory() {
        // let deltaY;

        let deltaY = this.game.ship.pos[1] - this.pos[1];
        let deltaX = this.game.ship.pos[0] - this.pos[0];

        deltaX = deltaX > -30 ? -30 : deltaX;
        const m = deltaY/deltaX
       
        return m
        
  
    }
    fireProjectile() {
        if(this.game.enemies.filter(e=> e instanceof Voidlette).length < this.fireMax ){
            let fT = this.fireTrajectory() * -2;
            if (fT < 0) { fT -= 0.7;}
            if(fT > 4) {fT = 4;}
            else if(fT < -7) fT = -7;

        
            const vel = [-4, fT];

            const voidlette = new Voidlette ({
                game: this.game,
                pos: [this.pos[0]+10, this.pos[1] + this.height * 0.6],
                vel: vel
            })

            // const voidlette = new Voidlette ({
            //     game: this.game,
            //     pos: [this.pos[0]+10, this.pos[1] + this.height*0.6],
            //     vel: [-4, this.shouldFireUp() ? 0.5 : -0.5],
            // })
            this.game.add(voidlette);
        }
    }

    animateSprite() {
        this.tickCount += 1;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            if (this.frameIndex >= this.currentSpriteImages.length - 1) {

                this.frameIndex = 0;
                this.currentSpriteImages = EnemySprites.voidPuff;
                this.ticksPerFrame = 6;
            }
            else { this.frameIndex += 1; }
        }
    }
    deductHealth(dmg) {
        
        this.currentSpriteImages = EnemySprites.voidPuffHit;
        this.ticksPerFrame = 2;
        this.healthPoints -= 1;
        if (this.healthPoints <= 0) { 
            this.game.player.addToScore(this);
            this.game.remove(this) }
    }
}

module.exports = VoidPuff;