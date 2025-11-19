import React, { useEffect, useState } from "react";
import Phaser from 'phaser';
import { createOutside } from './Map-Components/Outside-Map';

import { loadARM1, loadARM101Door1, loadARM101Door2, loadARM2, loadCL2, loadARM102, loadOutside, loadARM103, loadGuidance, loadClinic, loadFaculty, loadARM202, loadARM203, loadARM204, loadARM206 } from './Map-Components/ARM/ARM1-Loaders';

import {
    loadMRM, 
    loadMRM2nd,
    loadMRM101,
    loadMRM102,
    loadMRM103,
    loadGC1,
    loadGC2,
    loadFacultyRoom,
    loadMRM201,
    loadMRM202,
    loadMRM203,
    loadMRM204,
    loadMRM205,
    loadComlab1,
    loadOldLibrary,
} from "./Map-Components/MRM/MRM1-Loaders"

import {
    loadAdmin
} from "./Map-Components/Admin-Bldg/Admin-Loaders.js"

function MapPage() {
    const [showTable, setShowTable] = useState(false);
    const [showTargetMenu, setShowTargetMenu] = useState(false);
    const [currentTarget, setCurrentTarget] = useState('admin');
    const [currentLocation, setCurrentLocation] = useState('outside');
    const [availableTargets, setAvailableTargets] = useState([]);
    const [joystickActive, setJoystickActive] = useState(false);

    const speedDown = 10;
    const sizes = { width: 1520, height: 610 };

    class GameScene extends Phaser.Scene {
        constructor() {
            super("scene-game");
            this.player;
            this.playerSpeed = speedDown + 500;
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
                ['long-wall','/map-assets/long-wall.png'],
                ['computer-3','/map-assets/computer-3.png'],
                ['computer-2','/map-assets/computer-2.png'],
                ['computer-1','/map-assets/computer-1.png'],
                ['computer-wall','/map-assets/computer-wall.png'],
                ['whiteboard-2','/map-assets/whiteboard-2.png'],
                ['admin1','/map-assets/admin1.png'],
                ['admin2','/map-assets/admin2.png'],
                ['admin3','/map-assets/admin3.png'],
                ['admin4','/map-assets/admin4.png'],
                ['adminCR','/map-assets/adminCR.png'],
                ['entrep','/map-assets/entrep.png'],
                ['educ','/map-assets/educ-head.png'],
                ['psych','/map-assets/psych-head.png'],
                ['eng','/map-assets/eng.png'],
                ['bsit','/map-assets/it-head.png'],
                ['gps','/map-assets/gps.png'],
                ['compassBg','/map-assets/compassBG.png'],
                ['registrar','/map-assets/registrar.png'],
            ];

            assets.forEach(([key, url]) => this.load.image(key, url));
            
            // Load spritesheet for animations
            // Image size: 378x394, Grid: 4 columns x 4 rows
            // Frame size: approximately 94x98 pixels per frame
            this.load.spritesheet('avatar-sheet', '/map-assets/avatar-spritesheet.png', {
                frameWidth: 94,
                frameHeight: 98
            });
            
            this.load.on('loaderror', (file) => {
                console.error('Error loading file:', file.src);
            });
            
            this.load.on('complete', () => {
                console.log('All assets loaded');
                console.log('Avatar sheet texture exists:', this.textures.exists('avatar-sheet'));
            });
        }

        createAnimations() {            
            // Walking down (front)
            this.anims.create({
                key: 'walk-down',
                frames: this.anims.generateFrameNumbers('avatar-sheet', { 
                    start: 0, 
                    end: 3 
                }),
                frameRate: 10,
                repeat: -1
            });
            
            // Walking up (back)
            this.anims.create({
                key: 'walk-up',
                frames: this.anims.generateFrameNumbers('avatar-sheet', { 
                    start: 4, 
                    end: 7 
                }),
                frameRate: 10,
                repeat: -1
            });
            
            // Walking left
            this.anims.create({
                key: 'walk-left',
                frames: this.anims.generateFrameNumbers('avatar-sheet', { 
                    start: 8, 
                    end: 11 
                }),
                frameRate: 10,
                repeat: -1
            });
            
            // Walking right
            this.anims.create({
                key: 'walk-right',
                frames: this.anims.generateFrameNumbers('avatar-sheet', { 
                    start: 12, 
                    end: 15 
                }),
                frameRate: 10,
                repeat: -1
            });
            
            // Idle animations
            this.anims.create({
                key: 'idle-down',
                frames: [{ key: 'avatar-sheet', frame: 0 }],
                frameRate: 1
            });
            
            this.anims.create({
                key: 'idle-up',
                frames: [{ key: 'avatar-sheet', frame: 4 }],
                frameRate: 1
            });
            
            this.anims.create({
                key: 'idle-left',
                frames: [{ key: 'avatar-sheet', frame: 8 }],
                frameRate: 1
            });
            
            this.anims.create({
                key: 'idle-right',
                frames: [{ key: 'avatar-sheet', frame: 12 }],
                frameRate: 1
            });
        }


        create() {
            this.worldWidth = 2000;
            this.worldHeight = 3500;

            this.createAnimations();
            this.lastDirection = 'down';

            this.cursor = this.input.keyboard.createCursorKeys();
            this.keys = this.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
            });

            // Mobile touch controls
            this.touchMovement = { x: 0, y: 0 };

            // Start with outside map
            this.loadOutside();
            this.refreshDebug();

            this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
            this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
            this.dialogueActive = false;
            this.choiceTexts = [];
            this.choiceIndex = 0;

            this.availableTargets = {
                admin: this.adminEntrance1,
                mrm: this.MRMEntrance1,
                arm: this.entrance1,
                canteen: this.canteen,
                court: this.court,
                erm: this.erm
            };
            this.currentTargetKey = 'admin';
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

        loadOutside(x = 1250, y = this.worldHeight) { loadOutside(this, x, y) }
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
        loadGC2(x, y) { loadGC2(this, x, y) }
        loadFacultyRoom(x, y) { loadFacultyRoom(this, x, y) }
        
        loadMRM2nd(x, y) { loadMRM2nd(this, x, y) }
        loadMRM201(x, y) { loadMRM201(this, x, y) }
        loadMRM202(x, y) { loadMRM202(this, x, y) }
        loadMRM203(x, y) { loadMRM203(this, x, y) }
        loadMRM204(x, y) { loadMRM204(this, x, y) }
        loadMRM205(x, y) { loadMRM205(this, x, y) }
        loadComlab1(x, y) { loadComlab1(this, x, y) }
        loadOldLibrary(x, y) { loadOldLibrary(this, x, y) }

        loadAdmin(x, y) { loadAdmin(this, x, y) }

        // ---------------- OVERLAPS ----------------
        destroyCurrentOverlap() {
            if (this.currentOverlap) {
                this.currentOverlap.destroy();
                this.currentOverlap = null;
            }
        }

        attachOutsideOverlap() {
            let canTrigger = true;
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance1, () => {
                if (!canTrigger) return;
                canTrigger = false;
                this.loadARM1(this.worldWidth / 2, 250);
                this.refreshDebug();
                this.time.delayedCall(1000, () => { canTrigger = true; });
            });
        }

        attachOutsideOverlap2() {
            let canTrigger = true;
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance2, () => {
                if (!canTrigger) return;
                canTrigger = false;
                this.loadARM1(this.worldWidth / 2, 50);
                this.refreshDebug();
                this.time.delayedCall(1000, () => { canTrigger = true; });
            });
        }

        attachOutsideOverlap3() {
            let canTrigger = true;
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance3, () => {
                if (!canTrigger) return;
                canTrigger = false;
                this.loadARM1(200, 600);
                this.refreshDebug();
                this.time.delayedCall(1000, () => { canTrigger = true; });
            });
        }

        attachOutsideOverlap4() {
            let canTrigger = true;
            this.currentOverlap = this.physics.add.overlap(this.player, this.entrance4, () => {
                if (!canTrigger) return;
                canTrigger = false;
                this.loadARM1(this.worldWidth - 150, 600);
                this.refreshDebug();
                this.time.delayedCall(1000, () => { canTrigger = true; });
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
            // this.physics.world.drawDebug = true;
            // this.physics.world.debugGraphic = this.add.graphics();
            // this.physics.world.createDebugGraphic();
        }

        // ---------------- UPDATE ----------------
        update() {
            // Safety check - make sure player exists with physics body
            if (!this.player || !this.player.body) {
                console.warn('Player or player body not initialized');
                return;
            }
           
            const { left, right, up, down } = this.cursor;
            const { up: w, down: s, left: a, right: d } = this.keys;
            let velocityX = 0;
            let velocityY = 0;
            
            // Keyboard controls
            if (left.isDown || a.isDown) velocityX = -this.playerSpeed;
            else if (right.isDown || d.isDown) velocityX = this.playerSpeed;
            if (up.isDown || w.isDown) velocityY = -this.playerSpeed;
            else if (down.isDown || s.isDown) velocityY = this.playerSpeed;
            
            // Mobile touch controls - override keyboard if active
            if (this.touchMovement.x !== 0 || this.touchMovement.y !== 0) {
                velocityX = this.touchMovement.x * this.playerSpeed;
                velocityY = this.touchMovement.y * this.playerSpeed;
            }
            
            this.player.setVelocity(velocityX, velocityY);

            const isMoving = velocityX !== 0 || velocityY !== 0;

            // Only play animations if anims exist
            if (this.player.anims) {
                if (isMoving) {
                    // Determine direction and play appropriate animation
                    if (Math.abs(velocityX) > Math.abs(velocityY)) {
                        // Horizontal movement is dominant
                        if (velocityX > 0) {
                            this.player.anims.play('walk-right', true);
                            this.lastDirection = 'right';
                        } else {
                            this.player.anims.play('walk-left', true);
                            this.lastDirection = 'left';
                        }
                    } else {
                        // Vertical movement is dominant
                        if (velocityY > 0) {
                            this.player.anims.play('walk-down', true);
                            this.lastDirection = 'down';
                        } else {
                            this.player.anims.play('walk-up', true);
                            this.lastDirection = 'up';
                        }
                    }
                } else {
                    // Not moving - play idle animation based on last direction
                    this.player.anims.play(`idle-${this.lastDirection}`, true);
                }
            }

            // Compass update
            if (this.player && this.compass && this.currentTargetKey) {
                const target = this.availableTargets[this.currentTargetKey]

                if (target) {
                    const dx = target.x - this.player.x
                    const dy = target.y - this.player.y
                    const angle = Math.atan2(dy, dx) + Math.PI/2
                    this.compass.setRotation(angle)
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
        window.phaserGame = game;
        
        // Listen for location changes from Phaser
        window.addEventListener('locationChanged', (e) => {
            setCurrentLocation(e.detail.location);
            setAvailableTargets(e.detail.targets);
        });

        // Handle mobile joystick movement
        const handleJoystickMove = (e) => {
            const scene = game.scene.scenes[0];
            if (scene && scene.touchMovement) {
                scene.touchMovement.x = e.detail.x;
                scene.touchMovement.y = e.detail.y;
            }
        };

        window.addEventListener('joystickMove', handleJoystickMove);
        
        return () => {
            window.removeEventListener('locationChanged', () => {});
            window.removeEventListener('joystickMove', handleJoystickMove);
            game.destroy(true);
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            {/* Toggle Button */}
            <div className="absolute top-4 right-4 z-50 flex flex-col gap-5">
                <button
                    onClick={() => setShowTable(!showTable)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
                    title={showTable ? 'Hide Services' : 'Show Services'}
                >
                    {showTable ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    )}
                </button>

                <button
                    onClick={() => setShowTargetMenu(!showTargetMenu)}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
                    title="Select Compass Target"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                </button>
            </div>

            {showTargetMenu && (
                <div className="absolute top-40 right-4 z-50 bg-white rounded-lg shadow-xl p-4 w-64 max-h-110 overflow-y-scroll">
                    <h3 className="text-lg font-bold mb-3">Select Compass Target</h3>
                    <p className="text-xs text-gray-500 mb-2">Location: {currentLocation}</p>
                    <div className="space-y-2">
                        {availableTargets.length === 0 ? (
                            <p className="text-gray-500 text-sm">No navigation targets available in this location.</p>
                        ) : (
                            availableTargets.map(target => (
                                <button
                                    key={target.key}
                                    onClick={() => {
                                        setCurrentTarget(target.key);
                                        setShowTargetMenu(false);
                                        // Update the game scene's target
                                        const game = window.phaserGame;
                                        if (game && game.scene.scenes[0]) {
                                            game.scene.scenes[0].currentTargetKey = target.key;
                                        }
                                    }}
                                    className={`w-full text-left px-4 py-2 rounded transition-colors ${
                                        currentTarget === target.key 
                                            ? `${target.color} text-white` 
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{target.label}</span>
                                        {currentTarget === target.key && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Services Table Modal */}
            {showTable && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-50 z-40 overflow-auto flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-auto">
                        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
                            <h2 className="text-2xl font-bold">DHVSU Lubao Campus Services</h2>
                            <button
                                onClick={() => setShowTable(false)}
                                className="text-gray-600 hover:text-gray-800 text-3xl font-bold leading-none cursor-pointer"
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-6">
                            <section>
                                <h3 className="text-xl font-bold mb-3 text-blue-600">ACADEMIC SERVICES</h3>
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 p-2 text-left">Service</th>
                                            <th className="border border-gray-300 p-2 text-left">Processing Time</th>
                                            <th className="border border-gray-300 p-2 text-left">Requirements</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Issuance of Medicines</td>
                                            <td className="border border-gray-300 p-2">32 Minutes</td>
                                            <td className="border border-gray-300 p-2">University Issued Student ID</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Issuance of Medical Clearance</td>
                                            <td className="border border-gray-300 p-2">39 Minutes</td>
                                            <td className="border border-gray-300 p-2">University Issued Student ID</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold mb-3 text-blue-600">GUIDANCE AND COUNSELING</h3>
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 p-2 text-left">Service</th>
                                            <th className="border border-gray-300 p-2 text-left">Processing Time</th>
                                            <th className="border border-gray-300 p-2 text-left">Requirements</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Walk-in Counseling</td>
                                            <td className="border border-gray-300 p-2">1 Hour, 28 Minutes</td>
                                            <td className="border border-gray-300 p-2">COR Photocopy, Student ID</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Referral Counseling</td>
                                            <td className="border border-gray-300 p-2">1 Hour, 31 Minutes</td>
                                            <td className="border border-gray-300 p-2">Student ID, COR, Call Slip, Referral Form</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold mb-3 text-blue-600">LIBRARY SERVICES</h3>
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 p-2 text-left">Service</th>
                                            <th className="border border-gray-300 p-2 text-left">Processing Time</th>
                                            <th className="border border-gray-300 p-2 text-left">Requirements</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-2">New Library Card</td>
                                            <td className="border border-gray-300 p-2">11 Minutes</td>
                                            <td className="border border-gray-300 p-2">COR Photocopy, Valid ID, Passport Photo</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Borrowing Books</td>
                                            <td className="border border-gray-300 p-2">7 Minutes, 30 Seconds</td>
                                            <td className="border border-gray-300 p-2">Library Card</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Returning Books</td>
                                            <td className="border border-gray-300 p-2">4 Minutes</td>
                                            <td className="border border-gray-300 p-2">Library Card</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Clearance Signing</td>
                                            <td className="border border-gray-300 p-2">6 Minutes</td>
                                            <td className="border border-gray-300 p-2">Library Card, Student Clearance</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Lost Library Card</td>
                                            <td className="border border-gray-300 p-2">9 Minutes</td>
                                            <td className="border border-gray-300 p-2">Valid ID, Passport Photo, Affidavit of Loss</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Interlibrary Request</td>
                                            <td className="border border-gray-300 p-2">7 Minutes</td>
                                            <td className="border border-gray-300 p-2">Valid ID/Library Card, 2 Long Bond Papers</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold mb-3 text-blue-600">HUMAN RESOURCE SERVICES</h3>
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 p-2 text-left">Service</th>
                                            <th className="border border-gray-300 p-2 text-left">Processing Time</th>
                                            <th className="border border-gray-300 p-2 text-left">Requirements</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Permit to Go Out</td>
                                            <td className="border border-gray-300 p-2">2 Minutes</td>
                                            <td className="border border-gray-300 p-2">Permit Form</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Daily Time Record</td>
                                            <td className="border border-gray-300 p-2">1 Day, 3 Hours</td>
                                            <td className="border border-gray-300 p-2">None</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Leave Form</td>
                                            <td className="border border-gray-300 p-2">1 Day, 9 Minutes</td>
                                            <td className="border border-gray-300 p-2">2 Copies of Leave Form, Supporting Documents</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Incident Report</td>
                                            <td className="border border-gray-300 p-2">37 Minutes</td>
                                            <td className="border border-gray-300 p-2">Incident Report Form</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold mb-3 text-blue-600">PROPERTY AND SUPPLY</h3>
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 p-2 text-left">Service</th>
                                            <th className="border border-gray-300 p-2 text-left">Processing Time</th>
                                            <th className="border border-gray-300 p-2 text-left">Requirements</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-2">Request and Issuance of Supplies</td>
                                            <td className="border border-gray-300 p-2">14 Minutes</td>
                                            <td className="border border-gray-300 p-2">Requisition and Issue Slip (RIS)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative flex flex-col w-full h-full items-start justify-start gap-2 bg-[#2B313C] rounded-lg overflow-hidden" id="map-container">
            </div>

            {/* Mobile Virtual Joystick */}
            <MobileJoystick onMove={setJoystickActive} />
        </div>
    );
}

// Mobile Joystick Component
function MobileJoystick({ onMove }) {
    const joystickRef = React.useRef(null);
    const knobRef = React.useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleStart = (e) => {
        setIsDragging(true);
        onMove(true);
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        
        const touch = e.touches ? e.touches[0] : e;
        const joystick = joystickRef.current.getBoundingClientRect();
        const centerX = joystick.left + joystick.width / 2;
        const centerY = joystick.top + joystick.height / 2;
        
        let deltaX = touch.clientX - centerX;
        let deltaY = touch.clientY - centerY;
        
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 40; // Maximum distance from center
        
        if (distance > maxDistance) {
            deltaX = (deltaX / distance) * maxDistance;
            deltaY = (deltaY / distance) * maxDistance;
        }
        
        // Update knob position
        if (knobRef.current) {
            knobRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }
        
        // Normalize values between -1 and 1
        const normalizedX = deltaX / maxDistance;
        const normalizedY = deltaY / maxDistance;
        
        // Dispatch event to Phaser
        window.dispatchEvent(new CustomEvent('joystickMove', {
            detail: { x: normalizedX, y: normalizedY }
        }));
    };

    const handleEnd = () => {
        setIsDragging(false);
        onMove(false);
        
        // Reset knob position
        if (knobRef.current) {
            knobRef.current.style.transform = 'translate(0, 0)';
        }
        
        // Stop movement
        window.dispatchEvent(new CustomEvent('joystickMove', {
            detail: { x: 0, y: 0 }
        }));
    };

    if (!isMobile) return null;

    return (
        <div
            ref={joystickRef}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            className="fixed bottom-20 left-8 w-32 h-32 bg-gray-800 opacity-50 rounded-full flex items-center justify-center z-50 touch-none"
            style={{ touchAction: 'none' }}
        >
            <div className="w-24 h-24 bg-gray-700 bg-opacity-30 rounded-full flex items-center justify-center">
                <div
                    ref={knobRef}
                    className="w-12 h-12 bg-blue-500 bg-opacity-70 rounded-full shadow-lg transition-transform"
                    style={{ transform: 'translate(0, 0)' }}
                />
            </div>
        </div>
    );
}

export default MapPage;