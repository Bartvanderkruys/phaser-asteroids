import Phaser from 'phaser'
import PlayerShip from '../objects/PlayerShip';
import Asteroid from '../objects/Asteroid';

import { screenWrap } from '../utils';

export default class extends Phaser.State {
    create() {
        this.stage.backgroundColor = '#193441';

        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.roundPixels = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

        window.addEventListener('resize', function () {
            this.game.scale.refresh();
        });

        for (let i = 0; i < 32; i++) {
            this.game.add.existing(
                new Asteroid(
                    this.game,
                    500,
                    500,
                    Math.floor(Math.random() * 4)
                )
            );
        }

        this.playerShip = new PlayerShip(this.game, 150, 150);
        this.game.add.existing(this.playerShip);
    }

    update() {
        screenWrap(this.playerShip, this.game);
    }
}
