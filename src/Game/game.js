const Asteroid = require('../MovingObject/asteroid');
const Util = require('../utils/util');
const Ship = require('../MovingObject/ship');


class Game {
    constructor() {
        this.asteroids = [];
        
        this.addAsteroids();
        this.ship = new Ship({game: this, pos: this.randomPosition()})
    }

    addAsteroids() {
        for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.asteroids.push( new Asteroid( {game: this, pos: this.randomPosition() }));
        }
    }
    allObjects() {
        return this.asteroids.concat(this.ship);
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
    draw(ctx) {
        ctx.clearRect(0,0,Game.DIM_X*1.5, Game.DIM_Y*1.5);
        this.allObjects().forEach(asteroid => {asteroid.draw(ctx);})
    }
    moveObjects() {
        this.allObjects().forEach(asteroid => {asteroid.move();})
    }
    randomPosition () {
        return [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];
    }
    remove(asteroid) {
        //Array.prototype.splice(startingIndex, itemsToDelete)
        this.asteroids.splice(this.asteroids.indexOf(asteroid),1);
    }
    step() {
        this.moveObjects();
        this.checkCollisions();
    }
    wrap(pos) {
        return [ Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y) ]
    }
}

Game.NUM_ASTEROIDS = 10;
Game.DIM_X = 1200;
Game.DIM_Y = 500;

module.exports = Game;