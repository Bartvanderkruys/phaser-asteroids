import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor (game, x, y) {
        // create a new bitmap data object
        let bmd = game.add.bitmapData(64,64);

        // draw to the canvas context like normal
        bmd.ctx.beginPath();
        bmd.ctx.lineTo(16, 32);
        bmd.ctx.lineTo(0, 56);
        bmd.ctx.lineTo(64, 32);
        bmd.ctx.lineTo(0, 8);
        bmd.ctx.closePath();
        bmd.ctx.fillStyle = '#d74dff';
        bmd.ctx.fill();

        super(game, x, y, bmd);

        //  Game input
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

        this.anchor.set(0.5);

        //  and its physics settings
        this.game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.drag.set(150);
        this.body.maxVelocity.set(800);
    }

    update() {
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
    }
}