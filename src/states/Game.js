import Phaser from 'phaser'
import PlayerShip from '../sprites/PlayerShip';

export default class extends Phaser.State {
    init() {
    }

    preload() {
    }

    create() {
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
        this.screenWrap(this.playerShip);
    }

    screenWrap(sprite) {
        if (sprite.x < 0) {
            sprite.x = this.game.width;
        }
        else if (sprite.x > this.game.width) {
            sprite.x = 0;
        }

        if (sprite.y < 0) {
            sprite.y = this.game.height;
        }
        else if (sprite.y > this.game.height) {
            sprite.y = 0;
        }
    }

    render() {
    }
}
