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

/***/ "./src/Game/Sprites/enemy_sprites.js":
/*!*******************************************!*\
  !*** ./src/Game/Sprites/enemy_sprites.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const imgBrownBug0 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_00.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_00.png\")\nconst imgBrownBug1 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_01.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_01.png\")\nconst imgBrownBug2 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_02.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_02.png\")\nconst imgBrownBug3 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_03.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_03.png\")\nconst imgBrownBug4 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_04.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_04.png\")\nconst imgBrownBug5 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_05.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_05.png\")\nconst imgBrownBug6 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_06.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_06.png\")\nconst imgBrownBug7 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_07.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_07.png\")\nconst imgBrownBug8 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_08.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_08.png\")\nconst imgBrownBug9 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_09.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_09.png\")\nconst imgBrownBug10 = __webpack_require__(/*! ../../assets/sprites/enemies/brown_bug/skeleton-animation_10.png */ \"./src/assets/sprites/enemies/brown_bug/skeleton-animation_10.png\")\nconst imgVoidPuff0 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_00.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_00.png\")\nconst imgVoidPuff1 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_01.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_01.png\")\nconst imgVoidPuff2 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_02.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_02.png\")\nconst imgVoidPuff3 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_03.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_03.png\")\nconst imgVoidPuff4 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_04.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_04.png\")\nconst imgVoidPuff5 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_05.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_05.png\")\nconst imgVoidPuff6 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_06.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_06.png\")\nconst imgVoidPuff7 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_07.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_07.png\")\nconst imgVoidPuff8 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_08.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_08.png\")\nconst imgVoidPuff9 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_09.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_09.png\")\nconst imgVoidPuff10 = __webpack_require__(/*! ../../assets/sprites/enemies/void_puff/skeleton-animation_10.png */ \"./src/assets/sprites/enemies/void_puff/skeleton-animation_10.png\")\n\n// -------Preload images\n\n//------Enemies\n// brownbug\nconst brownBug0 = new Image();\nbrownBug0.src = imgBrownBug0;\nconst brownBug1 = new Image();\nbrownBug1.src = imgBrownBug1;\nconst brownBug2 = new Image();\nbrownBug2.src = imgBrownBug2;\nconst brownBug3 = new Image();\nbrownBug3.src = imgBrownBug3;\nconst brownBug4 = new Image();\nbrownBug4.src = imgBrownBug4;\nconst brownBug5 = new Image();\nbrownBug5.src = imgBrownBug5;\nconst brownBug6 = new Image();\nbrownBug6.src = imgBrownBug6;\nconst brownBug7 = new Image();\nbrownBug7.src = imgBrownBug7;\nconst brownBug8 = new Image();\nbrownBug8.src = imgBrownBug8;\nconst brownBug9 = new Image();\nbrownBug9.src = imgBrownBug9;\nconst brownBug10 = new Image();\nbrownBug10.src = imgBrownBug10;\n// voidpuff\nconst voidPuff0 = new Image();\nvoidPuff0.src = imgVoidPuff0;\nconst voidPuff1 = new Image();\nvoidPuff1.src = imgVoidPuff1;\nconst voidPuff2 = new Image();\nvoidPuff2.src = imgVoidPuff2;\nconst voidPuff3 = new Image();\nvoidPuff3.src = imgVoidPuff3;\nconst voidPuff4 = new Image();\nvoidPuff4.src = imgVoidPuff4;\nconst voidPuff5 = new Image();\nvoidPuff5.src = imgVoidPuff5;\nconst voidPuff6 = new Image();\nvoidPuff6.src = imgVoidPuff6;\nconst voidPuff7 = new Image();\nvoidPuff7.src = imgVoidPuff7;\nconst voidPuff8 = new Image();\nvoidPuff8.src = imgVoidPuff8;\nconst voidPuff9 = new Image();\nvoidPuff9.src = imgVoidPuff9;\nconst voidPuff10 = new Image();\nvoidPuff10.src = imgVoidPuff10;\n\nconst EnemySprites = {\n\n    brownBug: [brownBug0,brownBug1,brownBug2,brownBug3,brownBug4,brownBug5,brownBug6,brownBug7,brownBug8,brownBug9,brownBug10],\n    voidPuff: [voidPuff0,voidPuff1,voidPuff2,voidPuff3,voidPuff4,voidPuff5,voidPuff6,voidPuff7,voidPuff8,voidPuff9,voidPuff10]\n}\n\nmodule.exports = EnemySprites;\n\n//# sourceURL=webpack:///./src/Game/Sprites/enemy_sprites.js?");

/***/ }),

/***/ "./src/Game/Sprites/projectile_sprites.js":
/*!************************************************!*\
  !*** ./src/Game/Sprites/projectile_sprites.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const imgBS = __webpack_require__(/*! ../../assets/sprites/cat/Shoots and Explodes/Shoots/Normal attacks/Fire-Shoot.png */ \"./src/assets/sprites/cat/Shoots and Explodes/Shoots/Normal attacks/Fire-Shoot.png\")\n\n\n// -------Preload images\n\n//------Basic Shot\nconst basicShot = new Image();\nbasicShot.src = imgBS;\n\nconst ProjectileSprites = {\n    basicShot: [basicShot],\n}\n\nmodule.exports = ProjectileSprites;\n\n//# sourceURL=webpack:///./src/Game/Sprites/projectile_sprites.js?");

