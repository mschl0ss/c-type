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
        this.bugLimit = 5;
        this.previousBugSpawnTime = 0;
        this.prevousBugSpawnY = this.randomY();
        this.addStars();
        
        this.ship = new Ship({ game: this, pos: [this.randomX(),this.randomY()] })
        this.renderShip = true;

        // this.addABug();

        
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
        return [this.ship].concat(this.stars,this.playerProjectiles);
    }

    addStars() {
        for(let i=0; i < Game.NUM_STARS; i++) {
            this.add( new Star( {game: this, pos: [this.randomX(), this.randomY()]}))
            // this.add( new Star( {game: this, pos: [Game.DIM_X, this.randomY()]}))
        }
    }
    addEnemies(time) {
        
        if ( this.bugs.length < this.bugLimit) {
            
            if(time - this.previousBugSpawnTime > 600){
            this.add( new Bug({ game: this, pos: [Game.DIM_X,this.prevousBugSpawnY]}))
            this.previousBugSpawnTime = time;
            console.log(this.previousBugSpawnTime)
        }}

    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, Game.DIM_X, Game.DIM_Y)
        ctx.fillStyle = "#4cae50"
        this.allObjects().forEach(obj => { obj.draw(ctx); })
        this.bugs.forEach(bug => {bug.draw(ctx)})
    }
    isOutOfBounds(pos) {
        const offsetY = 0;
        // const offsetY = 9;
        const offsetX = 0;
        // const offsetX = 10;
        if (pos[0] > Game.DIM_X-offsetX) return [true, "right"]
        else if (pos[0] < offsetX) return [true, "left"]
        else if (pos[1] < offsetY) return [true, "top"]
        else if (pos[1] > Game.DIM_Y-offsetY) return [true, "bottom"]
        else return [false, "inbounds"]
    }
    moveObjects(timeDelta) {
        this.allObjects().forEach(object => (object.move(timeDelta)))
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
        // this.checkCollisions();
    }
    wrap(pos) {
        return [Game.DIM_X - (pos[0] % Game.DIM_X), this.randomY()]
    }
}

Game.NUM_STARS = 0;
Game.NUM_MOONS = 1;

Game.NUM_BUGS = 5;
Game.DIM_X = 1400;
Game.DIM_Y = 700;

module.exports = Game;