const Util = {
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },
    wrap(coord, max) {
        if (coord < 0) {
            return max - (coord % max);
        } 
        else if (coord > max) {
            return coord % max;
        }
        else {
            return coord;
        }
    },
    dist(objA, objB) {
        return Math.sqrt(
            Math.pow(objA.pos[0] - objB.pos[0], 2) + Math.pow(objA.pos[1] - objB.pos[1], 2)
        );
    }
}

module.exports = Util;