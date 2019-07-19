const imgShipDefault1 = require('../../assets/sprites/cat/cat_flying/frame-1.png');
const imgShipDefault2 = require('../../assets/sprites/cat/cat_flying/frame-2.png');
const imgShipShooting1 = require('../../assets/sprites/cat/cat_shoot/frame-1.png');
const imgShipShooting2 = require('../../assets/sprites/cat/cat_shoot/frame-2.png');

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

const ShipSprites = {

    default: [shipDefault1, shipDefault2],
    shooting: [shipShooting1, shipShooting2]

}

module.exports = ShipSprites