/***/ }),

/***/ "./src/Game/Sprites/ship_sprites.js":
/*!******************************************!*\
  !*** ./src/Game/Sprites/ship_sprites.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const imgShipDefault1 = __webpack_require__(/*! ../../assets/sprites/cat/cat_flying/frame-1.png */ \"./src/assets/sprites/cat/cat_flying/frame-1.png\");\nconst imgShipDefault2 = __webpack_require__(/*! ../../assets/sprites/cat/cat_flying/frame-2.png */ \"./src/assets/sprites/cat/cat_flying/frame-2.png\");\nconst imgShipShooting1 = __webpack_require__(/*! ../../assets/sprites/cat/cat_shoot/frame-1.png */ \"./src/assets/sprites/cat/cat_shoot/frame-1.png\");\nconst imgShipShooting2 = __webpack_require__(/*! ../../assets/sprites/cat/cat_shoot/frame-2.png */ \"./src/assets/sprites/cat/cat_shoot/frame-2.png\");\n\n// -------Preload images\n\n//------Ship\n// default\nconst shipDefault1 = new Image();\nshipDefault1.src = imgShipDefault1;\n\nconst shipDefault2 = new Image();\nshipDefault2.src = imgShipDefault2;\n// shooting\nconst shipShooting1 = new Image();\nshipShooting1.src = imgShipShooting1;\nconst shipShooting2 = new Image();\nshipShooting2.src = imgShipShooting2;\n\nconst ShipSprites = {\n\n    default: [shipDefault1, shipDefault2],\n    shooting: [shipShooting1, shipShooting2]\n\n}\n\nmodule.exports = ShipSprites\n\n//# sourceURL=webpack:///./src/Game/Sprites/ship_sprites.js?");

/***/ }),

/***/ "./src/Game/enemy_gen.js":
/*!*******************************!*\
  !*** ./src/Game/enemy_gen.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bug = __webpack_require__(/*! ../MovingObject/Enemy/bug */ \"./src/MovingObject/Enemy/bug.js\");\nconst VoidPuff = __webpack_require__(/*! ../MovingObject/Enemy/void_puff */ \"./src/MovingObject/Enemy/void_puff.js\")\n\nconst DIM_X = 1400;\nconst DIM_Y = 700;\nconst enemyTypes = {\n    bugs : {\n        type: 'bug',\n        groupTicks: 0,\n        groupInterval: 150,\n        groupIntervalRatio: 0.7,\n        // groupSize: 0,\n        groupSize: Math.floor(Math.random() *3) + 3,\n        group: [],\n        interval: 25,\n        intervalTicks: 0,\n        spawnY : 0,\n        spawnX : DIM_X-11,\n        limitY: 50,\n        ascending: false,\n    },\n    voidPuff : {\n        type: 'voidPuff',\n        groupTicks: 0,\n        groupInterval: 0,\n        groupIntervalRatio: 100,\n        groupSize: 1,\n        group: [],\n        interval: 0,\n        intervalTicks: 0,\n        spawnY : 0,\n        fixedY: [400],\n        spawnX : DIM_X-11,\n        limitY: 50,\n        ascending: false,\n    },\n}\n\nclass EnemyGen {\n    constructor(game) {\n        this.game = game;\n        this.enemyTypes = enemyTypes;\n    }\n\n    randomEnemY() {\n        let result = Math.floor(Math.random() * (DIM_Y));\n\n        while (result < 100 || result > DIM_Y - 100) result = Math.floor(Math.random() * (DIM_Y));\n        return result; \n    }\n    populateGroups() {\n\n        Object.values(this.enemyTypes).forEach(eT => {\n            eT.groupTicks += 1;\n           \n            if( eT.groupTicks >= eT.groupInterval) {\n                    eT.spawnY = this.randomEnemY();\n                for(let i=0; i < eT.groupSize; i++) {\n                    switch(eT.type) {\n                        case 'bug':\n                            eT.group.push(new Bug({ game: this.game, pos: [eT.spawnX, eT.spawnY] }))\n                            break;\n                        case 'voidPuff':\n                            eT.group.push(new VoidPuff({ game: this.game, pos: [eT.spawnX, eT.fixedY[i]]}))\n                            break;\n                        default:\n                            console.log(`enemy_gen.js: didnt recognize ${eT.type}`)\n                    }\n                    \n                }\n                // debugger;\n                eT.groupTicks = 0;\n                eT.groupInterval = (500 + Math.floor(Math.random() * 50)) * eT.groupIntervalRatio;\n                // eT.groupSize = Math.floor(Math.random() * 3) + 4;\n                \n            }\n        })\n        \n        \n    }\n\n    add() {\n\n        Object.values(this.enemyTypes).forEach(eT => {\n            if(eT.group.length > 0){\n                // debugger;\n                if(eT.intervalTicks >= eT.interval) {\n                    this.game.add(eT.group.shift())\n                    eT.intervalTicks = 0;\n                }\n            eT.intervalTicks += 1;\n            }\n\n        })\n\n        \n    }\n\n    scheduler() {\n        this.populateGroups();\n        this.add();\n    }\n\n}\n\nmodule.exports = EnemyGen;\n\n//# sourceURL=webpack:///./src/Game/enemy_gen.js?");

/***/ }),

