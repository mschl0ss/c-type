const Util = require('../Util/util');
const Ship = require('../MovingObject/Ship/ship');
const Projectile = require('../MovingObject/Projectile/projectile');
const Star = require('../MovingObject/Background/star');
const Enemy = require('../MovingObject/Enemy/enemy');
const Bug = require('../MovingObject/Enemy/bug');

const initialBugDelay = 5000;
class Game {
    constructor() {
        this.stars = [];
        this.playerProjectiles = [];
        this.bugs = [];
        this.bugGroups = [];
        this.bugLimit = 10;
        this.previousBugSpawnTime = 0;
        this.previousBugSpawnY = this.randomY();
        this.addStars();
        
        this.ship = new Ship({ game: this, pos: [250, 350], vel: [0, 0] })
        this.spawnShip();

        // this.addABug();

        
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
        else if (obj instanceof Bug) {
            
            this.bugs.push(obj)
        }
        else {
            
            console.log(`Game.prototype.add : can't handle ${obj}`)
        }
    }

    allObjects() {
        return [this.ship].concat(this.playerProjectiles,this.bugs);
    }

    addStars() {
        for(let i=0; i < Game.NUM_STARS; i++) {
            this.add( new Star( {game: this, pos: [this.randomX(), this.randomY()]}))
        }
    }
    addEnemies(time) {
        
        if ( this.bugs.length < this.bugLimit) {
            
            if(time - this.previousBugSpawnTime > 200){
                const offset = this.previousBugSpawnY > 350 ? -200 : 200;
                const newY = this.previousBugSpawnY + Math.floor(Math.random() * offset)
                this.add( new Bug({ game: this, pos: [Game.DIM_X-11,newY]}))
                this.previousBugSpawnY = newY;
                this.previousBugSpawnTime = time;
                // console.log(this.previousBugSpawnTime)
        }}

    }

    checkCollisions() {
        const objs = this.allObjects();
        for (let i = 0; i < objs.length; i++) {
            for (let j = 0; j < objs.length; j++) {
                if (objs[i].isCollidedWith(objs[j]) && i !== j) {
                    console.log('oop')
                    objs[i].collideWith(objs[j])
                }
            }
        }
    }

    draw(ctx) {
        // ctx.clearRect(0, 0, Game.DIM_X * 1.5, Game.DIM_Y * 1.5);
        //draw black background
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, Game.DIM_X, Game.DIM_Y)

        //draw stars
        this.stars.forEach(star => {star.draw(ctx)})

        //draw the ship
        if(this.renderShip) this.ship.draw(ctx);

        //draw player shots
        this.playerProjectiles.forEach(p => p.draw(ctx));

        //draw enemies
        this.bugs.forEach(bug => {bug.draw(ctx)})
    }
    isOutOfBounds(pos) {
        //if the pos coords are off the map return [true, "side of the map they're off"]
        //*mitigated by the offset, which smooths out interactions with the border
        const offsetY = 9;
        const offsetX = 10;
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
        this.bugs.forEach(bug => { bug.move(timeDelta) })
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
        if (obj instanceof Bug) {
            this.bugs.splice(this.bugs.indexOf(obj),1);
        }
    }
    step(timeDelta, time) {
        this.moveObjects(timeDelta);
        this.addEnemies(time);
        this.checkCollisions();
    }
    wrap(pos) {
        return [Game.DIM_X - (pos[0] % Game.DIM_X), this.randomY()]
    }
}


Game.NUM_STARS = 1000;
Game.NUM_MOONS = 1;

Game.NUM_BUGS = 5;
Game.DIM_X = 1400;
Game.DIM_Y = 700;

module.exports = Game;