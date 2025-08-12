import React, { useEffect } from "react";
import Phaser from 'phaser';

function MapPage() {
    const speedDown = 300;
    const sizes = {
        width: 1520,
        height: 610,
    }

    class GameScene extends Phaser.Scene {
        constructor() {
            super("scene-game");
            this.player;
            this.playerSpeed = speedDown + 200;
        }

        preload() {
            this.load.image('bg1', '/map-assets/test.jpg');
            this.load.image('shed1', '/map-assets/shed.png');
            this.load.image('admin', '/map-assets/bldg1.png');
            this.load.image('avatar', '/map-assets/avatar-front.png');
            this.load.image('doormat1', '/map-assets/doormat.png');
        }

        create() {
            const worldWidth = 2000;
            const worldHeight = 3000; 
            this.bg1 = this.add.tileSprite(0, 0, worldWidth, worldHeight, 'bg1').setOrigin(0, 0);

            // Admin Building
            this.admin = this.physics.add.staticImage(820, 1500, 'admin').setOrigin(0, 0).setDepth(2);
            this.admin.body.setSize(this.admin.width - 20, this.admin.height - 200);
            this.admin.body.setOffset(this.admin.width - 455, this.admin.height);

            // Shed
            this.shed = this.physics.add.staticImage(500, 500, 'shed1').setOrigin(0, 0).setDepth(2);
            this.shed.body.allowGravity = false;
            this.shed.body.setSize(1, this.shed.height - 100);
            this.shed.body.setOffset(this.shed.width, this.shed.height - 1190);

            // Doormat
            this.doormat1 = this.physics.add.image(1260, 1905, 'doormat1').setOrigin(0, 0).setDepth(0);
            this.doormat1.displayHeight = 20;
            this.doormat1.displayWidth = 50;
            
            // Player and colliders
            this.player = this.physics.add.image(0, 2000 - 40, 'avatar').setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
            this.player.body.allowGravity = false;
            // this.physics.add.collider(this.player, this.shed);
            this.physics.add.collider(this.player, this.admin);


            this.cameras.main.startFollow(this.player, true, 1, 1);
            
            this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
            this.physics.world.setBounds(0, 0, worldWidth, worldHeight);
            
            // Keyboard movements
            this.cursor = this.input.keyboard.createCursorKeys();
            this.keys = this.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
            });

            this.player.setCollideWorldBounds(true);
        }

        update() {
            // Keyboard Movements
            const { left, right, up, down } = this.cursor;
            const { up: w, down: s, left: a, right: d } = this.keys;
            let velocityX = 0;
            let velocityY = 0;
            if (left.isDown || a.isDown) velocityX = -this.playerSpeed;
            else if (right.isDown || d.isDown) velocityX = this.playerSpeed;
            if (up.isDown || w.isDown) velocityY = -this.playerSpeed;
            else if (down.isDown || s.isDown) velocityY = this.playerSpeed;
            this.player.setVelocity(velocityX, velocityY);

            if (this.player.y > this.shed.y + this.shed.height - 40) {
                this.shed.setDepth(0); // Behind player
                this.player.setDepth(1);
            } else {
                this.shed.setDepth(2); // In front of player
                this.player.setDepth(1);
            }
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
                gravity: { y: 0 },
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