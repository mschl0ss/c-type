const Util = require('../Util/util');
const EnemyGen = require('./enemy_gen');
const Player = require('./player');
const Ship = require('../MovingObject/Ship/ship');
const Projectile = require('../MovingObject/Projectile/projectile');
const Star = require('../MovingObject/Background/star');
const Enemy = require('../MovingObject/Enemy/enemy');
const Explode = require('../MovingObject/Background/explode');


class Game {
    constructor() {
        this.enemyGen = new EnemyGen(this);
        this.pausedObjects = {};
        this.stars = [];
        this.playerProjectiles = [];
        this.enemyProjectiles = [];
        this.enemies = [];
        this.explosions = [];
        this.addStars();

        this.player = new Player(this)
        this.ship = new Ship({ game: this, pos: [250, 350], vel: [0, 0] })
        this.spawnShip();
        this.isPaused = false;
        this.isOver = true;

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

    pause() {
        this.allObjects().forEach(obj => {
            this.pausedObjects[obj.id] = {pos:[obj.pos[0],obj.pos[1]], vel:obj.vel};
            obj.vel = [0,0]
        })
        this.stars.forEach(star => {
            this.pausedObjects[star.id] = { pos: [star.pos[0], star.pos[1]], vel: star.vel };
            star.vel = [0, 0]
        })
        this.isPaused = true; 
        console.log(this.ship.pos)
        console.log(this.pausedObjects[this.ship.id])
    }

    unPause() {
        this.allObjects().forEach(obj => {
            obj.pos = this.pausedObjects[obj.id].pos;
            obj.vel = this.pausedObjects[obj.id].vel;
        })
        this.stars.forEach(obj => {
            obj.pos = this.pausedObjects[obj.id].pos;
            obj.vel = this.pausedObjects[obj.id].vel;
        })
        this.isPaused = false;
        console.log(this.ship.pos)
        console.log(this.pausedObjects[this.ship.id])
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
        ctx.clearRect(0, 0, Game.DIM_X * 1.5, Game.DIM_Y * 1.5);
        //draw shifting bg
        // const timeDelta = time - this.lastTime;
        // if(timeDelta > this.backgroundInterval) {
        //     this.backgroundY = this.backgroundY + (2*this.backgroundDirection)
        //     this.lastTime = time;
        // }

        // this.backgroundDirection = this.backgroundY < 600 ? 1 :
        //     this.backgroundY > 675 ? -1 : this.backgroundDirection;

        const gradient = ctx.createLinearGradient(0,
            this.backgroundY - 600, 0, this.backgroundY);
        gradient.addColorStop(0, "black")
        // gradient.addColorStop(0, "#030919")
        gradient.addColorStop(.4, "#030919")
        gradient.addColorStop(.8, "#030919")
        gradient.addColorStop(1, "black")
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

        //draw splosions
        this.explosions.forEach(splode => splode.draw(ctx))
    }
    isOutOfBounds(pos) {
        //if the pos coords are off the map return [true, "side of the map they're off"]
        //*mitigated by the offset, which smooths out interactions with the border
        const offsetY = -20;
        const offsetX = -400;
        if (pos[0] > Game.DIM_X-offsetX) return [true, "right"]
        else if (pos[0] < offsetX) return [true, "left"]
        else if (pos[1] < offsetY) return [true, "top"]
        else if (pos[1] > Game.DIM_Y-offsetY-9) return [true, "bottom"]
        else return [false, "inbounds"]
    }

    isShipOutOfBounds(pos) {
        const offsetY = 9;
        const offsetX = 0;
        if (pos[0] > Game.DIM_X - offsetX) return [true, "right"]
        else if (pos[0] < offsetX) return [true, "left"]
        else if (pos[1] < offsetY) return [true, "top"]
        else if (pos[1] > Game.DIM_Y - offsetY - 9) return [true, "bottom"]
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
        //remove things from game
        //if they should explode, explode them
        if (obj instanceof Ship && this.renderShip === true) {
            this.renderShip = false;
            this.player.lives += 1;
            if (this.player.lives <= 0) this.isOver = true;
            this.explosions.push(
                new Explode({ pos: obj.pos, w: obj.width, h: obj.height, game: this })
            )
           
        }
        else if (obj instanceof Star) {
            this.stars.splice(this.stars.indexOf(obj),1);
        }
        else if (obj instanceof Projectile) {
            // debugger;
            this.playerProjectiles.splice(this.playerProjectiles.indexOf(obj),1);
        }
        else if (obj instanceof Enemy) {
            this.enemies.splice(this.enemies.indexOf(obj),1);
            this.explosions.push(
                new Explode({ pos: obj.pos, w: obj.width, h: obj.height, game: this })
            )
        }
        else if(obj instanceof Explode) {
            this.explosions.splice(this.explosions.indexOf(obj),1)
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