
class GameView {
    constructor(ctx, game) {
        this.ctx = ctx;
        this.game = game;
        this.imgWidth = 0;
        this.scrollSpeed = 10;
        this.keysPressed = {d: false, a: false, w: false, s: false, " ": false};
    }

    bindKeyEventHandlers() {


        key("p", e=>{const g = this.game;debugger})

        document.body.onkeydown = document.body.onkeyup = e=>{
            
            this.keysPressed[e.key] = e.type == 'keydown';
        }

        key("r", ()=> {
            if(this.game.renderShip === false) this.game.spawnShip();
        })

    }

    processEvents(time) {
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
        this.game.ship.power([newX,newY], time)
    
    }

    start() {
        this.bindKeyEventHandlers();
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
        
    }

    animate(time) {

        const timeDelta = time - this.lastTime;

        this.processEvents(time);

        this.game.step(timeDelta, time);

        this.game.draw(this.ctx);

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