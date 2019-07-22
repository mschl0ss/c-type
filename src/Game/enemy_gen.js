const Bug = require('../MovingObject/Enemy/bug');
const VoidPuff = require('../MovingObject/Enemy/void_puff')
const Voidlette = require('../MovingObject/Enemy/voidlette')
const PowerUp = require('../MovingObject/PowerUp/power_up');



const DIM_X = 1400;
const DIM_Y = 700;
const enemyTypes = {
    bugs : {
        type: 'bug',
        groupTicks: 0,
        groupInterval: 200,
        groupOriginalInterval: 200,
        groupIntervalRatio: 0.9,
        groupsSpawned: 0,
        groupSize: 3,
        // groupSize: Math.floor(Math.random() *1) + 3,
        group: [],
        interval: 25,
        intervalTicks: 0,
        spawnY : 0,
        spawnX : DIM_X-11,
        limitY: 50,
    },
    voidPuff : {
        type: 'voidPuff',
        groupTicks: 0,
        groupInterval: 1000,
        groupOriginalInterval: 4000,
        groupIntervalRatio: 0.9,
        groupSize: 2,
        group: [],
        interval: 0,
        intervalTicks: 0,
        spawnY : 0,
        fixedY: [0,475],
        spawnX : DIM_X-11,
        limitY: 50,
    },
}

class EnemyGen {
    constructor(game) {
        this.game = game;
        this.enemyTypes = enemyTypes;
    }

    randomEnemY() {
        let result = Math.floor(Math.random() * (300))+100;

        while ( result < 350 && result > 200) result = Math.floor(Math.random() * (DIM_Y));
        // while (result < 100 || result > DIM_Y - 100) result = Math.floor(Math.random() * (DIM_Y));
        return result; 
    }
    populateGroups() {

        Object.values(this.enemyTypes).forEach(eT => {
            eT.groupTicks += 1;
           
            if( eT.groupTicks >= eT.groupInterval) {
                eT.groupTicks = 0;
                eT.groupInterval = eT.groupOriginalInterval * eT.groupIntervalRatio;
                if (this.game.renderShip === true && this.game.ship.respawnShield === false) {
                    eT.spawnY = this.randomEnemY();
                    for(let i=0;i < eT.groupSize; i++) {
                        switch(eT.type) {
                            case 'bug':
                                const vel = eT.spawnY > DIM_Y/2 ? [-4,-0.5] : [-4,0.5]
                                const b = new Bug({ game: this.game, pos: [eT.spawnX, eT.spawnY], vel: vel });
                                if(i === eT.groupSize-1 && eT.groupsSpawned % 4  === 0) {
                                    b.rewardsPowerUp = true;
                                    b.powerUpPayload = Object.keys(PowerUp.shotTypes)[Math.floor(Math.random() * (Object.keys(PowerUp.shotTypes).length))]
                                    b.powerUpColor = PowerUp.shotTypes[b.powerUpPayload]
                                    
                                }
                                eT.group.push(b)
                                
                                break;
                            case 'voidPuff':
                                eT.group.push(new VoidPuff({ game: this.game, pos: [eT.spawnX, eT.fixedY[i]]}))
                            
                                break;
                            default:
                                console.log(`default case reached in EnemyGen.prototype.populateGroups. didnt recognize ${eT.type}`)
                        }
                    }
                    eT.groupsSpawned += 1;
                    
                }
                
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

    act() {
        this.game.enemies.forEach(enemy => {
            if(enemy.isShooter) {
                
                if(enemy.fireTick >= enemy.fireInterval) {
                    enemy.fireProjectile();
                    enemy.fireTick = 0;
                }
                else enemy.fireTick += 1;
            }
        })
    }

    adjust() {
        // this.game.enemies.forEach(enemy=> {
        //     if(enemy instanceof Voidlette){
        //         if(Math.abs(enemy.pos[1] - this.game.ship.pos[1]) > 100){
        //             if(enemy.pos[1] > this.game.ship.pos[1]) {
        //                 // debugger;
        //                 enemy.vel[1]-=0.05
        //             }
        //             else enemy.vel[1] +=0.05
        //         }
        //         else {
        //             enemy.pos[1] > this.game.ship.pos[1] ?
        //                 enemy.vel[1] = 0.5 : enemy.vel[1] = -0.5
        //         }
        //     }
        // })
    }

    scheduler() {
        this.populateGroups();
        this.add();
        this.adjust();
        this.act();
    }

}

module.exports = EnemyGen;