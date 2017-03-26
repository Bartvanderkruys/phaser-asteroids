import Phaser from 'phaser'

import { playerShipBMD } from '../bitmapdata/PlayerShipBMD';
import { bulletBMD } from '../bitmapdata/BulletBMD';
import { screenWrap } from '../utils';

export default class extends Phaser.Sprite {

    constructor (game, x, y) {
        super(game, x, y, playerShipBMD(game).bmd);
        this.bulletTime = 0;
        this.anchor.set(0.5);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        this.game.physics.p2.enable(this, true);
        this.body.addPolygon({}, playerShipBMD(game).polygon);

        this.body.mass = 5;
        this.body.collideWorldBounds = false;

        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(80, bulletBMD(game));
    }

    update() {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            this.fireBullet();
        }

        if (this.cursors.up.isDown) {
            this.body.thrustRight(4000)
        }

        if (this.cursors.left.isDown) {
            this.body.angularVelocity = -6;
        }
        else if (this.cursors.right.isDown) {
            this.body.angularVelocity = 6;
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
                this.bullet.reset(this.body.x + 32,  this.body.y + 32);
                this.bullet.lifespan = 800 + Math.random() * 200 ;
                this.bullet.rotation = this.rotation;
                this.game.physics.arcade.velocityFromRotation(
                    this.rotation + (Math.random() * 0.05 - 0.1),
                    (700 + Math.random() * 100),
                    this.bullet.body.velocity
                );
                this.bulletTime = this.game.time.now + 15;
            }
        }

    }
}