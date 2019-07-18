console.log('webpacking')
const MovingObject = require("./MovingObject/moving_object");
const Asteroid = require("./MovingObject/asteroid")
const Game = require('./Game/game');
const GameView = require('./Game/game_view');




window.addEventListener('DOMContentLoaded', ()=> {
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    
    window.canvas = canvas;
    window.context = context;
    
    const game = new Game();
    const gv = new GameView(game, context);
    gv.start();

    window.MovingObject = MovingObject;
    window.mo = new MovingObject(
        { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
    );

    window.ast = new Asteroid({ pos: [30, 30] });
    
    


})