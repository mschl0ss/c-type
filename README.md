# C-TYPE

## Overview

C-Type is a 2d side-scrolling pilot-a-space-cat shooter.  The player controls O.T.I.S, a robotic, domestic house cat capable of traversing the vast expanse of space.

Gameplay is moving in eight directions and navigating obstacles and fighting enemies. Enemies fly in pre-determined patterns that are fairly easy to engage given only one enemy group, but as more spawn concurrently the challenge ramps up.  Defeating groups of enemies grants new and stronger abilities to the player.

The game is specifically inspired by the classic NES game, **[R-Type](https://en.wikipedia.org/wiki/R-Type)**, and more broadly inspired by the golden age of 2d side-scrollers in the early console years.


### Functionality

* User can press the left/right/up/down to move in 8 directions.
* Game scrolls from start of level to end, halting scroll at the end for some kind of final challenge.
* Enemies are generated in groups and follow patterns.
* Contact with an enemy, enemy projectile, or obstacle kills the player.
* Improved weapons include laser shot and spread shot.
* Player can gain 'Shield Orbs' that sit immediately in front of O.T.I.S and absorb a set amount of enemies/projectiles.
* Player can gain 'Force' orbs, which float in space close to the player.  One or more fire projectile when the player does, and intercept enemies and projectiles.

### Architecture & Technologies

* Vanilla JS for game logic
* Vanilla JS & HTML5 Canvas for rendering
* Webpack to package JS files into a single script

### Implementation Timeline


##### Wednesday, July 17
* Project proposal completed
* Project setup with webpack
* Asteroid demo completed in preparation

##### Thursday, July 18
* Game screen is rendering and scrolling
* Generate terrain and overall level layout

##### Friday, July 19
* Abstract `MovingObject` class implemented. Anything that moves can
    * move in 8 directions
    * generate a `Projectile`
* Concrete `Ship` implemented.
    * describes a `MovingObject` that
        * the player controls
        * is destroyed in collisions
        * Ship moves in backward directions roughly 80% as fast as normal motion
        * **BONUS** `Ship` can 'pounce' ie jump in a direction.  Has a recharge timer.
* Abstract `Projectile` implemented.
    * describes a `MovingObject` that 
        * has an owner
        * destroys and is (usually) destroyed in any collisison
* Concrete `BasicShot` implemented
    * Singular 'bullet' type `Projectile`
    * `Ship` can fire these

##### Saturday, July 20
* Abstract `Enemy` extends `MovingObject` implemented
    * describes a `MovingObject` that
        * belongs to a group. (destroying whole groups of enemies rewards powerups)
        * destroys `Ship` in collisions
        * is destroyed by `Ship` projectiles (# required to destroy varies)
        * is not destroyed by any other enemies projectiles
* 3 types of enemies/patterns
    * Concrete `Bug` extends `Enemy` - linear movement pattern. Fires linear shots infrequently.  Single shot kill.
    * Concrete `Spider` extends `Enemy` - Angular or circular movement pattern.  Fires linear shots frequently.  Smaller groups.  Double shot kill.
    * **BONUS**`Red dot` extends `Enemy` - gravitational effect on `Ship`, indestructable.  Does not fire.

##### Sunday, July 21
* Collisions implemented - `Ship` with terrain (`Ship` destroyed)
* Collisions implemented - `Ship` with enemy (both destroyed)
* Collisions implemented - `Ship`/`Enemy` with bullets (check shot dmg against `MovingObject` health, destroy objects as required)
* Concrete `Player` class 
    * has total lives, total score
* On `Ship` death - `Player` lives are reduced, `Ship` respawns if lives remaining, or else **GAME OVER**

##### Monday, July 22
* Abstract `PowerUp` implemented
    * `MovingObject`s that 
        * float in space in a pattern
        * are destroyed only when the `Ship` collides with them
        * have a payload - either a `Projectile` or `Orb` they confer to the player's `Ship`
        * are generated when the player fulfills certain criteria (eg enemy grouping wiped out, total enemies killed)
        * **BONUS** `Ship`'s paw swipes to grab nearby projectiles
* The following classes extend `Projectile` :
    * `LaserShot` - fires a beam projectile.  Essentially a longer `BasicShot`, ie 10 units wide by 1 high.  Destroys multiple enemies before it's destroyed.
    * `SpreadShot` - projectiles start clumped at `Ship` and spread out as they move forward
    * **BONUS** `HelixShot` - `Ship` shoots two lasers that move in matched opposite arcs that describe circles
    * **BONUS** `Missiles` - `Ship` automatically shoots missiles upward and downward.  Wider and slower.
* Abstract`Orb` implemented
    * A `MovingObject` that
        * has a position that is always relative to the player `Ship`
        * destroys enemies and enemy projectiles in collisions
        * Potentially has a limited amount of health
* Concrete `ShieldOrb` implemented
    * An `Orb` that
        * has a limited amount of health, which is reduced in enemy collisions
        * sits immediately in front of the player `Ship`.
            * 1 orb - same y axis as player `Ship`
            * 2 orbs - y axis position +/- a small amount of `Ship` position
* Concrete `ForceOrb` extends `Orb` implemented
    * An `Orb` that
        * has unlimited health
        * sits more loosely around the `Ship`
        * can move in 'orbit' around the `Ship`
        * fires an identical projectile from it's position whenever the `Ship` fires
    * **BONUS**: Player can press a button to change position of force orbs to different orientations and patterns

##### BONUS

* Implement a final challenge/boss fight


