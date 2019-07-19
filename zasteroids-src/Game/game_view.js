
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
        
        key("space", (e) => { this.game.ship.fireBullet(); });
    

    }
    // if i could store the pressed keys in a container, I could process them
    test() {
        const map = {};

    }

    start() {
        const img = new Image();
        img.onload = () => {
        this.bindKeyHandlers();
        setInterval(()=> {
            this.game.step();
            this.game.draw(this.ctx,img);
        }, 20)}
        img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b383ed4f-baa4-45db-b1cf-45ec928e1d26/datkt2o-030ebb43-ee30-4f32-93ba-65b77efaee16.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzODNlZDRmLWJhYTQtNDVkYi1iMWNmLTQ1ZWM5MjhlMWQyNlwvZGF0a3Qyby0wMzBlYmI0My1lZTMwLTRmMzItOTNiYS02NWI3N2VmYWVlMTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Uz5T7csR3yWlqejj0qtVfD62lMxd-IQfH3lOnZLvzlY'
    }
}

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};
module.exports = GameView;