const Util = require('../Util/util');

class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.game = options.game;
        this.color = options.color;
        this.shape = options.shape || "circle";
        this.type = options.type || " ";
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame
        this.currentSpriteImages = options.currentSpriteImages;
        this.isWrappable = options.isWrappable || false;
        this.isBounded = options.isBounded || false;
        this.healthPoints = options.healthPoints || 1;
    }

    draw(ctx) {
        // debugger;
        let pos = this.pos.concat([]);
        if(this.shape==="circle") {
            pos[0] = this.pos[0] - this.radius/2;
            pos[1] = this.pos[1] - this.radius/2;
        }
        ctx.drawImage(this.currentSpriteImages[this.frameIndex],
            pos[0],
            pos[1],
            this.width,
            this.height,
        )
        this.animateSprite();

        ctx.strokeStyle = "white";
        
        this.drawRenderBox(ctx)
        this.drawHitBox(ctx,0.6)
        
       
    }

    drawRenderBox(ctx) {
        ctx.strokeStyle = "white";
        if (this.shape === "rectangle") {
            ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height)
        }
        else if(this.shape==="circle"){
            ctx.beginPath();
            ctx.arc(
                this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
            );
            ctx.stroke();
        }
    }
    drawHitBox(ctx,ratio) {
        ctx.strokeStyle = "green";
        if(this.shape === "rectangle") {
            const hB = this.squareHitBox(this,ratio)
            ctx.strokeRect(hB.pos[0], hB.pos[1], hB.width, hB.height)
            ctx.strokeStyle = "green";
        }
        else if(this.shape === "circle") {
            ctx.beginPath();
            ctx.arc(
                this.pos[0], this.pos[1], this.radius*ratio, 0, 2 * Math.PI, true
            );
            ctx.stroke();
        }
    }

    animateSprite() {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            if (this.frameIndex >= this.currentSpriteImages.length - 1) {

                this.frameIndex = 0;
            }
            else { this.frameIndex += 1; }
        }
    }
    move(timeDelta) {
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
 
        const x = this.pos[0] + (this.vel[0] * velocityScale);
        const y = this.pos[1] + (this.vel[1] * velocityScale);
        this.pos = [x, y];

        // isOutOfBounds returns a 2 item array
        // [0] === true/false
        // [1] === bad pos aka "top", "right", etc;
        if (this.game.isOutOfBounds(this.pos)[0]===true) { 
            if(this.isWrappable === true) this.pos = this.game.wrap([x, y]) ;
            else if(this.isBounded === true) {
                this.vel = [0,0];
                switch (this.game.isOutOfBounds(this.pos)[1]) {
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
            else if (this.owner = "playerShip") {
                if(this.game.isOutOfBounds(this.pos)[1] != "bottom") this.game.remove(this)
            }
            else {this.game.remove(this)}
        }
    }

  

    collideWith(otherObject) {

    }

    squareHitBox(obj,ratio) {
        //original width vs new width;
        // ratio is .
        //<--------> 10
        //<----> .6
        //needs to be shifted over by  ((1 - .4) * width) / 2
        
        const width = obj.width * ratio;
        const height = obj.height * ratio;

        const x = obj.pos[0] + (((1-ratio) * obj.width)/2)
        // const x = obj.pos[0] + (((1-ratio) * width))*0.5
        const y = obj.pos[1] + ((1-ratio) * obj.height)/2
        // debugger;
        const hitbox = {pos: [x,y], width, height}

        return hitbox;

    }

    isCollidedWith(otherObject) {
        //ratios the hitbox
        const ratio = 0.6
        if(this === otherObject) return false;
        // debugger;
        if(this.type === otherObject.owner ||
            this.owner === otherObject.type) return false;

        if(this.shape === "circle" && otherObject.shape === "circle") {
            return Util.dist(this.pos, otherObject.pos) < this.radius*ratio + otherObject.radius*ratio
        }
        else if (this.shape === 'rectangle' && otherObject.shape === 'rectangle') {
                const thisHb = this.squareHitBox(this,ratio);
                const otherHb = this.squareHitBox(otherObject,ratio);
            if (thisHb.pos[0] < otherHb.pos[0] + otherHb.width &&
                thisHb.pos[0] + thisHb.width > otherHb.pos[0] &&
                thisHb.pos[1] < otherHb.pos[1] + otherHb.height &&
                thisHb.pos[1] + thisHb.height > otherHb.pos[1]) {
                // collision detected!
                this.deductHealth(this);
                this.deductHealth(otherObject);
            }
        }
        else {
            if(this.game.enemies.includes(this) && this.game.enemies.includes(otherObject)) {return false;}
            let circle,rect;
            if (this.shape === "circle") {
                circle = this;
                rect = otherObject;
            }
            else {
                circle = otherObject;
                rect = this;
            }
            
            const c = {
                pos: circle.pos,
                x: circle.pos[0],
                y: circle.pos[1],
                radius: circle.radius * ratio,
            }
            const r = {
                pos: rect.pos,
                leftX: rect.pos[0],
                rightX: rect.pos[0] + rect.width,
                topY: rect.pos[1],
                bottomY: rect.pos[1] + rect.height,
            }

            if( c.y + c.radius > r.topY) {
                if(c.y - c.radius < r.bottomY) {
                    if(c.x + c.radius > r.leftX) {
                        if(c.x - c.radius < r.rightX) {
                            if (rect.type === "playerShip" && this.game.renderShip === false) {
                                // console.log('dead ship cant hit')
                                return false;
                            }
                            // else if (rect.type === circle.owner) return false;
                            else {
                                // this.game.remove(this)
                                // this.game.remove(otherObject)
                                // debugger;
                                this.deductHealth(this)
                                // this.deductHealth(otherObject)
                            }

                        }
                    }
                }
            }

        }
    }
    deductHealth(obj) {
        obj.healthPoints -= 1;
        if (obj.healthPoints <= 0) { obj.game.remove(obj) }
    }
}

// const NORMAL_FRAME_TIME_DELTA = 15;
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
const DIM_X = 1400;
const DIM_Y = 700;

module.exports = MovingObject;