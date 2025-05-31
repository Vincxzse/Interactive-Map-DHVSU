import React, { useEffect } from "react";
import Phaser from 'phaser';

function MapPage() {
    const speedDown = 300;
    const sizes = {
        width: 800,
        height: 600,
    }

    class GameScene extends Phaser.Scene {
        constructor() {
            super("scene-game");
            this.bg = null;
            this.player;
            this.room1;
            this.keys;
            this.cursor;
            this.playerSpeed = speedDown + 100;
            this.door;
            this.location = 1;
            this.guard;
            this.inDialogueZone = false;
            this.dialogueStep = 0;
        }

        preload() {
            this.load.image('bg', '/map-assets/test.jpg');
            this.load.image('bg2', '/map-assets/room1.png');
            this.load.image('avatar', '/map-assets/avatar-front.png');
            this.load.image('room', '/map-assets/room.jpeg');
            this.load.image('door', '/map-assets/door.png');
            this.load.image('guard', '/map-assets/manong-guard.png');
        }

        create() {
            this.bg = this.add.image(0, 0, 'bg').setOrigin(0, 0);
            this.bg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

            this.player = this.physics.add.image(0, sizes.height - 100, 'avatar').setOrigin(0, 0).setDisplaySize(80, 80);
            this.player.body.allowGravity = false;

            this.room1 = this.physics.add.image(400, 200, 'room').setOrigin(0, 0).setDisplaySize(200, 200);
            this.room1.setImmovable(true);
            this.room1.body.allowGravity = false;

            this.door = this.physics.add.image(530, 330, 'door').setOrigin(0, 0).setDisplaySize(30, 60);
            this.door.setSize(this.door.width - this.door.width/30, this.door.height/6).setOffset(this.door.width/20, this.door.height - this.door.height/50);
            this.door.setImmovable(true);
            this.door.body.allowGravity = false;

            this.guard = this.physics.add.image(350, 400, 'guard').setOrigin(0, 0).setDisplaySize(80, 80);
            this.guard.setImmovable(true);
            this.guard.body.allowGravity = false;

            this.physics.add.overlap(this.door, this.player, this.doorEntered, null, this);
            this.physics.add.overlap(this.guard, this.player, this.triggerDialogue, null, this);

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

            if (!this.inDialogueZone) return;

            const dialogueBox = document.getElementById("dialogue-box");

            if (this.dialogueStep === 1 && Phaser.Input.Keyboard.JustDown(this.keys.enter)) {
                dialogueBox.innerText = "Manong Guard: Good day! How can I help you?";
                this.dialogueStep = 2;
            }

            if (this.dialogueStep === 2) {
                dialogueBox.innerHTML = `
                    <div class="font-semibold">Choose a question (press 1, 2, or 3):</div>
                    <ul class="list-disc ml-4 mt-2">
                        <li>1. Where is the admin office?</li>
                        <li>2. Can I enter this building?</li>
                        <li>3. What are the rules here?</li>
                    </ul>
                `;
                this.dialogueStep = 3;
            }

            if (this.dialogueStep === 3) {
                if (Phaser.Input.Keyboard.JustDown(this.keys.one)) {
                    dialogueBox.innerText = "Manong Guard: The admin office is under maintenance.";
                    this.dialogueStep = 4;
                } else if (Phaser.Input.Keyboard.JustDown(this.keys.two)) {
                    dialogueBox.innerText = "Manong Guard: Go ahead.";
                    this.dialogueStep = 4;
                } else if (Phaser.Input.Keyboard.JustDown(this.keys.three)) {
                    dialogueBox.innerText = "Manong Guard: Please follow the campus rules at all times.";
                    this.dialogueStep = 4;
                }
            }

            if (this.dialogueStep === 4 && Phaser.Input.Keyboard.JustDown(this.keys.enter)) {
                this.resetDialogue();
            }
        }

        triggerDialogue() {
            if (!this.inDialogueZone) {
                this.inDialogueZone = true;
                this.dialogueStep = 1;
                document.getElementById("dialogue-box").classList.remove("hidden");
                document.getElementById("dialogue-box").innerText = "Click enter to talk";
            }
        }

        resetDialogue() {
            this.inDialogueZone = false;
            this.dialogueStep = 0;
            const dialogueBox = document.getElementById("dialogue-box");
            dialogueBox.classList.add("hidden");
            dialogueBox.innerText = "";
        }

        doorEntered() {
            this.player.setY(500);
            this.player.setX(475);
            this.location = 2;
            this.room1.destroy();
            this.door.destroy();
            this.bg.destroy();
            this.guard.destroy();
            this.bg = this.add.image(0, 0, 'bg2').setOrigin(0, 0);
            this.bg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);
            this.door = this.physics.add.image(480, sizes.height - 10, 'door').setOrigin(0, 0).setDisplaySize(70, 10);
            this.door.body.allowGravity = false;
            this.physics.add.overlap(this.door, this.player, this.doorExited, null, this);
            this.children.bringToTop(this.player);
        }

        doorExited() {
            this.door.destroy();
            this.bg.destroy();
            this.player.setY(400);
            this.player.setX(510);

            this.bg = this.add.image(0, 0, 'bg').setOrigin(0, 0);
            this.bg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

            this.room1 = this.physics.add.image(400, 200, 'room').setOrigin(0, 0).setDisplaySize(200, 200);
            this.room1.setImmovable(true);
            this.room1.body.allowGravity = false;

            this.door = this.physics.add.image(530, 330, 'door').setOrigin(0, 0).setDisplaySize(30, 60);
            this.door.setSize(this.door.width - this.door.width/30, this.door.height/6).setOffset(this.door.width/20, this.door.height - this.door.height/50);
            this.door.setImmovable(true);
            this.door.body.allowGravity = false;

            this.guard = this.physics.add.image(350, 400, 'guard').setOrigin(0, 0).setDisplaySize(80, 80);
            this.guard.setImmovable(true);
            this.guard.body.allowGravity = false;

            this.physics.add.overlap(this.door, this.player, this.doorEntered, null, this);
            this.physics.add.overlap(this.guard, this.player, this.triggerDialogue, null, this);
            this.physics.add.collider(this.player, this.room1);
            this.physics.add.collider(this.player, this.guard);
            this.children.bringToTop(this.player);
        }
    }

    const config = {
        type: Phaser.AUTO,
        parent: "phaser-container",
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

    return (
        <div className="relative flex items-center justify-center w-[800px] h-[600px] bg-white rounded-md overflow-hidden border-2 border-red-500" id="phaser-container">
            <div id="dialogue-box" className="hidden absolute bottom-0 left-0 w-full p-4 bg-black text-white text-sm font-mono z-10" />
        </div>
    );
}

export default MapPage;
