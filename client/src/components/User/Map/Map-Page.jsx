import React, { useEffect } from "react";
import Phaser, { GameObjects } from 'phaser';
import { createOutside } from './Map-Components/Outside-Map';

function MapPage() {
    const speedDown = 10;
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
            this.load.image('bg1', '/map-assets/pathway.png');
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
            this.load.image('shedSH', '/map-assets/shedSH.png');
            this.load.image('canteen', '/map-assets/canteen.png');
            this.load.image('court', '/map-assets/court.png');
            this.load.image('erm', '/map-assets/erm.png');
            this.load.image('road', '/map-assets/road.png');
            this.load.image('tree', '/map-assets/tree.png');
            this.load.image('flag', '/map-assets/flag.png');
        }

        create() {
            const worldWidth = 2000;
            const worldHeight = 3500;

            createOutside(this, worldWidth, worldHeight);
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
        scale: {
            mode: Phaser.Scale.RESIZE,          // resize to fit parent
            autoCenter: Phaser.Scale.CENTER_BOTH, // center inside parent
        },
    };

    useEffect(() => {
        const game = new Phaser.Game(config);
        return () => game.destroy(true);
    }, []);

    return(
        <>
            <div className="relative flex flex-col w-full h-full items-start justify-start gap-2 bg-[#2B313C] rounded-lg overflow-hidden" id="map-container">
                <p className="absolute text-red-500 font-bolder bg-white">TEST</p>
            </div>
        </>
    );
}

export default MapPage;