/***/ "./src/Game/game.js":
/*!**************************!*\
  !*** ./src/Game/game.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ../Util/util */ \"./src/Util/util.js\");\nconst EnemyGen = __webpack_require__(/*! ./enemy_gen */ \"./src/Game/enemy_gen.js\")\nconst Ship = __webpack_require__(/*! ../MovingObject/Ship/ship */ \"./src/MovingObject/Ship/ship.js\");\nconst Projectile = __webpack_require__(/*! ../MovingObject/Projectile/projectile */ \"./src/MovingObject/Projectile/projectile.js\");\nconst Star = __webpack_require__(/*! ../MovingObject/Background/star */ \"./src/MovingObject/Background/star.js\");\nconst Enemy = __webpack_require__(/*! ../MovingObject/Enemy/enemy */ \"./src/MovingObject/Enemy/enemy.js\");\n\n\nclass Game {\n    constructor() {\n        this.enemyGen = new EnemyGen(this)\n        this.stars = [];\n        this.playerProjectiles = [];\n        this.enemies = [];\n        this.addStars();\n        \n        this.ship = new Ship({ game: this, pos: [250, 350], vel: [0, 0] })\n        this.spawnShip();\n\n \n    }\n\n    spawnShip() {\n        this.ship = new Ship({ game: this, pos: [250, 350], vel: [0, 0] })\n        this.renderShip = true;\n    }\n\n    add(obj) {\n        if (obj instanceof Star) {\n            this.stars.push(obj);\n        }\n        else if (obj instanceof Projectile) {\n            this.playerProjectiles.push(obj)\n        }\n        else if (obj instanceof Enemy) {\n            this.enemies.push(obj)\n        }\n        else {\n            \n            console.log(`Game.prototype.add : can't handle ${obj}`)\n        }\n    }\n\n    allObjects() {\n        return [this.ship].concat(this.playerProjectiles,this.enemies);\n    }\n\n    addStars() {\n        for(let i=0; i < Game.NUM_STARS; i++) {\n            this.add( new Star( {game: this, pos: [this.randomX(), this.randomY()]}))\n        }\n    }\n\n    checkCollisions() {\n        const objs = this.allObjects();\n        for (let i = 0; i < objs.length; i++) {\n            for (let j = 0; j < objs.length; j++) {\n                if (objs[i].isCollidedWith(objs[j]) && i !== j) {\n                    objs[i].collideWith(objs[j])\n                }\n            }\n        }\n    }\n\n    draw(ctx) {\n        \n        //draw black background\n        ctx.fillStyle = \"#030919\";\n        // ctx.fillStyle = \"#081234\";\n        ctx.fillRect(0,0, Game.DIM_X, Game.DIM_Y)\n\n        //draw stars\n        this.stars.forEach(star => {star.draw(ctx)})\n\n        //draw the ship\n        if(this.renderShip) this.ship.draw(ctx);\n\n        //draw player shots\n        this.playerProjectiles.forEach(p => p.draw(ctx));\n\n        //draw enemies\n        this.enemies.forEach(enemy => {enemy.draw(ctx)})\n    }\n    isOutOfBounds(pos) {\n        //if the pos coords are off the map return [true, \"side of the map they're off\"]\n        //*mitigated by the offset, which smooths out interactions with the border\n        const offsetY = 9;\n        const offsetX = 0;\n        if (pos[0] > Game.DIM_X-offsetX) return [true, \"right\"]\n        else if (pos[0] < offsetX) return [true, \"left\"]\n        else if (pos[1] < offsetY) return [true, \"top\"]\n        else if (pos[1] > Game.DIM_Y-offsetY-9) return [true, \"bottom\"]\n        else return [false, \"inbounds\"]\n    }\n    moveObjects(timeDelta) {\n        this.stars.forEach(star => star.move(timeDelta));\n        this.ship.move(timeDelta);\n        this.playerProjectiles.forEach(p => p.move(timeDelta));\n        this.enemies.forEach(enemy => { enemy.move(timeDelta) })\n    }\n    randomY() {\n        return Math.floor(Math.random() * Game.DIM_Y);\n    }\n    randomX() {\n        return Math.floor(Math.random() * Game.DIM_X);\n    }\n    remove(obj) {\n        if (obj instanceof Ship) {\n            this.renderShip = false;\n        }\n        if (obj instanceof Star) {\n            this.stars.splice(this.stars.indexOf(obj),1);\n        }\n        if (obj instanceof Projectile) {\n            this.playerProjectiles.splice(this.playerProjectiles.indexOf(obj),1);\n        }\n        if (obj instanceof Enemy) {\n            this.enemies.splice(this.enemies.indexOf(obj),1);\n        }\n    }\n    step(timeDelta, time) {\n        this.moveObjects(timeDelta);\n        this.enemyGen.scheduler();\n        this.checkCollisions();\n    }\n    wrap(pos) {\n        return [Game.DIM_X - (pos[0] % Game.DIM_X), this.randomY()]\n    }\n}\n\n\nGame.NUM_STARS = 1000;\nGame.NUM_MOONS = 1;\n\nGame.NUM_BUGS = 5;\nGame.DIM_X = 1400;\nGame.DIM_Y = 700;\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/Game/game.js?");

/***/ }),

