const MovingObject = require('../moving_object');
const Ship = require('../Ship/ship')

class PowerUp extends MovingObject {
    constructor(options) {
        options.vel = [-1,0]
        options.color = PowerUp.shotTypes[options.payload]
        super(options)
        this.radius = options.radius || 20;
        
        this.payload = options.payload;
        this.originalY = this.pos[1];
        this.ascending = true;
        this.yVariance = 20;

        if(this.payload === undefined) {debugger;}
    }

    collideWith(otherObj) {
        // debugger;
        if(otherObj.type === "playerShip"){
            this.game.ship.loadProjectile(this.payload);
            this.game.remove(this)
        }
    }

    draw(ctx) {
        ctx.strokeStyle = PowerUp.shotTypes[this.payload];
        ctx.lineWidth = 2;
        
        let alpha = 1;
        let radiusRatio = 1;
        for (let i = 0; i < 20; i++) {
            ctx.globalAlpha = alpha
            ctx.beginPath();
            ctx.arc(
                this.pos[0], this.pos[1], this.radius * radiusRatio, 0, 2 * Math.PI, true
            );
            ctx.stroke();
            alpha -= alpha <= 0.2 ? 0 : 0.05;
            radiusRatio -= 0.05;
        }

        ctx.globalAlpha = 1;
        ctx.fillStyle = "#b3c9ce"
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius*0.2, 0, 2 * Math.PI, true
        );
        ctx.fill();

    }

    move(timeDelta) {
        if (this.pos[1] < this.originalY - this.yVariance) {this.ascending = false;}
        else if(this.pos[1] > this.originalY + this.yVariance) {this.ascending = true;}
        
        this.vel[1] = this.ascending ? -0.3 : 0.3;
        
        MovingObject.prototype.move.call(this,timeDelta)
    }
}


PowerUp.shotTypes = { "LaserShot": "#00ccff", "LaserShot": "#00ccff", "LaserShot":"#00ccff" }
// PowerUp.shotTypes = { "RapidFire": "green", "SpreadShot": "#6a7af2", "LaserShot":"#00ccff" }

module.exports = PowerUp;