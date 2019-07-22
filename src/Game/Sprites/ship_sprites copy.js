const imgShipDefault1 = require('../../assets/sprites/cat/cat_flying/frame-1.png');
const imgShipDefault2 = require('../../assets/sprites/cat/cat_flying/frame-2.png');
const imgShipShooting1 = require('../../assets/sprites/cat/cat_shoot/frame-1.png');
const imgShipShooting2 = require('../../assets/sprites/cat/cat_shoot/frame-2.png');
const imgShipDead1 = require('../../assets/sprites/cat/cat_gameOver/frame-1.png');
const imgShipDead2 = require('../../assets/sprites/cat/cat_gameOver/frame-2.png');
const imgShipTwinkles1 = require('../../assets/sprites/cat/cat_twinkles/frame-1.png');
const imgShipTwinkles2 = require('../../assets/sprites/cat/cat_twinkles/frame-2.png');
const imgShipTwinkles3 = require('../../assets/sprites/cat/cat_twinkles/frame-3.png');
const imgShipTwinkles4 = require('../../assets/sprites/cat/cat_twinkles/frame-4.png');

// -------Preload images

//------Ship
// default
const shipDefault1 = new Image();
shipDefault1.src = imgShipDefault1;
const shipDefault2 = new Image();
shipDefault2.src = imgShipDefault2;
// shooting
const shipShooting1 = new Image();
shipShooting1.src = imgShipShooting1;
const shipShooting2 = new Image();
shipShooting2.src = imgShipShooting2;
// dead
const shipDead1 = new Image();
shipDead1.src = imgShipDead1;
const shipDead2 = new Image();
shipDead2.src = imgShipDead2;
// twinkless
const shipTwinkles1 = new Image();
shipTwinkles1.src = imgShipTwinkles1;
const shipTwinkles2 = new Image();
shipTwinkles2.src = imgShipTwinkles2;
const shipTwinkles3 = new Image();
shipTwinkles3.src = imgShipTwinkles3;
const shipTwinkles4 = new Image();
shipTwinkles4.src = imgShipTwinkles4;

const ShipSprites = {

    default: [shipDefault1, shipDefault2],
    shooting: [shipShooting1, shipShooting2],
    dead: [shipDead1, shipDead2],
    twinkles: [shipTwinkles1, shipTwinkles2],

}

module.exports = ShipSprites