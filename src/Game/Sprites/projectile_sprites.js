const imgBS = require('../../assets/sprites/cat/Shoots and Explodes/Shoots/Normal attacks/Fire-Shoot.png')


// -------Preload images

//------Basic Shot
const basicShot = new Image();
basicShot.src = imgBS;

const ProjectileSprites = {
    basicShot: [basicShot],
}

module.exports = ProjectileSprites;