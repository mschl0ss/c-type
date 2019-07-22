console.log('webpacking')
const GameView = require('./Game/game_view')
const Game = require('./Game/game')


window.addEventListener('DOMContentLoaded', ()=> {
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    
    window.canvas = canvas;
    window.context = context;
    
    const game = new Game(context);
    const gv = new GameView(context, game);
    gv.start();

    


})