import Phaser from 'phaser';
import { screenWrap } from '../utils';

import {
    verySmallAsteroidBMD,
    smallAsteroidBMD,
    mediumAsteroidBMD,
    largeAsteroidBMD,
} from '../bitmapdata/AsteroidBMD';

export default class extends Phaser.Sprite {
    constructor(game, x, y, size) {
        switch (size) {
            case 0:
                super(game, x, y, verySmallAsteroidBMD(game));
                this.xVelocity = Math.random() * 200 - 100;
                this.yVelocity = Math.random() * 200 - 100;
                break;
            case 1:
                super(game, x, y, smallAsteroidBMD(game));
                this.xVelocity = Math.random() * 150 - 75;
                this.yVelocity = Math.random() * 150 - 75;
                break;
            case 2:
                super(game, x, y, mediumAsteroidBMD(game));
                this.xVelocity = Math.random() * 100 - 50;
                this.yVelocity = Math.random() * 100 - 50;
                break;
            default:
                super(game, x, y, largeAsteroidBMD(game));
                this.xVelocity = Math.random() * 50 - 25;
                this.yVelocity = Math.random() * 50 - 25;
        }

        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.angularVelocity = Math.random() * 100 - 50;
        this.anchor.set(0.5);
    }

    update(){
        this.body.angularVelocity = this.angularVelocity;
        this.body.velocity.x = this.xVelocity;
        this.body.velocity.y = this.yVelocity;

        screenWrap(this, this.game);
    }
}