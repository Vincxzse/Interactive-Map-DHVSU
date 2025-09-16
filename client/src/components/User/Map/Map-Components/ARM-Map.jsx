
export function createARM(scene, worldWidth, worldHeight) {
    const centerX = worldWidth;
    const centerY = worldHeight;

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight / 5, 'mrm-floor').setOrigin(0, 0).setDepth(-1);

    // Rooms -------------------------------------------
    scene.room1 = scene.physics.add.staticImage(worldWidth + 150, 170, 'room').setDisplaySize(350, 350).setDepth(1);
    scene.room1.body.setSize(347, 347);
    scene.room1.body.setOffset(967, 977);
    scene.wall1 = scene.add.image(worldWidth - 10, 70, 'wall').setDisplaySize(30, 100).setDepth(2);
    scene.door1 = scene.add.image(worldWidth - 20, 228, 'door-side').setDisplaySize(10, 70).setDepth(2);

    scene.room2 = scene.physics.add.staticImage(worldWidth + 150, 520, 'room').setDisplaySize(350, 350).setDepth(2);
    scene.room2.body.setSize(347, 347);
    scene.room2.body.setOffset(967, 977);
    scene.door2 = scene.add.image(worldWidth - 20, 420, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.door3 = scene.add.image(worldWidth - 20, 578, 'door-side').setDisplaySize(10, 70).setDepth(2);
    
    
    scene.room3 = scene.physics.add.staticImage(worldWidth - 520, 35, 'room-wall').setDisplaySize(350, 70).setDepth(2);
    scene.room3.body.setOffset(0, 0);
    scene.room3.refreshBody();
    scene.room3window = scene.physics.add.staticImage(worldWidth - 520, 20, 'window1').setDisplaySize(150, 20).setDepth(2);
    scene.room3window.body.setOffset(0, 0);
    scene.room3window.refreshBody();
    scene.room3Wall1 = scene.physics.add.staticImage(worldWidth - 345, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room3Wall1.body.setOffset(0, 0);
    scene.room3Wall1.refreshBody();
    scene.room3Wall2 = scene.physics.add.staticImage(worldWidth - 690, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room3Wall2.body.setOffset(0, 0);
    scene.room3Wall2.refreshBody();
    scene.room3Door1 = scene.physics.add.staticImage(worldWidth - 630, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room3Door1.body.setOffset(0, 0);
    scene.room3Door1.refreshBody();
    scene.room3Door2 = scene.physics.add.staticImage(worldWidth - 410, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room3Door2.body.setOffset(0, 0);
    scene.room3Door2.refreshBody();

    scene.bodega1 = scene.physics.add.staticImage(worldWidth - 120, -20, 'bodega').setDisplaySize(200, 200).setDepth(1);
    scene.bodega1.body.setOffset(0, 0);
    scene.bodega1.refreshBody();
    
    scene.stair2 = scene.physics.add.staticImage(1730, 10, 'stairs').setDisplaySize(100, 100);
    scene.stair2.body.setOffset(0, 0);
    scene.stair2.refreshBody();
    // End of rooms -------------------------------------

    // Gutter -------------------------------------------
    scene.gutterY1 = scene.physics.add.staticImage(worldWidth - 300, 500, 'gutterY').setDisplaySize(50, 400)
    scene.gutterY1.body.setOffset(0, 0);
    scene.gutterY1.refreshBody();

    scene.gutterX1 = scene.physics.add.staticImage(worldWidth - 525, 325, 'gutterX').setDisplaySize(400, 50);
    scene.gutterX1.body.setOffset(0, 0);
    scene.gutterX1.refreshBody();

    scene.gutterY2 = scene.physics.add.staticImage(350, 500, 'gutterY').setDisplaySize(50, 400)
    scene.gutterY2.body.setOffset(0, 0);
    scene.gutterY2.refreshBody();

    scene.gutterX1 = scene.physics.add.staticImage(575, 325, 'gutterX').setDisplaySize(400, 50);
    scene.gutterX1.body.setOffset(0, 0);
    scene.gutterX1.refreshBody();

    scene.stair1 = scene.physics.add.staticImage(1025, 400, 'stairs').setDisplaySize(500, 200);
    scene.stair1.body.setOffset(0, 0);
    scene.stair1.refreshBody();
    // End of gutter ------------------------------------

    // Shed
    // scene.shed = scene.physics.add.staticImage(500, 850, 'shed1').setOrigin(0, 0).setDepth(3);

    // Player and colliders
    scene.player = scene.physics.add.image(centerX / 1.5, centerY/15, 'avatar')
        .setOrigin(0.5, 0.5)
        .setDisplaySize(60, 60)
        .setDepth(3);
    scene.player.body.setSize(250, 400);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.room1);
    scene.physics.add.collider(scene.player, scene.room2);

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
        let newZoom = Phaser.Math.Clamp(cam.zoom + zoomChange, 0.76, 2);
        cam.zoomTo(newZoom, 10);
    });
}