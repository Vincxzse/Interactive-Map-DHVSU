
export function createAdmin(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'mrm-floor').setOrigin(0, 0).setDepth(-1);

    scene.admin1 = scene.physics.add.staticImage(375, 560, 'admin1').setDisplaySize(800, 500).setDepth(2);
    scene.admin1.body.setOffset(0, 0)
    scene.admin1.refreshBody()

    scene.admin2 = scene.physics.add.staticImage(worldWidth - 375, 500, 'admin2').setDisplaySize(800, 600).setDepth(2);
    scene.admin2.body.setOffset(0, 0)
    scene.admin2.refreshBody()

    scene.admin3 = scene.physics.add.staticImage(375, -170, 'admin3').setDisplaySize(800, 500).setDepth(2);
    scene.admin3.body.setOffset(0, 0)
    scene.admin3.refreshBody()

    scene.adminCR = scene.physics.add.staticImage(worldWidth - 375, -170, 'adminCR').setDisplaySize(800, 500).setDepth(2);
    scene.adminCR.body.setOffset(0, 0)
    scene.adminCR.refreshBody()

    scene.admin4 = scene.physics.add.staticImage(worldWidth / 2, -120, 'admin4').setDisplaySize(300, 400).setDepth(2);
    scene.admin4.body.setOffset(0, 0)
    scene.admin4.refreshBody()

    // Exits
    scene.AdminExit1 = scene.hitboxes.create(worldWidth / 2, worldHeight, null).setSize(500, 10).setVisible(false);

    scene.physics.add.overlap(scene.player, scene.exit1, () => {
        Object.values(scene.children.list).forEach(obj => obj.destroy());
        scene.physics.world.colliders.destroy();

        createOutside(scene, worldWidth, worldHeight);
        scene.currentMap = "outside";
    });

    // Player and colliders
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.admin1);
    scene.physics.add.collider(scene.player, scene.admin2);
    scene.physics.add.collider(scene.player, scene.admin3);
    scene.physics.add.collider(scene.player, scene.admin4);
    scene.physics.add.collider(scene.player, scene.adminCR);

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    
    // Keyboard movements
    scene.cursor = scene.input.keyboard.createCursorKeys();
    scene.keys = scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
    });
    scene.player.setCollideWorldBounds(true);

    // Zoom-in zoom-out functionality
    scene.input.on('wheel', (pointer, GameObjects, deltaX, deltaY) => {
        let cam = scene.cameras.main;
        let zoomChange = deltaY > 0 ? - 0.05 : 0.05;
        let newZoom = Phaser.Math.Clamp(cam.zoom + zoomChange, 1, 2);
        cam.zoomTo(newZoom, 10);
    });
}

