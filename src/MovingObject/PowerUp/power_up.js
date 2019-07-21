const MovingObject = require('../moving_object');

class PowerUp extends MovingObject {
    constructor(options) {
        options.vel = [-1,0]
        super(options)
        this.radius = options.radius || 20;
        this.payload = options.payload || "BasicShot"
        this.originalY = this.pos[1];
        this.ascending = true;
        this.yVariance = 20;
    }

    draw(ctx) {

        ctx.strokeStyle = "green"
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

module.exports = PowerUp;