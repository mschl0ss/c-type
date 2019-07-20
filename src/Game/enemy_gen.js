const Bug = require('../MovingObject/Enemy/bug');
const VoidPuff = require('../MovingObject/Enemy/void_puff')

const DIM_X = 1400;
const DIM_Y = 700;
const enemyTypes = {
    bugs : {
        type: 'bug',
        groupTicks: 0,
        groupInterval: 150,
        groupIntervalRatio: 0.7,
        // groupSize: 0,
        groupSize: Math.floor(Math.random() *3) + 3,
        group: [],
        interval: 25,
        intervalTicks: 0,
        spawnY : 0,
        spawnX : DIM_X-11,
        limitY: 50,
        ascending: false,
    },
    voidPuff : {
        type: 'voidPuff',
        groupTicks: 0,
        groupInterval: 0,
        groupIntervalRatio: 100,
        groupSize: 1,
        group: [],
        interval: 0,
        intervalTicks: 0,
        spawnY : 0,
        fixedY: [400],
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
        let result = Math.floor(Math.random() * (DIM_Y));

        while (result < 100 || result > DIM_Y - 100) result = Math.floor(Math.random() * (DIM_Y));
        return result; 
    }
    populateGroups() {

        Object.values(this.enemyTypes).forEach(eT => {
            eT.groupTicks += 1;
           
            if( eT.groupTicks >= eT.groupInterval) {
                    eT.spawnY = this.randomEnemY();
                for(let i=0; i < eT.groupSize; i++) {
                    switch(eT.type) {
                        case 'bug':
                            eT.group.push(new Bug({ game: this.game, pos: [eT.spawnX, eT.spawnY] }))
                            break;
                        case 'voidPuff':
                            eT.group.push(new VoidPuff({ game: this.game, pos: [eT.spawnX, eT.fixedY[i]]}))
                            break;
                        default:
                            console.log(`enemy_gen.js: didnt recognize ${eT.type}`)
                    }
                    
                }
                // debugger;
                eT.groupTicks = 0;
                eT.groupInterval = (500 + Math.floor(Math.random() * 50)) * eT.groupIntervalRatio;
                // eT.groupSize = Math.floor(Math.random() * 3) + 4;
                
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