/***/ "./src/Game/game_view.js":
/*!*******************************!*\
  !*** ./src/Game/game_view.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass GameView {\n    constructor(ctx, game) {\n        this.ctx = ctx;\n        this.game = game;\n        this.imgWidth = 0;\n        this.scrollSpeed = 10;\n        this.keysPressed = {d: false, a: false, w: false, s: false, \" \": false};\n    }\n\n    bindKeyEventHandlers() {\n\n\n        key(\"p\", e=>{const g = this.game;debugger})\n\n        document.body.onkeydown = document.body.onkeyup = e=>{\n            \n            this.keysPressed[e.key] = e.type == 'keydown';\n        }\n\n        key(\"r\", ()=> {\n            if(this.game.renderShip === false) this.game.spawnShip();\n        })\n\n    }\n\n    processEvents(time) {\n        let newX = this.game.ship.vel[0];\n        let newY = this.game.ship.vel[1];\n\n        if (this.keysPressed[\"w\"]) {\n            if(newY > -ms) newY--;\n        }\n        if (this.keysPressed[\"s\"]) {\n            if(newY < ms) newY++;\n        }\n        if (this.keysPressed[\"d\"]) {\n            if(newX < ms) newX++;\n        }\n        if (this.keysPressed[\"a\"]) {\n            if(newX > -ms) newX--;\n        }\n        if(this.keysPressed[\" \"]) {this.game.ship.fireProjectile(time)}\n        \n        newX *= friction;\n        newY *= friction;\n        this.game.ship.power([newX,newY], time)\n    \n    }\n\n    start() {\n        this.bindKeyEventHandlers();\n        this.lastTime = 0;\n        requestAnimationFrame(this.animate.bind(this));\n        \n    }\n\n    animate(time) {\n\n        const timeDelta = time - this.lastTime;\n\n        this.processEvents(time);\n\n        this.game.step(timeDelta, time);\n\n        this.game.draw(this.ctx);\n\n        this.lastTime = time;\n\n        requestAnimationFrame(this.animate.bind(this));\n    }\n}\n\nconst friction = 0.98;\nconst ms = 7;\nGameView.MOVES = {\n    w: [0, -ms],\n    a: [-ms, 0],\n    s: [0, ms],\n    d: [ms, 0],\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/Game/game_view.js?");

/***/ }),

/***/ "./src/MovingObject/Background/star.js":
/*!*********************************************!*\
  !*** ./src/MovingObject/Background/star.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ../moving_object */ \"./src/MovingObject/moving_object.js\");\nconst Util = __webpack_require__(/*! ../../Util/util */ \"./src/Util/util.js\");\n\n\nconst DEFAULTS = {\n    COLORS: [\"#5746b5\", \"#5746b5\", \"#5746b5\",\"#d3d3d3\"],\n    RADII: [1,2],\n    SPEEDS: [4,5,6,8]\n}\nconst generateVel = () => {\n    const result = Util.randomVec(DEFAULTS.SPEEDS[Math.floor(Math.random() * 4)]);\n    const x = Math.abs(result[0]) * -1;\n    return [x, 0];\n}\n\nclass Star extends MovingObject {\n    constructor(options={}) {\n        options.color = DEFAULTS.COLORS[Math.floor(Math.random() * 4)];\n        options.pos = options.pos;\n        options.vel = generateVel();\n        options.isWrappable = true;\n        super(options);\n\n        this.radius = DEFAULTS.RADII[Math.floor(Math.random() * 2)];\n    }\n\n\n    draw(ctx) {\n        // debugger;\n        ctx.globalAlpha = 0.7\n        ctx.fillStyle = this.color;\n        \n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        );\n        ctx.fill();\n        ctx.globalAlpha = 1\n    }\n\n    \n    \n\n\n}\n\nmodule.exports = Star;\n\n//# sourceURL=webpack:///./src/MovingObject/Background/star.js?");

/***/ }),

/***/ "./src/MovingObject/Enemy/bug.js":
/*!***************************************!*\
  !*** ./src/MovingObject/Enemy/bug.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Enemy = __webpack_require__(/*! ./enemy */ \"./src/MovingObject/Enemy/enemy.js\");\n\nconst EnemySprites = __webpack_require__(/*! ../../Game/Sprites/enemy_sprites */ \"./src/Game/Sprites/enemy_sprites.js\")\n\nconst COLOR = \"#ad1113\";\nconst RADII = [55,60,65]\n// const RADII = [10,12]\n\nclass Bug extends Enemy {\n    constructor(options) {\n        options.color = COLOR;\n        options.vel = [-4,0];\n        options.shape = \"circle\";\n        options.ticksPerFrame = 2;\n        options.healthPoints = 1;\n        options.currentSpriteImages = EnemySprites.brownBug;\n        super(options);\n\n        this.ascending = true;\n        this.radius = RADII[Math.floor(Math.random() *3)];\n        this.width = this.radius;\n        this.height = this.radius;\n\n    }\n\n}\n\n\nmodule.exports = Bug;\n\n// for a given starting point y\n// the bugs fluctuate up and down but not uniformly\n// so yCap = [10,15,20]\n// if \n\n//# sourceURL=webpack:///./src/MovingObject/Enemy/bug.js?");

/***/ }),

