
class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    }

    bindKeyHandlers() {
        Object.keys(GameView.MOVES).forEach((k) => {
            const move = GameView.MOVES[k];
            key(k, () => { this.game.ship.power(move); });
        });
    }
    start() {
        this.bindKeyHandlers();
        setInterval(()=> {
            this.game.step();
            this.game.draw(this.ctx);
        }, 20)
    }
}

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};
module.exports = GameView;