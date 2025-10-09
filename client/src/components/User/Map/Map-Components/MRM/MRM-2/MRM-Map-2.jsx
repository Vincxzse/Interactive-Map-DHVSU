
export function createMRM2nd(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'mrm-floor').setOrigin(0, 0).setDepth(-1);

    // scene.armExit2 = scene.hitboxes.create((worldWidth / 2) + 30, 0, null).setSize(500, 10).setVisible(false);
    // scene.armExit3 = scene.hitboxes.create(170, worldHeight, null).setSize(300, 10).setVisible(false);
    // scene.armExit4 = scene.hitboxes.create(worldWidth - 170, worldHeight, null).setSize(300, 10).setVisible(false);

    // Rooms Right -------------------------------------------

    // Comlab 1
    scene.room6 = scene.physics.add.staticImage(-150, 220, 'room').setDisplaySize(350, 350).setDepth(1).setFlipX(true);
    scene.room6.body.setSize(347, 347);
    scene.room6.body.setOffset(967, 977);
    scene.mrm101door1 = scene.add.image(20, 120, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.mrm101door2 = scene.add.image(20, 280, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.wall11 = scene.physics.add.staticImage(11, 0, 'wall').setDisplaySize(30, 100).setDepth(2);
    scene.wall11.body.setOffset(0,0)
    scene.wall11.refreshBody()
    
    // 205
    scene.mrm1Room1Entrance1 = scene.hitboxes.create(worldWidth - 25, 95, null).setSize(10, 50).setVisible(false);
    scene.room2 = scene.physics.add.staticImage(worldWidth + 150, 220, 'room').setDisplaySize(350, 550).setDepth(2);
    scene.room2.body.setSize(347, 347);
    scene.room2.body.setOffset(967, 1050);
    scene.door2 = scene.physics.add.staticImage(worldWidth - 20, 83, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.door2.body.setOffset(0, 0)
    scene.door2.refreshBody()
    scene.door3 = scene.add.image(worldWidth - 20, 333, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.wall6 = scene.physics.add.staticImage(worldWidth - 11, - 10, 'wall').setDisplaySize(30, 100).setDepth(2);
    scene.wall6.body.setOffset(0,0)
    scene.wall6.refreshBody()
    scene.mrm1Room1Entrance2 = scene.hitboxes.create(worldWidth - 25, 345, null).setSize(10, 50).setVisible(false);

    // old library
    scene.room10 = scene.physics.add.staticImage(-150, 670, 'room').setDisplaySize(350, 550).setDepth(2).setFlipX(true);
    scene.room10.body.setSize(347, 347);
    scene.room10.body.setOffset(967, 977);
    scene.room102door2 = scene.add.image(20, 535, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.wall10 = scene.physics.add.staticImage(11, 425, 'wall').setDisplaySize(30, 100).setDepth(2);
    scene.wall10.body.setOffset(0,0)
    scene.wall10.refreshBody()
    scene.mrm10Room1Entrance2 = scene.hitboxes.create(worldWidth - 25, 345, null).setSize(10, 50).setVisible(false);
    
    // 203
    scene.room3 = scene.physics.add.staticImage(worldWidth - 495, worldHeight, 'room-wall').setDisplaySize(405, 70).setDepth(5);
    scene.room3.body.setOffset(0, 0);
    scene.room3.refreshBody();
    scene.room3.setCrop(0,0,4000,220);
    scene.room3Wall1 = scene.physics.add.staticImage(worldWidth - 300, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room3Wall1.body.setOffset(0, 0);
    scene.room3Wall1.refreshBody();
    scene.room3Wall2 = scene.physics.add.staticImage(worldWidth - 690, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room3Wall2.body.setOffset(0, 0);
    scene.room3Wall2.refreshBody();

    // 201
    scene.room4 = scene.physics.add.staticImage(550, worldHeight, 'room-wall').setDisplaySize(405, 70).setDepth(5);
    scene.room4.body.setOffset(0, 0);
    scene.room4.refreshBody();
    scene.room4.setCrop(0,0,4000,220);
    scene.room4Wall1 = scene.physics.add.staticImage(355, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room4Wall1.body.setOffset(0, 0);
    scene.room4Wall1.refreshBody();
    scene.room4Wall2 = scene.physics.add.staticImage(745, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room4Wall2.body.setOffset(0, 0);
    scene.room4Wall2.refreshBody();

    scene.mrm201door1 = scene.physics.add.staticImage(450, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.mrm201door1.body.setOffset(0, 0);
    scene.mrm201door1.refreshBody();
    scene.mrm201Entrance1 = scene.hitboxes.create(450, worldHeight, null).setSize(50, 10).setVisible(false);

    scene.mrm201door2 = scene.physics.add.staticImage(650, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.mrm201door2.body.setOffset(0, 0);
    scene.mrm201door2.refreshBody();
    scene.mrm201Entrance2 = scene.hitboxes.create(650, worldHeight, null).setSize(50, 10).setVisible(false);

    // 202
    scene.room4 = scene.physics.add.staticImage(1030, worldHeight, 'room-wall').setDisplaySize(405, 70).setDepth(5);
    scene.room4.body.setOffset(0, 0);
    scene.room4.refreshBody();
    scene.room4.setCrop(0,0,4000,220);
    scene.room4Wall1 = scene.physics.add.staticImage(835, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room4Wall1.body.setOffset(0, 0);
    scene.room4Wall1.refreshBody();
    scene.room4Wall1 = scene.physics.add.staticImage(795, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room4Wall1.body.setOffset(0, 0);
    scene.room4Wall1.refreshBody();
    scene.room4Wall2 = scene.physics.add.staticImage(1225, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room4Wall2.body.setOffset(0, 0);
    scene.room4Wall2.refreshBody();
    scene.room4Wall2 = scene.physics.add.staticImage(1265, worldHeight, 'room-wall').setDisplaySize(50, 70).setDepth(5);
    scene.room4Wall2.body.setOffset(0, 0);
    scene.room4Wall2.refreshBody();

    scene.mrm202door1 = scene.physics.add.staticImage(930, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.mrm202door1.body.setOffset(0, 0);
    scene.mrm202door1.refreshBody();
    scene.mrm202Entrance1 = scene.hitboxes.create(930, worldHeight, null).setSize(50, 10).setVisible(false);

    scene.mrm202door2 = scene.physics.add.staticImage(1130, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.mrm202door2.body.setOffset(0, 0);
    scene.mrm202door2.refreshBody();
    scene.mrm202Entrance2 = scene.hitboxes.create(1130, worldHeight, null).setSize(50, 10).setVisible(false);

    scene.MRM203Door1 = scene.physics.add.staticImage(worldWidth - 395, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.MRM203Door1.body.setOffset(0, 0);
    scene.MRM203Door1.refreshBody();
    scene.MRM203Entrance1 = scene.hitboxes.create(worldWidth - 395, worldHeight, null).setSize(50, 10).setVisible(false);

    scene.MRM203Door2 = scene.physics.add.staticImage(worldWidth - 595, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.MRM203Door2.body.setOffset(0, 0);
    scene.MRM203Door2.refreshBody();
    scene.MRM203Entrance2 = scene.hitboxes.create(worldWidth - 595, worldHeight, null).setSize(50, 10).setVisible(false);
    
    scene.stair2 = scene.physics.add.staticImage(1775, worldHeight, 'stairs').setDisplaySize(100, 100);
    scene.stair2.body.setOffset(0, 0);
    scene.stair2.refreshBody();
    scene.stair2.setCrop(0,350,2300,1000);
    
    scene.stair3 = scene.physics.add.staticImage(280, worldHeight, 'stairs').setDisplaySize(100, 100);
    scene.stair3.body.setOffset(0, 0);
    scene.stair3.refreshBody();
    scene.stair3.setCrop(0,350,2300,1000);

    scene.mrm2stair1 = scene.hitboxes.create(1775, worldHeight, null).setSize(100, 10).setVisible(false);
    scene.mrm2stair2 = scene.hitboxes.create(280, worldHeight, null).setSize(100, 10).setVisible(false);
    // End of rooms left
    
    
    // Gutter -------------------------------------------
    scene.gutterY1 = scene.physics.add.staticImage(worldWidth - 300, 100, 'gutterY').setDisplaySize(50, 400).setDepth(3)
    scene.gutterY1.body.setOffset(0, 0);
    scene.gutterY1.refreshBody();

    scene.gutterX1 = scene.physics.add.staticImage(1030, 275, 'gutterX').setDisplaySize(1350, 50);
    scene.gutterX1.body.setOffset(0, 0);
    scene.gutterX1.refreshBody();

    scene.gutterY2 = scene.physics.add.staticImage(350, 100, 'gutterY').setDisplaySize(50, 400)
    scene.gutterY2.body.setOffset(0, 0);
    scene.gutterY2.refreshBody();

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
    scene.physics.add.collider(scene.player, scene.guidanceClinic);
    scene.physics.add.collider(scene.player, scene.guidanceClinicWall1);
    scene.physics.add.collider(scene.player, scene.guidanceClinicWall2);
    scene.physics.add.collider(scene.player, scene.gutterY1);
    scene.physics.add.collider(scene.player, scene.gutterY2);
    scene.physics.add.collider(scene.player, scene.gutterX1);
    scene.physics.add.collider(scene.player, scene.gutterX2);
    scene.physics.add.collider(scene.player, scene.room6);
    scene.physics.add.collider(scene.player, scene.wall11);
    scene.physics.add.collider(scene.player, scene.wall10);
    scene.physics.add.collider(scene.player, scene.room10);
    scene.physics.add.collider(scene.player, scene.room2);
    scene.physics.add.collider(scene.player, scene.wall6);
    scene.physics.add.collider(scene.player, scene.door2);

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

