const MovingObject = require('../moving_object');
const BasicShot = require('../Projectile/basic_shot');
const Util = require('../../Util/util');


const basicShotSpeeds = [15,16]
class Ship extends MovingObject {
    constructor(options) {
        options.color = "#545454";
        options.pos = options.pos
        options.vel = options.vel
        options.isBounded = true;
        options.type = "playerShip"
        super(options);
        
        // this.width = 75;
        // this.height = 35;
        this.width = 50;
        this.height = 14;
        this.projectileType = "BasicShot";
        this.lastShotTime = 0;
        this.lastPowerTime = 0;
        this.reloadTime = BasicShot.reloadTime;

        this.sprite = this.loadImages();

    }

    draw(ctx) {
        const [x,y] = this.pos;
        const h = this.height;
        const w = this.width;
        const body = { x:x ,y:y, w: 24, h: 16};
        const cockpit = {x: x+28, y: y+1, w: 20, h: 12}

        ctx.fillStyle = this.color;
        ctx.strokeStyle = "#798EA8";
        ctx.lineWidth = 3;
        // ctx.fillRect(body.x,body.y,body.w,body.h);
        // ctx.strokeRect(body.x,body.y,body.w,body.h);
        ctx.strokeRect(x,y+h,w, 3);
        ctx.beginPath();
        ctx.moveTo(x, y+h); //A
        ctx.lineTo(x-5, y+h*.5); //B
        ctx.lineTo(x+10, y + 3); //C
        ctx.lineTo(x+24, y+5); //D
        ctx.lineTo(x+26, y+10); //E
        ctx.lineTo(x+28, y+15); //F
        ctx.lineTo(x+15, y+h); //G
        ctx.lineTo(x+13, y+h*.7); //G
        ctx.fill();
 
        
        ctx.fillStyle = "#31BBFB";

        ctx.beginPath();
        ctx.moveTo(x+20, y+8); //E
        ctx.lineTo(x+28, y+6); //H
        ctx.lineTo(x+w, y+12); //I
        ctx.lineTo(x+w-8, y+15); //J
        ctx.lineTo(x+w-12, y+15); //K
        ctx.lineTo(x+w-18, y+15); //K

        ctx.fill();
 
        // ctx.fillRect(cockpit.x, cockpit.y, cockpit.w,cockpit.h);
        // ctx.strokeRect(cockpit.x, cockpit.y, cockpit.w,cockpit.h);
        
    }

    loadImages() {
        const catImage1 = new Image();
        catImage1.src = "../../src/assets/sprites/cat/cat_flying/frame-1.png"
        const catImage2 = new Image();
        catImage1.src = "../../src/assets/sprites/cat/cat_flying/frame-2.png"
    }
   
    power(impulse) {
        this.vel = impulse;
    }


    fireProjectile(time) {
        const timeDelta = time - this.lastShotTime;
        if(this.game.renderShip === false) {return console.log('cant fire youre dead bruh')}
        else if(timeDelta > this.reloadTime ) {
            const projectile = new BasicShot ({
                pos: [this.pos[0] + (this.width*0.9), this.pos[1] + (this.height*0.9)],
                vel: [basicShotSpeeds[Math.floor(Math.random() *2)],0],
                game: this.game,
                owner: "playerShip"
            })
            
            // debugger;

            this.game.add(projectile);
            this.lastShotTime = time;
            }
        // else { debugger; }
    }


}


module.exports = Ship;