import Phaser, { Physics } from 'phaser';

const sizes = {
    width: 500,
    height: 500,
}

const config = {
    type: Phaser.WEBGL,
    width: sizes.width,
    height: sizes.height,
    canvas: mapCanvas
}

const game = new Phaser.Game(config);