/***/ "./src/MovingObject/Enemy/enemy.js":
/*!*****************************************!*\
  !*** ./src/MovingObject/Enemy/enemy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ../moving_object */ \"./src/MovingObject/moving_object.js\");\nconst Projectile = __webpack_require__(/*! ../Projectile/projectile */ \"./src/MovingObject/Projectile/projectile.js\");\nconst BasicShot = __webpack_require__(/*! ../Projectile/basic_shot */ \"./src/MovingObject/Projectile/basic_shot.js\");\nconst Ship = __webpack_require__(/*! ../Ship/ship */ \"./src/MovingObject/Ship/ship.js\");\n\nclass Enemy extends MovingObject {\n    constructor(options) {\n\n        super(options);\n        this.healthPoints = options.healthPoints;\n \n    }\n\n    collideWith(otherObject) {\n        // debugger;\n        if (otherObject instanceof Projectile) {\n            if (otherObject instanceof BasicShot) {\n                this.game.remove(otherObject);\n                this.healthPoints -= 1;\n                if (this.healthPoints <= 0) this.game.remove(this);\n            }\n        }\n        else if (otherObject instanceof Ship) {\n            const [x, y] = this.pos;\n            debugger;\n        }\n    }\n\n\n}\n\nmodule.exports = Enemy;\n\n//# sourceURL=webpack:///./src/MovingObject/Enemy/enemy.js?");

/***/ }),

/***/ "./src/MovingObject/Enemy/void_puff.js":
/*!*********************************************!*\
  !*** ./src/MovingObject/Enemy/void_puff.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Enemy = __webpack_require__(/*! ./enemy */ \"./src/MovingObject/Enemy/enemy.js\");\n\nconst EnemySprites = __webpack_require__(/*! ../../Game/Sprites/enemy_sprites */ \"./src/Game/Sprites/enemy_sprites.js\")\n\n\n// const RADII = [300];\n\nclass VoidPuff extends Enemy {\n    constructor(options) {\n        options.vel = [-1, 0];\n        options.shape = \"rectangle\";\n        options.ticksPerFrame = 2;\n        options.healthPoints = 20;\n        options.currentSpriteImages = EnemySprites.voidPuff;\n        super(options);\n\n        this.limitX = 700;\n        // this.radius = RADII[Math.floor(Math.random() * 1)];\n        this.width = 450;\n        this.height = 200;\n    }\n\n    // move(timeDelta) {\n    //     const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;\n\n    //     const x = this.pos[0] + (this.vel[0] * velocityScale);\n    //     const y = this.pos[1] + (this.vel[1] * velocityScale);\n    //     this.pos = [x, y];\n\n    //     if (this.game.isOutOfBounds(this.pos)[0] === true) {this.game.remove(this) }\n        \n    // }\n\n    shouldDodge () {\n        let result = false;\n        this.game.playerProjectiles.each(pp => {\n            if(Math.abs(pp.pos[x] - this.pos[x]) < 100 \n                && Math.abs(pp.pos[y] - this.pos) < 100) {\n                    result = true;\n                    console.log('voidpuff should dodge')\n                }\n        })\n        return result;\n\n    }\n}\n\nmodule.exports = VoidPuff;\n\n//# sourceURL=webpack:///./src/MovingObject/Enemy/void_puff.js?");

/***/ }),

/***/ "./src/MovingObject/Projectile/basic_shot.js":
/*!***************************************************!*\
  !*** ./src/MovingObject/Projectile/basic_shot.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Projectile = __webpack_require__(/*! ./projectile */ \"./src/MovingObject/Projectile/projectile.js\")\nconst ProjectileSprites = __webpack_require__(/*! ../../Game/Sprites/projectile_sprites */ \"./src/Game/Sprites/projectile_sprites.js\")\n\nclass BasicShot extends Projectile {\n    constructor(options) {\n       \n        options.color = \"#64ccef\";\n        options.shape = \"rectangle\";\n        options.frameIndex = 0;\n        options.tickCount = 0;\n        options.ticksPerFrame = 2;\n        super(options)\n\n        // this.radius = 35;\n        this.speed = 1;\n\n        this.width = 50;\n        this.height = 35;\n        this.currentSpriteImages = ProjectileSprites.basicShot\n    }\n\n    draw(ctx) {\n        ctx.drawImage(this.currentSpriteImages[this.frameIndex],\n            this.pos[0],\n            this.pos[1],\n            this.width,\n            this.height,\n        )\n\n        this.animateSprite();\n    }\n\n    animateSprite() {\n        this.tickCount += 1;\n\n        if (this.tickCount > this.ticksPerFrame) {\n            this.tickCount = 0;\n\n            if (this.frameIndex >= this.currentSpriteImages.length - 1) {\n\n                this.frameIndex = 0;\n            }\n            else { this.frameIndex += 1; }\n        }\n    }\n\n    // draw(ctx) {\n    //     ctx.fillStyle = this.color;\n    //     ctx.strokeStyle = \"#EF8500\";\n    //     ctx.lineWidth = 1;\n    //     ctx.rect(this.pos[0], this.pos[1], this.width, this.height);\n    //     ctx.fill(); ctx.stroke();\n    // }\n}\n\nBasicShot.reloadTime = 150;\n\nmodule.exports = BasicShot;\n\n//# sourceURL=webpack:///./src/MovingObject/Projectile/basic_shot.js?");

/***/ }),

/***/ "./src/MovingObject/Projectile/projectile.js":
/*!***************************************************!*\
  !*** ./src/MovingObject/Projectile/projectile.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ../moving_object */ \"./src/MovingObject/moving_object.js\");\n\nclass Projectile extends MovingObject { \n    constructor(options) {\n        super(options)\n        this.owner = options.owner;\n\n    }\n\n}\n\nmodule.exports = Projectile;\n\n//# sourceURL=webpack:///./src/MovingObject/Projectile/projectile.js?");

