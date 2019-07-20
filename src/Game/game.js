const Util = require('../Util/util');
const EnemyGen = require('./enemy_gen')
const Ship = require('../MovingObject/Ship/ship');
const Projectile = require('../MovingObject/Projectile/projectile');
const Star = require('../MovingObject/Background/star');
const Enemy = require('../MovingObject/Enemy/enemy');


class Game {
    constructor() {
        this.enemyGen = new EnemyGen(this)
        this.stars = [];
        this.playerProjectiles = [];
        this.enemyProjectiles = [];
        this.enemies = [];
        this.addStars();
        this.ship = new Ship({ game: this, pos: [250, 350], vel: [0, 0] })
        this.spawnShip();   

        this.lastTime = 0;
        this.backgroundInterval = 50;
        this.backgroundDirection = 1;
        this.backgroundY = 625;
 
    }

    spawnShip() {
        this.ship = new Ship({ game: this, pos: [250, 350], vel: [0, 0] })
        this.renderShip = true;
    }

    add(obj) {
        if (obj instanceof Star) {
            this.stars.push(obj);
        }
        else if (obj instanceof Projectile) {
                this.playerProjectiles.push(obj) 
        }
        else if (obj instanceof Enemy) {
            this.enemies.push(obj)
        }
        else {
            
            console.log(`Game.prototype.add : can't handle ${obj}`)
        }
    }

    allObjects() {
        return [this.ship].concat(this.playerProjectiles,this.enemyProjectiles,this.enemies);
    }

    addStars() {
        for(let i=0; i < Game.NUM_STARS; i++) {
            this.add( new Star( {game: this, pos: [this.randomX(), this.randomY()]}))
        }
    }

    checkCollisions() {
        const objs = this.allObjects();
        for (let i = 0; i < objs.length; i++) {
            for (let j = 0; j < objs.length; j++) {
                if (objs[i].isCollidedWith(objs[j]) && i !== j) {
                    // debugger;
                    objs[i].collideWith(objs[j])
                }
            }
        }
    }

    draw(ctx, time) {

        //draw shifting bg
        const timeDelta = time - this.lastTime;
        if(timeDelta > this.backgroundInterval) {
            this.backgroundY = this.backgroundY + (2*this.backgroundDirection)
            this.lastTime = time;
        }

        this.backgroundDirection = this.backgroundY < 625 ? 1 :
            this.backgroundY > 750 ? -1 : this.backgroundDirection;

        const gradient = ctx.createLinearGradient(0,
            this.backgroundY - 600, 0, this.backgroundY);
        gradient.addColorStop(0, "#030919")
        gradient.addColorStop(.45, "#08244D")
        gradient.addColorStop(.75, "#08244D")
        gradient.addColorStop(1, "#030919")
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y)

        //draw stars
        this.stars.forEach(star => {star.draw(ctx)})

        //draw the ship
        if(this.renderShip) this.ship.draw(ctx);

        //draw player shots
        this.playerProjectiles.forEach(p => p.draw(ctx));

        //draw enemies
        this.enemies.forEach(enemy => {enemy.draw(ctx)})
    }
    isOutOfBounds(pos) {
        //if the pos coords are off the map return [true, "side of the map they're off"]
        //*mitigated by the offset, which smooths out interactions with the border
        const offsetY = 9;
        const offsetX = 0;
        if (pos[0] > Game.DIM_X-offsetX) return [true, "right"]
        else if (pos[0] < offsetX) return [true, "left"]
        else if (pos[1] < offsetY) return [true, "top"]
        else if (pos[1] > Game.DIM_Y-offsetY-9) return [true, "bottom"]
        else return [false, "inbounds"]
    }
    moveObjects(timeDelta) {
        this.stars.forEach(star => star.move(timeDelta));
        this.ship.move(timeDelta);
        this.playerProjectiles.forEach(p => p.move(timeDelta));
        this.enemies.forEach(enemy => { enemy.move(timeDelta) })
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
            // debugger;
            this.playerProjectiles.splice(this.playerProjectiles.indexOf(obj),1);
        }
        if (obj instanceof Enemy) {
            this.enemies.splice(this.enemies.indexOf(obj),1);
        }
    }
    step(timeDelta, time) {
        this.moveObjects(timeDelta);
        this.enemyGen.scheduler();
        this.checkCollisions();
    }
    wrap(pos) {
        return [Game.DIM_X - (pos[0] % Game.DIM_X), this.randomY()]
    }
}


Game.NUM_STARS = 500;
Game.NUM_MOONS = 1;

Game.NUM_BUGS = 5;
Game.DIM_X = 1400;
Game.DIM_Y = 700;

module.exports = Game;