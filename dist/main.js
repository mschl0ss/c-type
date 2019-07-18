/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game/game.js":
/*!**************************!*\
  !*** ./src/Game/game.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ../MovingObject/asteroid */ \"./src/MovingObject/asteroid.js\");\nconst Util = __webpack_require__(/*! ../utils/util */ \"./src/utils/util.js\");\nconst Ship = __webpack_require__(/*! ../MovingObject/ship */ \"./src/MovingObject/ship.js\");\n\n\nclass Game {\n    constructor() {\n        this.asteroids = [];\n        \n        this.addAsteroids();\n        this.ship = new Ship({game: this, pos: this.randomPosition()})\n    }\n\n    addAsteroids() {\n        for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n            this.asteroids.push( new Asteroid( {game: this, pos: this.randomPosition() }));\n        }\n    }\n    allObjects() {\n        return this.asteroids.concat(this.ship);\n    }\n    checkCollisions() {\n        const objs = this.allObjects();\n        for (let i = 0; i < objs.length; i++) {\n            for (let j = 0; j < objs.length; j++) {\n\n                if (objs[i].isCollidedWith(objs[j]) && i!==j) {\n                    objs[i].collideWith(objs[j])\n                }\n            }\n        }\n    }\n    draw(ctx) {\n        ctx.clearRect(0,0,Game.DIM_X*1.5, Game.DIM_Y*1.5);\n        this.allObjects().forEach(asteroid => {asteroid.draw(ctx);})\n    }\n    moveObjects() {\n        this.allObjects().forEach(asteroid => {asteroid.move();})\n    }\n    randomPosition () {\n        return [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];\n    }\n    remove(asteroid) {\n        //Array.prototype.splice(startingIndex, itemsToDelete)\n        this.asteroids.splice(this.asteroids.indexOf(asteroid),1);\n    }\n    step() {\n        this.moveObjects();\n        this.checkCollisions();\n    }\n    wrap(pos) {\n        return [ Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y) ]\n    }\n}\n\nGame.NUM_ASTEROIDS = 10;\nGame.DIM_X = 1200;\nGame.DIM_Y = 500;\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/Game/game.js?");

/***/ }),

/***/ "./src/Game/game_view.js":
/*!*******************************!*\
  !*** ./src/Game/game_view.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass GameView {\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;\n    }\n\n    bindKeyHandlers() {\n        Object.keys(GameView.MOVES).forEach((k) => {\n            const move = GameView.MOVES[k];\n            key(k, () => { this.game.ship.power(move); });\n        });\n    }\n    start() {\n        this.bindKeyHandlers();\n        setInterval(()=> {\n            this.game.step();\n            this.game.draw(this.ctx);\n        }, 20)\n    }\n}\n\nGameView.MOVES = {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0],\n};\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/Game/game_view.js?");

/***/ }),

/***/ "./src/MovingObject/asteroid.js":
/*!**************************************!*\
  !*** ./src/MovingObject/asteroid.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/MovingObject/moving_object.js\");\nconst Util = __webpack_require__(/*! ../utils/util */ \"./src/utils/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/MovingObject/ship.js\");\n\nconst DEFAULTS = {\n    COLOR: '#505050',\n    RADIUS: 50,\n    SPEED: 5,\n}\n\nclass Asteroid extends MovingObject {\n    constructor(options = {}) {\n        options.color = DEFAULTS.COLOR;\n        options.radius = DEFAULTS.RADIUS;\n        options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n        options.pos = options.pos;\n\n        super(options);\n    }\n\n    collideWith(otherObject) {\n        // debugger;\n            if(otherObject instanceof Ship ) {\n                otherObject.relocate();\n                this.game.remove(this);\n            }\n    }\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/MovingObject/asteroid.js?");

/***/ }),

/***/ "./src/MovingObject/moving_object.js":
/*!*******************************************!*\
  !*** ./src/MovingObject/moving_object.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ../utils/util */ \"./src/utils/util.js\");\n// const Asteroid = require('./asteroid');\n\nclass MovingObject {\n    constructor(options) {\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n        this.game = options.game;\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        );\n        ctx.fill();\n    }\n\n    collideWith(otherObject) {\n\n    }\n\n    isCollidedWith(otherObject){\n        return Util.dist(this,otherObject) < this.radius + otherObject.radius\n        \n    }\n    move() {\n        const x = this.pos[0] + this.vel[0];\n        const y = this.pos[1] + this.vel[1];\n        this.pos = this.game.wrap([x,y]);\n    }\n\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/MovingObject/moving_object.js?");

/***/ }),

/***/ "./src/MovingObject/ship.js":
/*!**********************************!*\
  !*** ./src/MovingObject/ship.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/MovingObject/moving_object.js\");\n\n\nconst DEFAULTS = {\n    RADIUS: 20,\n    COLOR: \"#f3b44d\",\n}\n\nclass Ship extends MovingObject {\n    constructor(options) {\n        options.radius = DEFAULTS.RADIUS;\n        options.color = DEFAULTS.COLOR;\n        options.vel = [0,0];\n\n        super(options)\n        // debugger;\n    }\n\n    power(impulse) {\n        this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]]\n    }\n\n    relocate() {\n        \n        this.pos = this.game.randomPosition();\n        this.vel=[0,0];\n    }\n\n}\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/MovingObject/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('webpacking')\nconst MovingObject = __webpack_require__(/*! ./MovingObject/moving_object */ \"./src/MovingObject/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./MovingObject/asteroid */ \"./src/MovingObject/asteroid.js\")\nconst Game = __webpack_require__(/*! ./Game/game */ \"./src/Game/game.js\");\nconst GameView = __webpack_require__(/*! ./Game/game_view */ \"./src/Game/game_view.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', ()=> {\n    const canvas = document.getElementById('game-canvas');\n    const context = canvas.getContext('2d');\n    \n    window.canvas = canvas;\n    window.context = context;\n    \n    const game = new Game();\n    const gv = new GameView(game, context);\n    gv.start();\n\n    window.MovingObject = MovingObject;\n    window.mo = new MovingObject(\n        { pos: [30, 30], vel: [10, 10], radius: 5, color: \"#00FF00\" }\n    );\n\n    window.ast = new Asteroid({ pos: [30, 30] });\n    \n    \n\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    wrap(coord, max) {\n        if (coord < 0) {\n            return max - (coord % max);\n        } \n        else if (coord > max) {\n            return coord % max;\n        }\n        else {\n            return coord;\n        }\n    },\n    dist(objA, objB) {\n        return Math.sqrt(\n            Math.pow(objA.pos[0] - objB.pos[0], 2) + Math.pow(objA.pos[1] - objB.pos[1], 2)\n        );\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils/util.js?");

/***/ })

/******/ });