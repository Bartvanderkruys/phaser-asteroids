import Phaser from 'phaser'
import PlayerShip from '../sprites/PlayerShip';

import { screenWrap } from '../utils';

export default class extends Phaser.State {
    create() {
        this.stage.backgroundColor = '#343650';

        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.roundPixels = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

        window.addEventListener('resize', function () {
            this.game.scale.refresh();
        });

        this.playerShip = new PlayerShip(this.game, 150, 150);
        this.game.add.existing(this.playerShip);
    }

    update() {
        screenWrap(this.playerShip, this.game);
    }
}
