
export function createARM2nd(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {
    const centerX = worldWidth;
    const centerY = worldHeight;

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'mrm-floor').setOrigin(0, 0).setDepth(-1);

    // Rooms Right -------------------------------------------
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
    
    
    scene.room3 = scene.physics.add.staticImage(worldWidth - 620, 35, 'room-wall').setDisplaySize(350, 70).setDepth(2);
    scene.room3.body.setOffset(0, 0);
    scene.room3.refreshBody();
    scene.room3window = scene.physics.add.staticImage(worldWidth - 620, 20, 'window1').setDisplaySize(150, 20).setDepth(2);
    scene.room3window.body.setOffset(0, 0);
    scene.room3window.refreshBody();
    scene.room3Wall1 = scene.physics.add.staticImage(worldWidth - 445, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room3Wall1.body.setOffset(0, 0);
    scene.room3Wall1.refreshBody();
    scene.room3Wall2 = scene.physics.add.staticImage(worldWidth - 790, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room3Wall2.body.setOffset(0, 0);
    scene.room3Wall2.refreshBody();
    scene.room3Door1 = scene.physics.add.staticImage(worldWidth - 730, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room3Door1.body.setOffset(0, 0);
    scene.room3Door1.refreshBody();
    scene.room3Door2 = scene.physics.add.staticImage(worldWidth - 510, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room3Door2.body.setOffset(0, 0);
    scene.room3Door2.refreshBody();

    scene.room4 = scene.physics.add.staticImage(worldWidth - 965, 35, 'room-wall').setDisplaySize(350, 70).setDepth(2);
    scene.room4.body.setOffset(0, 0);
    scene.room4.refreshBody();
    scene.room4window = scene.physics.add.staticImage(worldWidth - 965, 20, 'window1').setDisplaySize(150, 20).setDepth(2);
    scene.room4window.body.setOffset(0, 0);
    scene.room4window.refreshBody();
    scene.room4Wall1 = scene.physics.add.staticImage(worldWidth - 790, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room4Wall1.body.setOffset(0, 0);
    scene.room4Wall1.refreshBody();
    scene.room4Wall2 = scene.physics.add.staticImage(worldWidth - 1135, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room4Wall2.body.setOffset(0, 0);
    scene.room4Wall2.refreshBody();
    scene.room4Door1 = scene.physics.add.staticImage(worldWidth - 1075, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room4Door1.body.setOffset(0, 0);
    scene.room4Door1.refreshBody();
    scene.room4Door2 = scene.physics.add.staticImage(worldWidth - 855, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room4Door2.body.setOffset(0, 0);
    scene.room4Door2.refreshBody();

    scene.room5 = scene.physics.add.staticImage(worldWidth - 1360, 35, 'room-wall').setDisplaySize(350, 70).setDepth(2);
    scene.room5.body.setOffset(0, 0);
    scene.room5.refreshBody();
    scene.room5window = scene.physics.add.staticImage(worldWidth - 1360, 20, 'window1').setDisplaySize(150, 20).setDepth(2);
    scene.room5window.body.setOffset(0, 0);
    scene.room5window.refreshBody();
    scene.room5Wall1 = scene.physics.add.staticImage(worldWidth - 1185, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room5Wall1.body.setOffset(0, 0);
    scene.room5Wall1.refreshBody();
    scene.room5Wall2 = scene.physics.add.staticImage(worldWidth - 1530, 20, 'room-wall').setDisplaySize(50, 100).setDepth(2);
    scene.room5Wall2.body.setOffset(0, 0);
    scene.room5Wall2.refreshBody();
    scene.room5Door1 = scene.physics.add.staticImage(worldWidth - 1470, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room5Door1.body.setOffset(0, 0);
    scene.room5Door1.refreshBody();
    scene.room5Door2 = scene.physics.add.staticImage(worldWidth - 1250, 45, 'door-front').setDisplaySize(70, 70).setDepth(2);
    scene.room5Door2.body.setOffset(0, 0);
    scene.room5Door2.refreshBody();
    
    scene.stair2 = scene.physics.add.staticImage(1730, 10, 'stairs').setDisplaySize(100, 100);
    scene.stair2.body.setOffset(0, 0);
    scene.stair2.refreshBody();

    scene.armDown2 = scene.hitboxes.create(1730, 10, null).setSize(100, 10).setVisible(false);
    // End of rooms right -------------------------------------
    
    // Rooms Left ---------------------------------------------    
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
    scene.facultyWall3 = scene.physics.add.staticImage(20, 655, 'wall').setDisplaySize(40, 85).setDepth(2);
    scene.facultyWall3.body.setOffset(0, 0);
    scene.facultyWall3.refreshBody();

    scene.CL2Entrance1 = scene.hitboxes.create(40, 360, null).setSize(10, 50).setVisible(false);
    scene.CL2Entrance2 = scene.hitboxes.create(40, 590, null).setSize(10, 50).setVisible(false);

    scene.facultyUpperWall4 = scene.physics.add.staticImage(20, 75, 'upperWallX').setDisplaySize(40, 150).setDepth(2);
    scene.facultyUpperWall4.body.setOffset(0, 0);
    scene.facultyUpperWall4.refreshBody();
    scene.facultyUpperWall4.setCrop(0, 0, 5000, 200);
    scene.facultyWall5 = scene.physics.add.staticImage(20, 95, 'wall').setDisplaySize(40, 145).setDepth(2);
    scene.facultyWall5.body.setOffset(0, 0);
    scene.facultyWall5.refreshBody();
    scene.facultyDoor5 = scene.physics.add.staticImage(20, 170, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.facultyDoor5.body.setOffset(0, 0);
    scene.facultyDoor5.refreshBody();
    
    scene.stair3 = scene.physics.add.staticImage(295, 10, 'stairs').setDisplaySize(100, 100);
    scene.stair3.body.setOffset(0, 0);
    scene.stair3.refreshBody();

    scene.armDown3 = scene.hitboxes.create(295, 10, null).setSize(100, 10).setVisible(false);
    // End of rooms left --------------------------------
    
    // Gutter -------------------------------------------
    scene.gutterX2 = scene.physics.add.staticImage(1030, 325, 'gutterX').setDisplaySize(1350, 50);
    scene.gutterX2.body.setOffset(0, 0);
    scene.gutterX2.refreshBody();

    scene.gutterY1 = scene.physics.add.staticImage(worldWidth - 300, 500, 'gutterY').setDisplaySize(50, 400)
    scene.gutterY1.body.setOffset(0, 0);
    scene.gutterY1.refreshBody();

    scene.gutterY2 = scene.physics.add.staticImage(350, 500, 'gutterY').setDisplaySize(50, 400)
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
    scene.physics.add.collider(scene.player, scene.gutterY1);
    scene.physics.add.collider(scene.player, scene.gutterY2);
    scene.physics.add.collider(scene.player, scene.gutterX2);
    scene.physics.add.collider(scene.player, scene.facultyUpperWall1);
    scene.physics.add.collider(scene.player, scene.facultyWall1);
    scene.physics.add.collider(scene.player, scene.facultyWall2);
    scene.physics.add.collider(scene.player, scene.facultyWall3);
    scene.physics.add.collider(scene.player, scene.room1);
    scene.physics.add.collider(scene.player, scene.room2);
    scene.physics.add.collider(scene.player, scene.bodega1);
    scene.physics.add.collider(scene.player, scene.room3);
    scene.physics.add.collider(scene.player, scene.room3Wall1);
    scene.physics.add.collider(scene.player, scene.room3Wall2);
    scene.physics.add.collider(scene.player, scene.room4);
    scene.physics.add.collider(scene.player, scene.room4Wall1);
    scene.physics.add.collider(scene.player, scene.room4Wall2);
    scene.physics.add.collider(scene.player, scene.room5);
    scene.physics.add.collider(scene.player, scene.room5Wall1);
    scene.physics.add.collider(scene.player, scene.room5Wall2);

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
}

