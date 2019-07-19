const MovingObject = require('../moving_object');
const Projectile = require('./projectile')

class BasicShot extends Projectile {
    constructor(options) {
       
        options.color = "#64ccef";
        options.shape = "circle";
        super(options)

        this.radius = 3;
        this.speed = 1;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "#31BBFB";
        // ctx.strokeStyle = "#EF8500";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        
        ctx.fill(); ctx.stroke();
    }

    // draw(ctx) {
    //     ctx.fillStyle = this.color;
    //     ctx.strokeStyle = "#EF8500";
    //     ctx.lineWidth = 1;
    //     ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
    //     ctx.fill(); ctx.stroke();
    // }
}

BasicShot.reloadTime = 90;

module.exports = BasicShot;