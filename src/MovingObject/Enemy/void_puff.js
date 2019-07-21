const Enemy = require('./enemy');
const Voidlette = require('./voidlette');

const EnemySprites = require('../../Game/Sprites/enemy_sprites')




class VoidPuff extends Enemy {
    constructor(options) {
        options.vel = [-1, 0];
        options.shape = "rectangle";
        options.ticksPerFrame = 6;
        options.healthPoints = 15;
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
        let deltaY;

        if ((this.game.ship.pos[1] - this.pos[1] + this.height * 0.6) < 10) {
            deltaY = 0
        } else {
            deltaY = this.game.ship.pos[1] - this.pos[1] + this.height * 0.6;
        }
        return [-4, deltaY/120]
  
    }
    fireProjectile() {
        if(this.game.enemies.filter(e=> e instanceof Voidlette).length < this.fireMax ){
            const vel = this.fireTrajectory();
            // const voidlette = new Voidlette ({
            //     game: this.game,
            //     pos: [this.pos[0]+10, this.pos[1] + this.height*Math.random()],
            //     vel: [-4,0]
            // })
            const voidlette = new Voidlette ({
                game: this.game,
                pos: [this.pos[0]+10, this.pos[1] + this.height*0.6],
                vel: [
                    -4,
                    this.shouldFireUp() ? 0.5 : -0.5],
            })
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
    deductHealth() {
        
        this.currentSpriteImages = EnemySprites.voidPuffHit;
        this.ticksPerFrame = 2;
        this.healthPoints -= 1;
        if (this.healthPoints <= 0) { 
            this.game.player.addToScore(this);
            this.game.remove(this) }
    }
}

module.exports = VoidPuff;