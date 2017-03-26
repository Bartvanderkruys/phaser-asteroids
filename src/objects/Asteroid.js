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
        let shape;
        let velocityX;
        let velocityY;

        switch (size) {
            case 0:
                shape = verySmallAsteroidBMD(game);
                velocityX = Math.random() * 200 - 100;
                velocityY = Math.random() * 200 - 100;
                break;
            case 1:
                shape = smallAsteroidBMD(game);
                velocityX = Math.random() * 150 - 75;
                velocityY = Math.random() * 150 - 75;
                break;
            case 2:
                shape = mediumAsteroidBMD(game);
                velocityX = Math.random() * 100 - 50;
                velocityY = Math.random() * 100 - 50;
                break;
            default:
                shape = largeAsteroidBMD(game);
                velocityX = Math.random() * 50 - 25;
                velocityY = Math.random() * 50 - 25;
        }

        super(game, x, y, shape.bmd);

        this.game.physics.p2.enable(this, true);
        this.body.clearShapes();
        this.body.addPolygon({}, shape.polygon);
        this.body.velocity.x = velocityX;
        this.body.velocity.y = velocityY;
        this.body.collideWorldBounds = false;
        this.body.angularVelocity = Math.random() * 2 - 1;
        this.anchor.set(0.5);
    }

    update(){
        screenWrap(this, this.game);
    }
}