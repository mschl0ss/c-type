const Bug = require('../MovingObject/Enemy/bug');
const Game = require('./game')

const DIM_X = 1400;
const DIM_Y = 700;
const enemyTypes = {
    bugs : {
        type: 'bug',
        groupTicks: 0,
        groupInterval: 150,
        groupCount: Math.floor(Math.random() *3) + 3,
        group: [],
        interval: 15,
        intervalTicks: 0,
        spawnY : 0,
        spawnX : DIM_X-11,
        limitY: 50,
        ascending: false,
    },
}

class EnemyGen {
    constructor(game) {
        this.game = game;
        this.enemyTypes = enemyTypes;
    }

    randomEnemY() {
        return Math.floor(Math.random() * (DIM_Y));
    }
    populateGroups() {

        Object.values(this.enemyTypes).forEach(eT => {
            console.log(eT.type)
            console.log(eT.groupTicks)
            eT.groupTicks += 1;
           
            if( eT.groupTicks >= eT.groupInterval) {
                    eT.spawnY = this.randomEnemY();
                for(let i=0; i < eT.groupCount; i++) {
                    eT.group.push(new Bug({ game: this.game, pos: [eT.spawnX, eT.spawnY] }))
                }
                // debugger;
                eT.groupTicks = 0;
                eT.groupInterval = 500 + Math.floor(Math.random() * 50);
                eT.groupCount = Math.floor(Math.random() * 3) + 4;
            }
        })
        
        
    }

    add() {

        Object.values(this.enemyTypes).forEach(eT => {
            if(eT.group.length > 0){
                // debugger;
                if(eT.intervalTicks >= eT.interval) {
                    this.game.add(eT.group.shift())
                    eT.intervalTicks = 0;
                }
            eT.intervalTicks += 1;
            }

        })

        
    }

    scheduler() {
        this.populateGroups();
        this.add();
    }

}

module.exports = EnemyGen;