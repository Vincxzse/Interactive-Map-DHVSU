
export function createARM(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'mrm-floor').setOrigin(0, 0).setDepth(-1);

    scene.armExit2 = scene.hitboxes.create((worldWidth / 2) + 30, 0, null).setSize(500, 10).setVisible(false);
    scene.armExit3 = scene.hitboxes.create(170, worldHeight, null).setSize(300, 10).setVisible(false);
    scene.armExit4 = scene.hitboxes.create(worldWidth - 170, worldHeight, null).setSize(300, 10).setVisible(false);

    // Rooms Right -------------------------------------------
    scene.room1 = scene.physics.add.staticImage(worldWidth + 150, 170, 'room').setDisplaySize(350, 350).setDepth(1);
    scene.room1.body.setSize(347, 347);
    scene.room1.body.setOffset(967, 977);
    scene.wall1 = scene.add.image(worldWidth - 10, 70, 'wall').setDisplaySize(30, 100).setDepth(2);
    scene.door1 = scene.add.image(worldWidth - 20, 228, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.arm1Room1Entrance1 = scene.hitboxes.create(worldWidth - 25, 430, null).setSize(10, 50).setVisible(false);

    scene.room2 = scene.physics.add.staticImage(worldWidth + 150, 520, 'room').setDisplaySize(350, 350).setDepth(2);
    scene.room2.body.setSize(347, 347);
    scene.room2.body.setOffset(967, 977);
    scene.door2 = scene.add.image(worldWidth - 20, 420, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.door3 = scene.add.image(worldWidth - 20, 578, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.arm1Room1Entrance2 = scene.hitboxes.create(worldWidth - 25, 590, null).setSize(10, 50).setVisible(false);
    
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
    scene.arm102Entrance1 = scene.hitboxes.create(worldWidth - 25, 240, null).setSize(10, 50).setVisible(false);
    
    scene.bodega1 = scene.physics.add.staticImage(worldWidth - 120, -20, 'bodega').setDisplaySize(200, 200).setDepth(1);
    scene.bodega1.body.setOffset(0, 0);
    scene.bodega1.refreshBody();
    
    scene.stair2 = scene.physics.add.staticImage(1730, 10, 'stairs').setDisplaySize(100, 100);
    scene.stair2.body.setOffset(0, 0);
    scene.stair2.refreshBody();

    scene.armStair2 = scene.hitboxes.create(1730, 10, null).setSize(100, 10).setVisible(false);
    // End of rooms right -------------------------------------
    
    // Rooms Left ---------------------------------------------
    scene.guidanceClinic = scene.physics.add.staticImage(560, 35, 'room-wall').setDisplaySize(400, 70).setDepth(1);
    scene.guidanceClinic.body.setOffset(0, 0);
    scene.guidanceClinic.refreshBody();
    scene.guidanceClinicWall1 = scene.physics.add.staticImage(750, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.guidanceClinicWall1.body.setOffset(0, 0);
    scene.guidanceClinicWall1.refreshBody();
    scene.guidanceClinicWall2 = scene.physics.add.staticImage(370, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.guidanceClinicWall2.body.setOffset(0, 0);
    scene.guidanceClinicWall2.refreshBody();
    
    scene.guidanceClinicDoor1 = scene.physics.add.staticImage(450, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.guidanceClinicDoor1.body.setOffset(0, 0);
    scene.guidanceClinicDoor1.refreshBody();
    scene.guidanceClinicDoor2 = scene.physics.add.staticImage(670, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.guidanceClinicDoor2.body.setOffset(0, 0);
    scene.guidanceClinicDoor2.refreshBody();

    scene.guidanceClinicWindow1 = scene.physics.add.staticImage(500, 20, 'window2').setDisplaySize(50, 25).setDepth(2);
    scene.guidanceClinicWindow1.body.setOffset(0, 0);
    scene.guidanceClinicWindow1.refreshBody();
    scene.guidanceClinicWindow2 = scene.physics.add.staticImage(620, 20, 'window2').setDisplaySize(50, 25).setDepth(2);
    scene.guidanceClinicWindow2.body.setOffset(0, 0);
    scene.guidanceClinicWindow2.refreshBody();
    
    scene.facultyUpperWall1 = scene.physics.add.staticImage(20, 280, 'upperWallX').setDisplaySize(40, 150).setDepth(2);
    scene.facultyUpperWall1.body.setOffset(0, 0);
    scene.facultyUpperWall1.refreshBody();
    scene.facultyUpperWall1.setCrop(0, 0, 5000, 200);
    scene.facultyWall1 = scene.physics.add.staticImage(20, 300, 'wall').setDisplaySize(40, 100).setDepth(2);
    scene.facultyWall1.body.setOffset(0, 0);
    scene.facultyWall1.refreshBody();
    scene.facultyDoor1 = scene.physics.add.staticImage(20, 350, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.facultyDoor1.body.setOffset(0, 0);
    scene.facultyDoor1.refreshBody();
    scene.facultyWall2 = scene.physics.add.staticImage(20, 478, 'wall').setDisplaySize(40, 200).setDepth(2);
    scene.facultyWall2.body.setOffset(0, 0);
    scene.facultyWall2.refreshBody();
    scene.facultyWall2.setCrop(0, 25, 5000, 20000);
    scene.facultyDoor2 = scene.physics.add.staticImage(20, 580, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.facultyDoor2.body.setOffset(0, 0);
    scene.facultyDoor2.refreshBody();
    scene.facultyWall3 = scene.physics.add.staticImage(20, 650, 'wall').setDisplaySize(40, 70).setDepth(2);
    scene.facultyWall3.body.setOffset(0, 0);
    scene.facultyWall3.refreshBody();

    scene.facultyEntrance1 = scene.hitboxes.create(40, 360, null).setSize(10, 50).setVisible(false);
    scene.facultyEntrance2 = scene.hitboxes.create(40, 590, null).setSize(10, 50).setVisible(false);
    
    scene.stair3 = scene.physics.add.staticImage(295, 10, 'stairs').setDisplaySize(100, 100);
    scene.stair3.body.setOffset(0, 0);
    scene.stair3.refreshBody();

    scene.armStair3 = scene.hitboxes.create(295, 10, null).setSize(100, 10).setVisible(false);
    // End of rooms left
    
    
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

    scene.gutterX2 = scene.physics.add.staticImage(575, 325, 'gutterX').setDisplaySize(400, 50);
    scene.gutterX2.body.setOffset(0, 0);
    scene.gutterX2.refreshBody();

    scene.stair1 = scene.physics.add.staticImage(1025, 400, 'stairs').setDisplaySize(500, 200);
    scene.stair1.body.setOffset(0, 0);
    scene.stair1.refreshBody();
    scene.hitboxes = scene.physics.add.staticGroup();
    scene.exit1 = scene.hitboxes.create(1025, 500, null).setSize(500, 10).setVisible(false);

    scene.physics.add.overlap(scene.player, scene.exit1, () => {
        Object.values(scene.children.list).forEach(obj => obj.destroy());
        scene.physics.world.colliders.destroy();

        createOutside(scene, worldWidth, worldHeight);
        scene.currentMap = "outside";
    });
    // End of gutter ------------------------------------

    // Player and colliders
    scene.player = scene.physics.add.image(playerPositionX, playerPositionY, 'avatar')
        .setOrigin(0.5, 0.5)
        .setDisplaySize(60, 60)
        .setDepth(3);
    scene.player.body.setSize(250, 400);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.room1);
    scene.physics.add.collider(scene.player, scene.room2);
    scene.physics.add.collider(scene.player, scene.bodega1);
    scene.physics.add.collider(scene.player, scene.room3);
    scene.physics.add.collider(scene.player, scene.room3Wall1);
    scene.physics.add.collider(scene.player, scene.room3Wall2);
    scene.physics.add.collider(scene.player, scene.guidanceClinic);
    scene.physics.add.collider(scene.player, scene.guidanceClinicWall1);
    scene.physics.add.collider(scene.player, scene.guidanceClinicWall2);
    scene.physics.add.collider(scene.player, scene.gutterY1);
    scene.physics.add.collider(scene.player, scene.gutterY2);
    scene.physics.add.collider(scene.player, scene.gutterX1);
    scene.physics.add.collider(scene.player, scene.gutterX2);
    scene.physics.add.collider(scene.player, scene.facultyUpperWall1);
    scene.physics.add.collider(scene.player, scene.facultyWall1);
    scene.physics.add.collider(scene.player, scene.facultyWall2);
    scene.physics.add.collider(scene.player, scene.facultyWall3);

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