/***/ }),

/***/ "./src/MovingObject/Ship/ship.js":
/*!***************************************!*\
  !*** ./src/MovingObject/Ship/ship.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ../moving_object */ \"./src/MovingObject/moving_object.js\");\nconst BasicShot = __webpack_require__(/*! ../Projectile/basic_shot */ \"./src/MovingObject/Projectile/basic_shot.js\");\nconst Util = __webpack_require__(/*! ../../Util/util */ \"./src/Util/util.js\");\n\nconst ShipSprites = __webpack_require__(/*! ../../Game/Sprites/ship_sprites */ \"./src/Game/Sprites/ship_sprites.js\")\n\n\nconst basicShotSpeeds = [15,16]\nclass Ship extends MovingObject {\n    constructor(options) {\n        options.color = \"#545454\";\n        options.pos = options.pos\n        options.vel = options.vel\n        options.isBounded = true;\n        options.type = \"playerShip\";\n        options.frameIndex = 0;\n        options.tickCount = 0;\n        options.ticksPerFrame = 2;\n        options.shape = \"rectangle\"\n        \n        super(options);\n        \n        this.projectileType = \"BasicShot\";\n        this.lastShotTime = 0;\n        this.lastPowerTime = 0;\n        this.reloadTime = BasicShot.reloadTime;\n        this.width = 80;\n        this.height = 50;\n        this.currentSpriteImages = ShipSprites.default;\n\n\n    }\n    \n\n    //necessary because ship has many different sprites, and it needs to\n    //reset to default after for example shooting animation is done;\n    animateSprite() {\n        this.tickCount += 1;\n\n        if (this.tickCount > this.ticksPerFrame) {\n            this.tickCount = 0;\n\n            if (this.frameIndex >= this.currentSpriteImages.length - 1) {\n\n                this.frameIndex = 0;\n                this.currentSpriteImages = ShipSprites.default;\n            }\n            else { this.frameIndex += 1; }\n        }\n    }\n   \n    power(impulse) {this.vel = impulse;}\n\n    fireProjectile(time) {\n        this.currentSpriteImages = ShipSprites.shooting\n        const timeDelta = time - this.lastShotTime;\n        if(this.game.renderShip === false) {return console.log('cant fire youre dead bruh')}\n        else if(timeDelta > this.reloadTime ) {\n            const projectile = new BasicShot ({\n                pos: [this.pos[0] + (this.width*0.75), this.pos[1] + (this.height*0.4)],\n                vel: [basicShotSpeeds[Math.floor(Math.random() *2)],0],\n                game: this.game,\n                owner: \"playerShip\"\n            })\n\n            this.game.add(projectile);\n            this.lastShotTime = time;\n            }\n    }\n\n\n}\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/MovingObject/Ship/ship.js?");

/***/ }),

