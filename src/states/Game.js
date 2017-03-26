import Phaser from 'phaser'
import PlayerShip from '../objects/PlayerShip';
import Asteroid from '../objects/Asteroid';

import {screenWrap, isColliding} from '../utils';

export default class extends Phaser.State {
    create() {
        this.stage.backgroundColor = '#193441';

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.updateBoundsCollisionGroup();

        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.roundPixels = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

        window.addEventListener('resize', function () {
            this.game.scale.refresh();
        });

        this.asteroids = [];
        this.playerCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.asteroidCollisionGroup = this.game.physics.p2.createCollisionGroup();

        for (let i = 0; i < 32; i++) {
            this.asteroids.unshift(
                new Asteroid(
                    this.game,
                    500,
                    500,
                    Math.floor(Math.random() * 4)
                )
            );

            this.game.add.existing(
                this.asteroids[0]
            );

            this.asteroids[0].body.setCollisionGroup(this.asteroidCollisionGroup);
            this.asteroids[0].body.collides([this.playerCollisionGroup]);

        }

        this.playerShip = new PlayerShip(this.game, 150, 150);
        this.game.add.existing(this.playerShip);

        this.playerShip.body.setCollisionGroup(this.playerCollisionGroup);
        this.playerShip.body.collides(this.asteroidCollisionGroup, this.hitAsteroid, this.game);
    }

    hitAsteroid(body1, body2){
        console.log('hit an asteroid!');
    }

    update() {
        screenWrap(this.playerShip, this.game);
    }
}
