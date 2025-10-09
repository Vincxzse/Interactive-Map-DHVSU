import React, { useEffect } from "react";
import Phaser from 'phaser';
import { createOutside } from './Map-Components/Outside-Map';

import { loadARM1, loadARM101Door1, loadARM101Door2, loadARM2, loadCL2, loadARM102, loadOutside, loadARM103, loadGuidance, loadClinic, loadFaculty, loadARM202, loadARM203, loadARM204, loadARM206 } from './Map-Components/ARM/ARM1-Loaders';

import {
    loadMRM, 
    loadMRM2nd, 
    loadMRM101, 
    loadMRM102,
    loadMRM103,
    loadGC1
} from "./Map-Components/MRM/MRM1-Loaders"



function MapPage() {
    const speedDown = 10;
    const sizes = { width: 1520, height: 610 };

    class GameScene extends Phaser.Scene {
        constructor() {
            super("scene-game");
            this.player;
            this.playerSpeed = speedDown + 500;

            // Track overlaps
            this.currentOverlap = null;
        }

        preload() {
            const assets = [
                ['bg1','/map-assets/pathway.png'],
                ['mrm-floor','/map-assets/floor.png'],
                ['shed1','/map-assets/shed.png'],
                ['admin','/map-assets/bldg1.png'],
                ['avatar','/map-assets/avatar-front.png'],
                ['doormat1','/map-assets/doormat.png'],
                ['mrm','/map-assets/mrm.png'],
                ['sand','/map-assets/sand.png'],
                ['pathway','/map-assets/pathway.png'],
                ['grass','/map-assets/grass.jpg'],
                ['curb','/map-assets/curb.png'],
                ['shedSV','/map-assets/shedSV.png'],
                ['shedSH','/map-assets/shedSH.png'],
                ['canteen','/map-assets/canteen.png'],
                ['court','/map-assets/court.png'],
                ['erm','/map-assets/erm.png'],
                ['road','/map-assets/road.png'],
                ['tree','/map-assets/tree.png'],
                ['flag','/map-assets/flag.png'],
                ['room','/map-assets/room.png'],
                ['door-side','/map-assets/door-side.png'],
                ['wall','/map-assets/wall.png'],
                ['gutterY','/map-assets/gutterY.png'],
                ['gutterX','/map-assets/gutterX.png'],
                ['stairs','/map-assets/stairs.png'],
                ['bodega','/map-assets/bodega.png'],
                ['room-wall','/map-assets/room-wall.png'],
                ['room-wall-Y','/map-assets/room-wall-Y.png'],
                ['window1','/map-assets/window1.png'],
                ['window2','/map-assets/window2.png'],
                ['door-front','/map-assets/door-front.png'],
                ['wallX','/map-assets/wallX.png'],
                ['upperWallX','/map-assets/upperWallX.png'],
                ['room-tile','/map-assets/room-tile.png'],
                ['whiteboard','/map-assets/whiteboard.png'],
                ['armchair','/map-assets/armchair.png'],
                ['armchair-back','/map-assets/armchair-back.png'],
                ['guard','/map-assets/guard.png'],
                ['armchair-side','/map-assets/armchair-side.png'],
                ['guidance-table','/map-assets/guidance-table.png'],
                ['chair','/map-assets/chair.png'],
                ['clinic-table','/map-assets/clinic-table.png'],
                ['bed','/map-assets/bed.png'],
                ['water-dispenser','/map-assets/water-dispenser.png'],
                ['clock','/map-assets/clock.png'],
                ['pc-set','/map-assets/pc-set.png'],
            ];

            assets.forEach(([key, url]) => this.load.image(key, url));
        }

        create() {
            this.worldWidth = 2000;
            this.worldHeight = 3500;

            this.cursor = this.input.keyboard.createCursorKeys();
            this.keys = this.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
            });

            // Start with outside map
            this.loadOutside();
            this.refreshDebug();

            this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
            this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
            this.dialogueActive = false;
            this.choiceTexts = [];
            this.choiceIndex = 0;
        }

        showDialogue() {
            this.dialogueActive = true;
            this.choiceIndex = 0;

            const choices = ["Yes, I need help.", "No, just looking around."];

            // Clear old choices
            this.choiceTexts.forEach(c => c.destroy());
            this.choiceTexts = [];

            choices.forEach((choice, i) => {
                const txt = this.add.text(this.prof1.x, this.prof1.y + 80 + i * 30, choice, {
                    font: "18px Arial",
                    fill: "#ffffff",
                    backgroundColor: "#000000",
                    padding: { x: 6, y: 2 },
                }).setOrigin(0.5).setDepth(5);

                this.choiceTexts.push(txt);
            });

            this.updateChoiceHighlight();
        }

        updateChoiceHighlight() {
            this.choiceTexts.forEach((txt, i) => {
                txt.setStyle({ fill: i === this.choiceIndex ? "#ffff00" : "#ffffff" });
            });
        }

        handleChoice() {
            const selected = this.choiceTexts[this.choiceIndex].text;
            this.profQuestion.setText("You chose: " + selected);

            this.choiceTexts.forEach(c => c.destroy());
            this.choiceTexts = [];
            this.dialogueActive = false;
        }

        loadOutside(x = 1250, y = 1950) { loadOutside(this, x, y) }
        loadARM1(x = 150, y = 100) { loadARM1(this, x, y) }
        loadARM101Door1() { loadARM101Door1(this) }
        loadARM101Door2() { loadARM101Door2(this) }
        loadARM102() { loadARM102(this) }
        loadARM103(x, y) { loadARM103(this, x, y) }
        loadGuidance(x, y) { loadGuidance(this, x, y) }
        loadClinic(x, y) { loadClinic(this, x, y) }
        loadFaculty(x, y) { loadFaculty(this, x, y) }
        loadARM2(x, y) { loadARM2(this, x, y) }
        loadCL2(x, y) { loadCL2(this, x, y) }
        loadARM202(x, y) { loadARM202(this, x, y) }
        loadARM203(x, y) { loadARM203(this, x, y) }
        loadARM204(x, y) { loadARM204(this, x, y) }
        loadARM206(x, y) { loadARM206(this, x, y) }

        loadMRM(x, y) { loadMRM(this, x, y) }
        loadMRM101(x, y) { loadMRM101(this, x, y) }
        loadMRM102(x, y) { loadMRM102(this, x, y) }
        loadMRM103(x, y) { loadMRM103(this, x, y) }
        loadGC1(x, y) { loadGC1(this, x, y) }

        loadMRM2nd(x, y) { loadMRM2nd(this, x, y) }

        // ---------------- OVERLAPS ----------------
        destroyCurrentOverlap() {
            if (this.currentOverlap) {
                this.currentOverlap.destroy();
                this.currentOverlap = null;
            }
        }

        attachOutsideOverlap() {
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance1, () => {
                this.loadARM1(this.worldWidth / 2, 250);
                this.refreshDebug();
            });
        }

        attachOutsideOverlap2() {
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance2, () => {
                this.loadARM1(this.worldWidth / 2, 50);
                this.refreshDebug();
            });
        }

        attachOutsideOverlap3() {
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance3, () => {
                this.loadARM1(200, 600);
                this.refreshDebug();
            });
        }

        attachOutsideOverlap4() {
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance4, () => {
                this.loadARM1(this.worldWidth - 150, 600);
                this.refreshDebug();
            });
        }

        // ---------------- UTILITY ----------------
        clearMap() {
            // Destroy all children
            Object.values(this.children.list).forEach(obj => obj.destroy());
            // Destroy all colliders
            this.physics.world.colliders.destroy();

            // Destroy debug graphics if exists
            if (this.physics.world.debugGraphic) {
                this.physics.world.debugGraphic.clear();
                // this.physics.world.debugGraphic.destroy();
            }
        }

        refreshDebug() {
            this.physics.world.drawDebug = true;
            this.physics.world.debugGraphic = this.add.graphics();
            this.physics.world.createDebugGraphic();
        }

        // ---------------- UPDATE ----------------
        update() {
            // Keyboard and dialogues controls
            if (this.dialogueActive) {
                this.player.setVelocity(0);
            } else {
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


            // Example: adjust depth for shed
            if (this.currentMap === "outside" && this.shed && this.player) {
                if (this.player.y > this.shed.y + this.shed.height - 40) {
                    this.shed.setDepth(0);
                    this.player.setDepth(1);
                } else {
                    this.shed.setDepth(2);
                    this.player.setDepth(1);
                }
            }

            if (this.prof1 && this.profQuestion) {
                const distance = Phaser.Math.Distance.Between(
                    this.player.x, this.player.y,
                    this.prof1.x, this.prof1.y
                );

                if (distance < 120) {
                    this.profQuestion.setVisible(true);
                } else {
                    this.profQuestion.setVisible(false);
                }
            }

            if (this.guard1 && this.guard1Question) {
                const distance = Phaser.Math.Distance.Between(
                    this.player.x, this.player.y,
                    this.guard1.x, this.guard1.y
                );

                if (distance < 120) {
                    this.guard1Question.setVisible(true);
                } else {
                    this.guard1Question.setVisible(false);

                    // --- Close guard dialogue when walking away ---
                    if (this.guard1DialogueActive) {
                        this.guard1DialogueActive = false;
                        this.guard1ChoiceTexts.forEach(c => c.destroy());
                        this.guard1ChoiceTexts = [];
                    }
                }
            }


            // Dialogue controls
            if (this.dialogueActive) {
                if (Phaser.Input.Keyboard.JustDown(this.upKey)) {
                    this.choiceIndex = (this.choiceIndex - 1 + this.choiceTexts.length) % this.choiceTexts.length;
                    this.updateChoiceHighlight();
                }
                if (Phaser.Input.Keyboard.JustDown(this.downKey)) {
                    this.choiceIndex = (this.choiceIndex + 1) % this.choiceTexts.length;
                    this.updateChoiceHighlight();
                }
                if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
                    this.handleChoice();
                }
            } else {
                // Open dialogue if near prof1
                if (this.prof1 && Phaser.Math.Distance.Between(this.player.x, this.player.y, this.prof1.x, this.prof1.y) < 100) {
                    if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
                        this.showDialogue();
                    }
                }
            }

            // --- Guard1 Dialogue Controls ---
            if (this.guard1DialogueActive) {
                if (Phaser.Input.Keyboard.JustDown(this.upKey)) {
                    this.guard1ChoiceIndex = (this.guard1ChoiceIndex - 1 + this.guard1ChoiceTexts.length) % this.guard1ChoiceTexts.length;
                    this.updateGuard1ChoiceHighlight();
                }
                if (Phaser.Input.Keyboard.JustDown(this.downKey)) {
                    this.guard1ChoiceIndex = (this.guard1ChoiceIndex + 1) % this.guard1ChoiceTexts.length;
                    this.updateGuard1ChoiceHighlight();
                }
                if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
                    this.handleGuard1Choice();
                }
            } else {
                // Open guard1 dialogue if near
                if (
                    this.guard1 &&
                    Phaser.Math.Distance.Between(this.player.x, this.player.y, this.guard1.x, this.guard1.y) < 100
                ) {
                    if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
                        this.showGuard1Dialogue();
                    }
                }
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
                debug: false,
            },
        },
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
    };

    useEffect(() => {
        const game = new Phaser.Game(config);
        return () => game.destroy(true);
    }, []);

    return (
        <div className="relative flex flex-col w-full h-full items-start justify-start gap-2 bg-[#2B313C] rounded-lg overflow-hidden" id="map-container">
            {/* <p className="absolute text-red-500 font-bolder bg-white right-0">TEST</p> */}
        </div>
    );
}

export default MapPage;