/***/ "./src/MovingObject/moving_object.js":
/*!*******************************************!*\
  !*** ./src/MovingObject/moving_object.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ../Util/util */ \"./src/Util/util.js\");\n\nclass MovingObject {\n    constructor(options) {\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.game = options.game;\n        this.color = options.color;\n        this.shape = options.shape || \"circle\";\n        this.type = options.type || \" \";\n        this.frameIndex = 0;\n        this.tickCount = 0;\n        this.ticksPerFrame = options.ticksPerFrame\n        this.currentSpriteImages = options.currentSpriteImages;\n        this.isWrappable = options.isWrappable || false;\n        this.isBounded = options.isBounded || false;\n        this.healthPoints = options.healthPoints || 1;\n    }\n\n    draw(ctx) {\n        // debugger;\n        let pos = this.pos.concat([]);\n        if(this.shape===\"circle\") {\n            pos[0] = this.pos[0] - this.radius/2;\n            pos[1] = this.pos[1] - this.radius/2;\n        }\n        ctx.drawImage(this.currentSpriteImages[this.frameIndex],\n            pos[0],\n            pos[1],\n            this.width,\n            this.height,\n        )\n        this.animateSprite();\n\n        ctx.strokeStyle = \"white\";\n        \n        this.drawRenderBox(ctx)\n        this.drawHitBox(ctx,0.6)\n        \n       \n    }\n\n    drawRenderBox(ctx) {\n        ctx.strokeStyle = \"white\";\n        if (this.shape === \"rectangle\") {\n            ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height)\n        }\n        else if(this.shape===\"circle\"){\n            ctx.beginPath();\n            ctx.arc(\n                this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n            );\n            ctx.stroke();\n        }\n    }\n    drawHitBox(ctx,ratio) {\n        ctx.strokeStyle = \"green\";\n        if(this.shape === \"rectangle\") {\n            const hB = this.squareHitBox(this,ratio)\n            ctx.strokeRect(hB.pos[0], hB.pos[1], hB.width, hB.height)\n            ctx.strokeStyle = \"green\";\n        }\n        else if(this.shape === \"circle\") {\n            ctx.beginPath();\n            ctx.arc(\n                this.pos[0], this.pos[1], this.radius*ratio, 0, 2 * Math.PI, true\n            );\n            ctx.stroke();\n        }\n    }\n\n    animateSprite() {\n        this.tickCount += 1;\n\n        if (this.tickCount > this.ticksPerFrame) {\n            this.tickCount = 0;\n\n            if (this.frameIndex >= this.currentSpriteImages.length - 1) {\n\n                this.frameIndex = 0;\n            }\n            else { this.frameIndex += 1; }\n        }\n    }\n    move(timeDelta) {\n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;\n \n        const x = this.pos[0] + (this.vel[0] * velocityScale);\n        const y = this.pos[1] + (this.vel[1] * velocityScale);\n        this.pos = [x, y];\n\n        // isOutOfBounds returns a 2 item array\n        // [0] === true/false\n        // [1] === bad pos aka \"top\", \"right\", etc;\n        if (this.game.isOutOfBounds(this.pos)[0]===true) { \n            if(this.isWrappable === true) this.pos = this.game.wrap([x, y]) ;\n            else if(this.isBounded === true) {\n                this.vel = [0,0];\n                switch (this.game.isOutOfBounds(this.pos)[1]) {\n                    case \"right\":\n                        this.pos = [DIM_X-this.width, this.pos[1]];\n                        break;\n                    case \"left\":\n                        this.pos = [10, this.pos[1]];\n                        break;\n                    case \"top\":\n                        this.pos = [this.pos[0], 10];\n                        break;\n                    case \"bottom\":\n                        this.pos = [this.pos[0], DIM_Y - 20];\n                        break;\n                    default:\n                        console.log('Reached default case in MovingObject.prototype.move')\n                }\n            }\n            else if (this.owner = \"playerShip\") {\n                if(this.game.isOutOfBounds(this.pos)[1] != \"bottom\") this.game.remove(this)\n            }\n            else {this.game.remove(this)}\n        }\n    }\n\n  \n\n    collideWith(otherObject) {\n\n    }\n\n    squareHitBox(obj,ratio) {\n        //original width vs new width;\n        // ratio is .\n        //<--------> 10\n        //<----> .6\n        //needs to be shifted over by  ((1 - .4) * width) / 2\n        \n        const width = obj.width * ratio;\n        const height = obj.height * ratio;\n\n        const x = obj.pos[0] + (((1-ratio) * obj.width)/2)\n        // const x = obj.pos[0] + (((1-ratio) * width))*0.5\n        const y = obj.pos[1] + ((1-ratio) * obj.height)/2\n        // debugger;\n        const hitbox = {pos: [x,y], width, height}\n\n        return hitbox;\n\n    }\n\n    isCollidedWith(otherObject) {\n        //ratios the hitbox\n        const ratio = 0.6\n        if(this === otherObject) return false;\n        // debugger;\n        if(this.type === otherObject.owner ||\n            this.owner === otherObject.type) return false;\n\n        if(this.shape === \"circle\" && otherObject.shape === \"circle\") {\n            return Util.dist(this.pos, otherObject.pos) < this.radius*ratio + otherObject.radius*ratio\n        }\n        else if (this.shape === 'rectangle' && otherObject.shape === 'rectangle') {\n                const thisHb = this.squareHitBox(this,ratio);\n                const otherHb = this.squareHitBox(otherObject,ratio);\n            if (thisHb.pos[0] < otherHb.pos[0] + otherHb.width &&\n                thisHb.pos[0] + thisHb.width > otherHb.pos[0] &&\n                thisHb.pos[1] < otherHb.pos[1] + otherHb.height &&\n                thisHb.pos[1] + thisHb.height > otherHb.pos[1]) {\n                // collision detected!\n                this.deductHealth(this);\n                this.deductHealth(otherObject);\n            }\n        }\n        else {\n            if(this.game.enemies.includes(this) && this.game.enemies.includes(otherObject)) {return false;}\n            let circle,rect;\n            if (this.shape === \"circle\") {\n                circle = this;\n                rect = otherObject;\n            }\n            else {\n                circle = otherObject;\n                rect = this;\n            }\n            \n            const c = {\n                pos: circle.pos,\n                x: circle.pos[0],\n                y: circle.pos[1],\n                radius: circle.radius * ratio,\n            }\n            const r = {\n                pos: rect.pos,\n                leftX: rect.pos[0],\n                rightX: rect.pos[0] + rect.width,\n                topY: rect.pos[1],\n                bottomY: rect.pos[1] + rect.height,\n            }\n\n            if( c.y + c.radius > r.topY) {\n                if(c.y - c.radius < r.bottomY) {\n                    if(c.x + c.radius > r.leftX) {\n                        if(c.x - c.radius < r.rightX) {\n                            if (rect.type === \"playerShip\" && this.game.renderShip === false) {\n                                // console.log('dead ship cant hit')\n                                return false;\n                            }\n                            // else if (rect.type === circle.owner) return false;\n                            else {\n                                // this.game.remove(this)\n                                // this.game.remove(otherObject)\n                                // debugger;\n                                this.deductHealth(this)\n                                // this.deductHealth(otherObject)\n                            }\n\n                        }\n                    }\n                }\n            }\n\n        }\n    }\n    deductHealth(obj) {\n        obj.healthPoints -= 1;\n        if (obj.healthPoints <= 0) { obj.game.remove(obj) }\n    }\n}\n\n// const NORMAL_FRAME_TIME_DELTA = 15;\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nconst DIM_X = 1400;\nconst DIM_Y = 700;\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/MovingObject/moving_object.js?");

/***/ }),

