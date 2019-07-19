const Util = require('../Util/util');
const Ship = require('../MovingObject/Ship/ship');
const Projectile = require('../MovingObject/Projectile/projectile');
const Star = require('../MovingObject/Background/star');


class Game {
    constructor() {
        this.stars = [];
        this.playerProjectiles = [];

        this.addStars();
        this.ship = new Ship({ game: this, pos: [this.randomX(),this.randomY()] })
        this.renderShip = true;
        
    }



    add(obj) {
        if (obj instanceof Star) {
            this.stars.push(obj);
        }
        else if (obj instanceof Projectile) {
            this.playerProjectiles.push(obj)
            // if(obj.owner === "playerShip") {
            //     if(this.playerProjectiles.length < 28) this.playerProjectiles.push(obj)
            // }
        }
        else {
            debugger;
            console.log(`Game.prototype.add : can't handle ${obj}`)
        }
    }

    allObjects() {
        return [this.ship].concat(this.stars,this.playerProjectiles);
    }

    addStars() {
        for(let i=0; i < Game.NUM_STARS; i++) {
            this.add( new Star( {game: this, pos: [this.randomX(), this.randomY()]}))
            // this.add( new Star( {game: this, pos: [Game.DIM_X, this.randomY()]}))
        }
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, Game.DIM_X, Game.DIM_Y)
        this.allObjects().forEach(obj => { obj.draw(ctx); })
    }
    isOutOfBounds(pos) {
        const offsetY = 9;
        const offsetX = 10;
        if (pos[0] > Game.DIM_X-offsetX) return [true, "right"]
        else if (pos[0] < offsetX) return [true, "left"]
        else if (pos[1] < offsetY) return [true, "top"]
        else if (pos[1] > Game.DIM_Y-offsetY) return [true, "bottom"]
        else return [false, "inbounds"]
    }
    moveObjects(timeDelta) {
        this.allObjects().forEach(object => (object.move(timeDelta)))
    }
    randomY() {
        return Math.floor(Math.random() * Game.DIM_Y);
    }
    randomX() {
        return Math.floor(Math.random() * Game.DIM_X);
    }
    remove(obj) {
        if (obj instanceof Ship) {
            this.renderShip = false;
        }
        if (obj instanceof Star) {
            this.stars.splice(this.stars.indexOf(obj),1);
        }
        if (obj instanceof Projectile) {
            this.playerProjectiles.splice(this.playerProjectiles.indexOf(obj),1);
        }
    }
    step(timeDelta) {
        this.moveObjects(timeDelta);
        // this.checkCollisions();
    }
    wrap(pos) {
        return [Game.DIM_X - (pos[0] % Game.DIM_X), this.randomY()]
    }
}

Game.NUM_STARS = 500;
Game.NUM_MOONS = 1;


Game.DIM_X = 1400;
Game.DIM_Y = 700;

module.exports = Game;