import React, { useEffect } from "react";
import Phaser, { GameObjects } from 'phaser';

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
            this.playerSpeed = speedDown + 500;
        }

        preload() {
            this.load.image('bg1', '/map-assets/pathway.jpg');
            this.load.image('shed1', '/map-assets/shed.png');
            this.load.image('admin', '/map-assets/bldg1.png');
            this.load.image('avatar', '/map-assets/avatar-front.png');
            this.load.image('doormat1', '/map-assets/doormat.png');
            this.load.image('mrm', '/map-assets/mrm.png');
            this.load.image('sand', '/map-assets/sand.png');
            this.load.image('pathway', '/map-assets/pathway.png');
            this.load.image('grass', '/map-assets/grass.jpg');
            this.load.image('curb', '/map-assets/curb.png');
            this.load.image('shedSV', '/map-assets/shedSV.png');
        }

        create() {
            const worldWidth = 2000;
            const worldHeight = 3000;

            const centerX = worldWidth / 2;
            const centerY = worldHeight / 2;

            this.bg1 = this.add.tileSprite(0, 0, worldWidth, worldHeight, 'bg1').setOrigin(0, 0);

            // Admin Building
            this.admin = this.physics.add.staticImage(820, 2000, 'admin').setOrigin(0, 0).setDepth(5);
            this.admin.body.setSize(this.admin.width - 20, this.admin.height - 200);
            this.admin.body.setOffset(this.admin.width - 455, this.admin.height);
            this.adminGrass1 = this.physics.add.image(this.admin.width - 110, this.admin.height + 1980, 'grass').setDisplaySize(this.admin.width, 20).setOrigin(0, 0).setDepth(1);
            this.adminGrass2 = this.physics.add.image(this.admin.width - 140, this.admin.height + 1800, 'grass').setDisplaySize(70, this.admin.height / 2).setOrigin(0, 0).setDepth(1);
            this.adminGrass23 = this.physics.add.image(this.admin.width + 775, this.admin.height + 1800, 'grass').setDisplaySize(70, this.admin.height / 2).setOrigin(0, 0).setDepth(1);
            this.adminCurb1 = this.physics.add.image(this.admin.width + 200, this.admin.height + 2010, 'curb').setDepth(1);
            this.adminCurb2 = this.physics.add.image(this.admin.width + 503, this.admin.height + 2010, 'curb').setDepth(1);
            this.adminCurb3 = this.physics.add.image(this.admin.width - 150, this.admin.height + 2123, 'curb').setDepth(1);
            this.adminCurb3.setAngle(90);
            this.adminCurb3.setCrop(0, 0, 239, 1000);
            this.adminCurb4 = this.physics.add.image(this.admin.width + 850, this.admin.height + 2123, 'curb').setDepth(1);
            this.adminCurb4.setAngle(90);
            this.adminCurb4.setCrop(0, 0, 239, 1000);
            this.adminCurb5 = this.physics.add.image(this.admin.width + 200, this.admin.height + 1792, 'curb').setDepth(1);
            this.adminCurb6 = this.physics.add.image(this.admin.width + 503, this.admin.height + 1792, 'curb').setDepth(1);
            this.adminShed1 = this.physics.add.image(this.admin.width - 130, this.admin.height + 1885, 'shedSV').setDepth(2);
            this.adminShed2 = this.physics.add.image(this.admin.width + 830, this.admin.height + 1885, 'shedSV').setDepth(2);

            // MRM Building
            this.mrm = this.add.image(770, 1400, 'mrm').setOrigin(0, 0).setDepth(0);
            this.mrm.setScale(1, 1);
            // ARM Building
            this.arm = this.add.image(770, 1410, 'mrm').setOrigin(0, 0).setDepth(0);
            this.arm.setScale(1, -1);

            // Invisible Hitboxes
            this.hitboxes = this.physics.add.staticGroup();
            // MRM Hitboxes
            this.hitbox1 = this.hitboxes.create(this.mrm.width, this.mrm.height + 1170, null).setSize(280, this.mrm.height - 70).setVisible(false);
            this.hitbox2 = this.hitboxes.create(this.mrm.width + 630, this.mrm.height + 1170, null).setSize(280, this.mrm.height - 70).setVisible(false);
            this.hitbox3 = this.hitboxes.create(this.mrm.width + 315, this.mrm.height + 1290, null).setSize(this.mrm.width - 70, 220).setVisible(false);
            // ARM Hitboxes
            this.hitbox4 = this.hitboxes.create(this.arm.width, this.arm.height + 585, null).setSize(280, this.arm.height - 70).setVisible(false);
            this.hitbox5 = this.hitboxes.create(this.arm.width + 630, this.arm.height + 585, null).setSize(280, this.arm.height - 70).setVisible(false);
            this.hitbox6 = this.hitboxes.create(this.arm.width + 315, this.arm.height + 460, null).setSize(this.arm.width - 70, 220).setVisible(false);

            // Shed
            this.shed = this.physics.add.staticImage(500, 450, 'shed1').setOrigin(0, 0).setDepth(2);
            this.shed.body.allowGravity = false;
            this.shed.body.setSize(1, this.shed.height - 100);
            this.shed.body.setOffset(this.shed.width, this.shed.height - 1190);

            // Player and colliders
            this.player = this.physics.add.image(centerX, centerY, 'avatar').setOrigin(0, 0).setDisplaySize(60, 60).setDepth(3);
            this.player.body.allowGravity = false;
            // this.physics.add.collider(this.player, this.shed);
            // this.physics.add.collider(this.player, this.admin);
            // this.physics.add.collider(this.player, this.hitbox1);
            // this.physics.add.collider(this.player, this.hitbox2);
            // this.physics.add.collider(this.player, this.hitbox3);
            // this.physics.add.collider(this.player, this.hitbox4);
            // this.physics.add.collider(this.player, this.hitbox5);
            // this.physics.add.collider(this.player, this.hitbox6);

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

            // Zoom-in zoom-out functionality
            this.input.on('wheel', (pointer, GameObjects, deltaX, deltaY) => {
                let cam = this.cameras.main;
                let zoomChange = deltaY > 0 ? - 0.05 : 0.05;
                let newZoom = Phaser.Math.Clamp(cam.zoom + zoomChange, 0.1, 2);
                cam.zoomTo(newZoom, 10);
            });
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