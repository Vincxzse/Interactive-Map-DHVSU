import React, { useEffect } from "react";
import Phaser from 'phaser';

function MapPage() {
    const speedDown = 300;
    const sizes = {
        width: 1000,
        height: 600,
    }

    class GameScene extends Phaser.Scene {
        constructor() {
            super("scene-game");
            this.player;
            this.playerSpeed = speedDown + 200;
        }

        preload() {
            this.load.image('bg1', '/map-assets/test.jpg');
            this.load.image('avatar', '/map-assets/avatar-front.png');
        }

        create() {
            this.bg1 = this.add.tileSprite(0, 0, 2000, 2000, 'bg1').setOrigin(0, 0);

            this.player = this.physics.add.image(0, 2000 - 40, 'avatar').setOrigin(0, 0).setDisplaySize(40, 40);
            this.player.body.allowGravity = false;

            this.cameras.main.startFollow(this.player, true, 1, 1);
            
            this.cameras.main.setBounds(0, 0, 2000, 2000);
            this.physics.world.setBounds(0, 0, 2000, 2000);

            this.cursor = this.input.keyboard.createCursorKeys();
            this.keys = this.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
                enter: Phaser.Input.Keyboard.KeyCodes.ENTER,
                one: Phaser.Input.Keyboard.KeyCodes.ONE,
                two: Phaser.Input.Keyboard.KeyCodes.TWO,
                three: Phaser.Input.Keyboard.KeyCodes.THREE
            });

            this.player.setCollideWorldBounds(true);
            this.physics.add.collider(this.player, this.room1);
            this.physics.add.collider(this.player, this.guard);
        }

        update() {
            const { left, right, up, down } = this.cursor;
            const { up: w, down: s, left: a, right: d } = this.keys;

            let velocityX = 0;
            let velocityY = 0;

            if (left.isDown || a.isDown) velocityX = -this.playerSpeed;
            else if (right.isDown || d.isDown) velocityX = this.playerSpeed;

            if (up.isDown || w.isDown) velocityY = -this.playerSpeed;
            else if (down.isDown || s.isDown) velocityY = this.playerSpeed;

            this.player.setVelocity(velocityX, velocityY);
        }
    }

    const config = {
        type: Phaser.AUTO,
        parent: "map-container",
        width: sizes.width,
        height: sizes.height,
        scene: GameScene,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: speedDown },
                debug: true,
            },
        },
    };

    useEffect(() => {
        const game = new Phaser.Game(config);
        return () => game.destroy(true);
    }, []);

    return(
        <>
            <div className="flex flex-col w-full h-full items-start justify-center gap-2 bg-[#2B313C] rounded-lg overflow-hidden" id="map-container">
                
            </div>
        </>
    );
}

export default MapPage;