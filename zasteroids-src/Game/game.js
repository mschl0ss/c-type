const Asteroid = require('../MovingObject/asteroid');
const Util = require('../utils/util');
const Ship = require('../MovingObject/ship');
const Bullet = require('../MovingObject/bullet')


class Game {
    constructor() {
        this.asteroids = [];
        this.bullets = [];
        
        this.addAsteroids();
        this.ship = new Ship({game: this})
    }

    add(obj) {
        if (obj instanceof Asteroid) {
            this.asteroids.push(obj);
        } 
        else if (obj instanceof Bullet) {
            this.bullets.push(obj);
        }
    }
    addAsteroids() {
        for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.add( new Asteroid( {game: this, pos: this.randomPosition() }));
        }
    }
    allObjects() {
        return this.asteroids.concat(this.ship, this.bullets);
    }
    checkCollisions() {
        const objs = this.allObjects();
        for (let i = 0; i < objs.length; i++) {
            for (let j = 0; j < objs.length; j++) {
                if (objs[i].isCollidedWith(objs[j]) && i!==j) {
                    objs[i].collideWith(objs[j])
                }
            }
        }
    }
    draw(ctx, img) {
        ctx.clearRect(0,0,Game.DIM_X*1.5, Game.DIM_Y*1.5);
        ctx.drawImage(img, 50,50)
        this.allObjects().forEach(obj => {obj.draw(ctx);})
    }
    isOutOfBounds(pos) {
        return pos[0] > Game.DIM_X || pos[0] < 0 || pos[1] < 0 || pos[1] > Game.DIM_Y;
 
    }
    moveObjects() {
        this.allObjects().forEach(object => {object.move();})
    }
    randomPosition () {
        return [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];
    }
    remove(obj) {
        //Array.prototype.splice(startingIndex, itemsToDelete)
        if (obj instanceof Asteroid) {
            this.asteroids.splice(this.asteroids.indexOf(obj), 1);
        }
        else if (obj instanceof Bullet) {
            this.bullets.splice(this.bullets.indexOf(obj), 1);
        }
        
    }
    step() {
        this.moveObjects();
        this.checkCollisions();
    }
    wrap(pos) {
        return [ Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y) ]
    }
}

Game.NUM_ASTEROIDS = 0;
Game.DIM_X = 800;
Game.DIM_Y = 500;

module.exports = Game;