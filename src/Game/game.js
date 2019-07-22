const Util = require('../Util/util');
const EnemyGen = require('./enemy_gen');
const Player = require('./player');
const ShipSprites = require('./Sprites/ship_sprites');
const Ship = require('../MovingObject/Ship/ship');
const Projectile = require('../MovingObject/Projectile/projectile');
const Star = require('../MovingObject/Background/star');
const Enemy = require('../MovingObject/Enemy/enemy');
const Explode = require('../MovingObject/Background/explode');
const PowerUp = require('../MovingObject/PowerUp/power_up');


class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.pausedObjects = {};
        this.stars = [];
        this.playerProjectiles = [];
        this.enemyProjectiles = [];
        this.enemies = [];
        this.explosions = [];
        this.powerUps = [];
        this.addStars();

        this.player = new Player(this)
        this.ship = new Ship({ game: this, pos: [250, 350], vel: [0, 0] })

        this.isStarting = false;
        this.isStarted = false;
        this.beginStartingAt = 0;
        this.isPaused = false;
        this.isOver = false;
        this.renderShip = false;

        this.modalAwake = false;
        this.modalId = '';
        this.lastTime = 0;
        this.backgroundInterval = 50;
        this.backgroundDirection = 1;
        this.backgroundY = 625;
 
    }

    startGame(time) {
        if(this.isStarting) {
            const tutorial = document.getElementById('tutorial-wrapper')
            if(this.beginStartingAt === 0 ) {
                this.beginStartingAt = time;
                this.updateLivesDisplay();
                document.getElementById('ready-btn')
                    .className = "hidden";
                tutorial.className = "tutorial-wrapper modal starting";
            }
            else if (time - this.beginStartingAt >= 3500) {
                this.isStarted = true;
                tutorial.className = "hidden"
            }
            else if(time - this.beginStartingAt >= 1800) {
                document.getElementById('player-controls').className = 'controls';
                
            }
            else if(time - this.beginStartingAt >= 1500) {
                document.getElementById('player').className = 'player'
            }
           
            

            
        }
        if(this.isStarted){
            this.isStarting = false;
            this.isStarted = true;
            this.spawnShip();
            this.enemyGen = new EnemyGen(this);
        }
       
    }

    animateStartTransition(time) {
        const tutorial = document.getElementById('tutorial-wrapper')
        tutorial.className = "tutorial-wrapper modal starting";
        

        // console.log(time)
        if(time - this.beginStartingAt>= 2500 ) {tutorial.className = "hidden"}
    }

    pause(ctx) {
        this.allObjects().forEach(obj => {
            this.pausedObjects[obj.id] = { pos: [obj.pos[0], obj.pos[1]], vel: obj.vel };
            obj.vel = [0, 0]
        })
        this.stars.forEach(star => {
            this.pausedObjects[star.id] = { pos: [star.pos[0], star.pos[1]], vel: star.vel };
            star.vel = [0, 0]
        })
        this.isPaused = true;
        this.drawMask(ctx)
        const pause = document.getElementById('pause');
        pause.className = "modal"
    }

    unPause(time) {
        this.allObjects().forEach(obj => {
            obj.pos = this.pausedObjects[obj.id].pos;
            obj.vel = this.pausedObjects[obj.id].vel;
        })
        this.stars.forEach(obj => {
            obj.pos = this.pausedObjects[obj.id].pos;
            obj.vel = this.pausedObjects[obj.id].vel;
        })
        this.isPaused = false;
        const pause = document.getElementById('pause');
        pause.className = "hidden"
    }
    spawnShip() {
        document.getElementById('dead')
            .className = "hidden"
        if (this.player.lives >= 0) {
            if(this.ship === undefined) {
                
            }
            this.ship.pos = [-50, 350];
            this.ship.vel = [2,0];
            this.renderShip = true;
            this.ship.respawnShield = true;
            this.ship.drawRespawning();
            
            this.updateLivesDisplay();
            // this.ship.pos= [250, 350]
            // this.ship.vel= [0, 0];
            
        }
    }

    gameOver() {
        document.getElementById('final-score-display')
            .innerHTML=this.player.score;
        document.getElementById('player')
            .className = "player clear"
        this.isOver = true;
    }

    updateLivesDisplay() {
        const livesUl = document.getElementById('lives');
        livesUl.innerHTML =""
        
        for(let i=0; i < 3;i++) {
            const image = new Image();
            image.src = i< this.player.lives ? ShipSprites.default[0].src : ShipSprites.dead[0].src;
            const li = document.createElement('LI');
            li.appendChild(image);
            livesUl.appendChild(li)
        }

        // <h3 id="dead-title">Ouch.</h3>
        const headline = Game.deadTitles[Math.floor(Math.random() * (Game.deadTitles.length-1))]
        const text = this.player.lives > 0 ?
            `only ${this.player.lives} left.  make 'em count` :
            `last one!  i believe!`
        document.getElementById('dead-title')
            .innerHTML = headline;
        document.getElementById('dead-text')
            .innerHTML = text;

    }

    updateScoreDisplay() {
        const scoreSpan = document.getElementById('score');

        scoreSpan.innerHTML = `${this.player.score}`;
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
        else if(obj instanceof Explode) {
            this.explosions.push(obj)
        }
        else {
            console.log(`Game.prototype.add : can't handle ${obj}`)
        }
    }
    
    allObjects() {
        return [this.ship].concat(this.playerProjectiles,this.enemyProjectiles,this.enemies, this.powerUps);
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

    drawMask(ctx){
        ctx.globalAlpha = 0.5
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y)
        ctx.globalAlpha = 1
    }
    draw(ctx, timeDelta) {
        
        ctx.clearRect(0, 0, Game.DIM_X * 1.5, Game.DIM_Y * 1.5);


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
        this.stars.forEach(star => {star.draw(ctx,timeDelta)})

        //draw the ship
        if(this.renderShip) {this.ship.draw(ctx,timeDelta);}

        //draw player shots
        this.playerProjectiles.forEach(p => p.draw(ctx,timeDelta));

        //draw enemies
        this.enemies.forEach(enemy => {enemy.draw(ctx,timeDelta)})

        //draw splosions
        this.explosions.forEach(splode => splode.draw(ctx,timeDelta))
        if(this.isOver){
            this.drawMask(ctx)
        }

        this.powerUps.forEach(p => p.draw(ctx))
        if (this.isPaused || !this.renderShip) this.drawMask(ctx)
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
        if(this.isOver || this.renderShip === false) timeDelta /= 5;
        this.stars.forEach(star => star.move(timeDelta));
        this.ship.move(timeDelta);
        this.playerProjectiles.forEach(p => p.move(timeDelta));
        this.enemies.forEach(enemy => { enemy.move(timeDelta) })
        this.powerUps.forEach(p => p.move(timeDelta));
    }
    randomY() {
        return Math.floor(Math.random() * Game.DIM_Y);
    }
    randomX() {
        return Math.floor(Math.random() * Game.DIM_X);
    }

    removeShip(obj) {
        this.renderShip = false;
        this.player.lives -= 1;
        this.updateLivesDisplay();
        
        this.explosions.push(
            new Explode({ pos: obj.pos, w: obj.width, h: obj.height, game: this })
        )

        let id;
        if(this.player.lives < 0 ) {id='gameover'}
        else id="dead";
        document.getElementById(id)
            .className = "modal"

        if (this.player.lives < 0) this.gameOver();
    }
    remove(obj) {
        //remove things from game
        //if they should explode, explode them

        if (obj instanceof Ship && this.renderShip === true) {
            // this.renderShip = false;
            // this.player.lives -= 1;
            // this.updateLivesDisplay();
            // if (this.player.lives < 0) this.gameOver();
            // this.explosions.push(
            //     new Explode({ pos: obj.pos, w: obj.width, h: obj.height, game: this })
            // )
            this.removeShip(obj)
        }
        else if(obj instanceof Projectile) {
            this.playerProjectiles.splice(this.playerProjectiles.indexOf(obj), 1);
        }
        else if (obj instanceof Star) {
            this.stars.splice(this.stars.indexOf(obj),1);
        }
        else if (obj instanceof Enemy) {
            this.enemies.splice(this.enemies.indexOf(obj),1);
            this.explosions.push(
                new Explode({ pos: obj.pos, w: obj.width, h: obj.height, game: this })
            )
            if(obj.rewardsPowerUp) {
                this.powerUps.push(
                    new PowerUp ({ pos: obj.pos, radius: (obj.width+obj.height)/2, payload: obj.powerUpPayload, game: this})
                )
            }
        }
        else if(obj instanceof Explode) {
            this.explosions.splice(this.explosions.indexOf(obj),1)
        }
        else if(obj instanceof PowerUp) {
            this.powerUps.splice(this.powerUps.indexOf(obj), 1)
        }


    }
    step(timeDelta, time) {
        this.moveObjects(timeDelta);
        if(this.isStarted && this.enemyGen !== undefined) this.enemyGen.scheduler();
        this.checkCollisions();
    }
    wrap(pos) {
        return [Game.DIM_X - (pos[0] % Game.DIM_X), this.randomY()]
    }
}

Game.deadTitles = ["Ouch", "Oof", "Ughh", "Yikes"];
Game.NUM_STARS = 500;
Game.NUM_MOONS = 1;

Game.NUM_BUGS = 5;
Game.DIM_X = 1400;
Game.DIM_Y = 700;

module.exports = Game;