
class GameView {
    constructor(ctx, game) {
        this.ctx = ctx;
        this.game = game;
        this.imgWidth = 0;
        this.scrollSpeed = 10;
        this.keysPressed = {d: false, a: false, w: false, s: false, " ": false};
        this.gameStarting = true;
    }

    bindKeyEventHandlers() {


        key("o", e=>{const g = this.game;debugger})
        key("p", e=>{
            if (this.game.isPaused) this.game.unPause();
            else this.game.pause(this.ctx);
        })

        document.body.onkeydown = document.body.onkeyup = e=>{
            
            this.keysPressed[e.key] = e.type == 'keydown';
            if(e.key === " ") e.preventDefault();
        }

        const readyBtn = document.getElementById('ready-btn');

        readyBtn.addEventListener('click', e=> this.handleReadyClick());

        key("r", ()=> {
            if(this.game.renderShip === false) this.game.spawnShip();
        })

    }

    processEvents(time) {

        if(!this.game.ship.respawnShield){
        let newX = this.game.ship.vel[0];
        let newY = this.game.ship.vel[1];

        if (this.keysPressed["w"]) {
            if(newY > -ms) newY--;
        }
        if (this.keysPressed["s"]) {
            if(newY < ms) newY++;
        }
        if (this.keysPressed["d"]) {
            if(newX < ms) newX++;
        }
        if (this.keysPressed["a"]) {
            if(newX > -ms) newX--;
        }
        if(this.keysPressed[" "]) {this.game.ship.fireProjectile(time)}
        
        newX *= friction;
        newY *= friction;
        this.game.ship.power([newX,newY], time)}
    
    }
    handleReadyClick() {
        if(!this.game.isStarting && !this.game.isStarted) {
            this.game.isStarting = true;
            
        }
    }

    animateStartTransition() {

    }

    start() {
        this.bindKeyEventHandlers();
        this.lastTime = 0;
        this.game.updateLivesDisplay();
        requestAnimationFrame(this.animate.bind(this));
        
    }

    animate(time) {
        if(!this.game.isPaused) {
            if(this.game.isStarting) {
                this.game.startGame(time);
            }
            const timeDelta = time - this.lastTime;

            this.processEvents(time);

            this.game.step(timeDelta, time);

            this.game.draw(this.ctx, timeDelta);

        }
            this.lastTime = time;
            requestAnimationFrame(this.animate.bind(this));
    }
}

const friction = 0.98;
const ms = 7;
GameView.MOVES = {
    w: [0, -ms],
    a: [-ms, 0],
    s: [0, ms],
    d: [ms, 0],
};

module.exports = GameView;