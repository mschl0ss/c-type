const Util = require('../Util/util');

class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.game = options.game;
        this.color = options.color;
        this.shape = options.shape || "rectangle";
        this.type = options.type || " ";
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame
        this.currentSpriteImages = options.currentSpriteImages;
        this.isWrappable = options.isWrappable || false;
        this.isBounded = options.isBounded || false;
    }

    draw(ctx) {

        ctx.drawImage(this.currentSpriteImages[this.frameIndex],
            this.pos[0],
            this.pos[1],
            this.width,
            this.height,
        )
        this.animateSprite();
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
        // ratio is .4
        //<--------> 10
        //<----> 4
        //needs to be shifted over by  ((1 - .4) * width) / 2
        
        const width = obj.width * ratio;
        const height = obj.height * ratio;

        const x = obj.pos[0] + ((1-ratio) * width)/2
        const y = obj.pos[1] + ((1-ratio) * height)/2

        const hitbox = {pos: [x,y], width, height}

        return hitbox;

    }

    isCollidedWith(otherObject) {
        //shrinks the hitbox
        const shrink = 0.4
        if(this === otherObject) return false;
        // debugger;
        if(this.shape === "circle" && otherObject.shape === "circle") {
            return Util.dist(this.pos, otherObject.pos) < this.radius*shrink + otherObject.radius*shrink
        }
        else {
            
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
                radius: circle.radius * shrink,
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
                            else if (rect.type === circle.owner) return false;
                            else {
                                this.game.remove(this)
                                this.game.remove(otherObject)
                            }

                        }
                    }
                }
            }

        }
    }
}

// const NORMAL_FRAME_TIME_DELTA = 15;
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
const DIM_X = 1400;
const DIM_Y = 700;

module.exports = MovingObject;