/***/ "./src/Util/util.js":
/*!**************************!*\
  !*** ./src/Util/util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    // Normalize the length of the vector to 1, maintaining direction.\n    dir(vec) {\n        const norm = Util.norm(vec);\n        return Util.scale(vec, 1 / norm);\n    },\n    // Find distance between two points.\n    dist(pos1, pos2) {\n        return Math.sqrt(\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n        );\n    },\n    // Find the length of the vector.\n    // norm of velocity = speed\n    norm(vec) {\n        return Util.dist([0, 0], vec);\n    },\n    // Return a randomly oriented vector with the given length.\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n    wrap(coord, max) {\n        if (coord < 0) {\n            return max - (coord % max);\n        } else if (coord > max) {\n            return coord % max;\n        } else {\n            return coord;\n        }\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/Util/util.js?");

/***/ }),

/***/ "./src/assets/sprites/cat/Shoots and Explodes/Shoots/Normal attacks/Fire-Shoot.png":
/*!*****************************************************************************************!*\
  !*** ./src/assets/sprites/cat/Shoots and Explodes/Shoots/Normal attacks/Fire-Shoot.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3f5f4db785fc43fa472cb1965da12059.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/cat/Shoots_and_Explodes/Shoots/Normal_attacks/Fire-Shoot.png?");

/***/ }),

/***/ "./src/assets/sprites/cat/cat_flying/frame-1.png":
/*!*******************************************************!*\
  !*** ./src/assets/sprites/cat/cat_flying/frame-1.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"72ed40bba9d224d675535271083f581d.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/cat/cat_flying/frame-1.png?");

/***/ }),

/***/ "./src/assets/sprites/cat/cat_flying/frame-2.png":
/*!*******************************************************!*\
  !*** ./src/assets/sprites/cat/cat_flying/frame-2.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c62d879327f287495123f3e093e2e24c.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/cat/cat_flying/frame-2.png?");

/***/ }),

/***/ "./src/assets/sprites/cat/cat_shoot/frame-1.png":
/*!******************************************************!*\
  !*** ./src/assets/sprites/cat/cat_shoot/frame-1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e0b7c697be1f56384b82b54ed2e30642.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/cat/cat_shoot/frame-1.png?");

/***/ }),

/***/ "./src/assets/sprites/cat/cat_shoot/frame-2.png":
/*!******************************************************!*\
  !*** ./src/assets/sprites/cat/cat_shoot/frame-2.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"18a67e77fcd50f1ba5e914238384a9d0.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/cat/cat_shoot/frame-2.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_00.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_00.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"16e0a1653d70c7a98c401eda9da026ee.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_00.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_01.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_01.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"344fcad5b628ebd5c85d1aa157e1bd43.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_01.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_02.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_02.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"28d907b818ac0a2651aa9f7f356b685d.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_02.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_03.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_03.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c994677daffc9dcc7a3647945103205d.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_03.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_04.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_04.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4cad96097bf11bca54351add1a467243.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_04.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_05.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_05.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"25a61fecf40076e61cda0e1605aacf73.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_05.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_06.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_06.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4cad96097bf11bca54351add1a467243.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_06.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_07.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_07.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c994677daffc9dcc7a3647945103205d.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_07.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_08.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_08.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"28d907b818ac0a2651aa9f7f356b685d.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_08.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_09.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_09.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"344fcad5b628ebd5c85d1aa157e1bd43.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_09.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/brown_bug/skeleton-animation_10.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/brown_bug/skeleton-animation_10.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"16e0a1653d70c7a98c401eda9da026ee.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/brown_bug/skeleton-animation_10.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_00.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_00.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e4cce656999903715289b009c3c4903c.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_00.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_01.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_01.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e4917444a48229c57e79032bc2ff9ceb.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_01.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_02.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_02.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a675849bd174989aae5284bf26d09f9e.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_02.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_03.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_03.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"44f5c9bffaf25ea80d0d071bc2d1bb36.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_03.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_04.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_04.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"afbb3618f3ba91df47d60a588d9d731b.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_04.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_05.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_05.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"66ac5ee1083abb93899edeb45ad8b6e9.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_05.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_06.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_06.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"afbb3618f3ba91df47d60a588d9d731b.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_06.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_07.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_07.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"44f5c9bffaf25ea80d0d071bc2d1bb36.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_07.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_08.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_08.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a675849bd174989aae5284bf26d09f9e.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_08.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_09.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_09.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e4917444a48229c57e79032bc2ff9ceb.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_09.png?");

/***/ }),

/***/ "./src/assets/sprites/enemies/void_puff/skeleton-animation_10.png":
/*!************************************************************************!*\
  !*** ./src/assets/sprites/enemies/void_puff/skeleton-animation_10.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e4cce656999903715289b009c3c4903c.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/enemies/void_puff/skeleton-animation_10.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('webpacking')\nconst GameView = __webpack_require__(/*! ./Game/game_view */ \"./src/Game/game_view.js\")\nconst Game = __webpack_require__(/*! ./Game/game */ \"./src/Game/game.js\")\n\n\nwindow.addEventListener('DOMContentLoaded', ()=> {\n    const canvas = document.getElementById('game-canvas');\n    const context = canvas.getContext('2d');\n    \n    window.canvas = canvas;\n    window.context = context;\n    \n    const game = new Game();\n    const gv = new GameView(context, game);\n    gv.start();\n\n    \n\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });