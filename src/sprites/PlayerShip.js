import Phaser from 'phaser'

import { playerShipBMD } from '../bitmapdata/PlayerShipBMD';
import { bulletBMD } from '../bitmapdata/BulletBMD';
import { screenWrap } from '../utils';

export default class extends Phaser.Sprite {

    constructor (game, x, y) {
        super(game, x, y, playerShipBMD(game));

        this.bulletTime = 0;

        this.anchor.set(0.5);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.drag.set(150);
        this.body.maxVelocity.set(800);

        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(80, bulletBMD(game));
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 0.5);
    }

    update() {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            this.fireBullet();
        }

        if (this.cursors.up.isDown) {
            this.game.physics.arcade.accelerationFromRotation(
                this.rotation,
                500,
                this.body.acceleration
            );
        } else {
            this.body.acceleration.set(0);
        }

        if (this.cursors.left.isDown) {
            this.body.angularVelocity = -300;
        }
        else if (this.cursors.right.isDown) {
            this.body.angularVelocity = 300;
        }
        else {
            this.body.angularVelocity = 0;
        }

        this.bullets.forEachExists(screenWrap, this, this.game);
    }

    fireBullet() {
        if (this.game.time.now > this.bulletTime)
        {
            this.bullet = this.bullets.getFirstExists(false);

            if (this.bullet)
            {
                this.bullet.reset(this.body.x + 32, this.body.y + 32);
                this.bullet.lifespan = 800;
                this.bullet.rotation = this.rotation;
                this.game.physics.arcade.velocityFromRotation(this.rotation, 800, this.bullet.body.velocity);
                this.bulletTime = this.game.time.now + 15;
            }
        }

    }
}