
// Helper function to notify React of location changes
function notifyLocationChange(location, targets) {
    window.dispatchEvent(new CustomEvent('locationChanged', {
        detail: { location, targets }
    }));
}

export function createMRM(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    notifyLocationChange('mrm', [
        { key: 'mrm101', label: 'MRM 101', color: 'bg-purple-500' },
        { key: 'mrm102', label: 'MRM 102', color: 'bg-purple-600' },
        { key: 'mrm103', label: 'MRM 103', color: 'bg-purple-700' },
        { key: 'gc1', label: 'Guidance Office 1', color: 'bg-green-500' },
        { key: 'gc2', label: 'Guidance Office 2', color: 'bg-green-600' },
        { key: 'faculty', label: 'Faculty Room', color: 'bg-blue-500' },
        { key: 'exit', label: 'Exit Building', color: 'bg-red-500' }
    ]);

    scene.compass = scene.add.image(80, scene.scale.height - 80, 'gps')
        .setOrigin(0.5)
        .setScrollFactor(0)
        .setDepth(1000)
        .setScale(0.8)
    scene.compass.setDepth(1000)

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'mrm-floor').setOrigin(0, 0).setDepth(-1);

    // Rooms Right -------------------------------------------

    scene.room6 = scene.physics.add.staticImage(-150, 220, 'room').setDisplaySize(350, 350).setDepth(1).setFlipX(true);
    scene.room6.body.setSize(347, 347);
    scene.room6.body.setOffset(967, 977);
    scene.mrm101door1 = scene.add.image(20, 120, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.mrm101door2 = scene.add.image(20, 280, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.wall11 = scene.physics.add.staticImage(11, 0, 'wall').setDisplaySize(30, 100).setDepth(2);
    scene.wall11.body.setOffset(0,0)
    scene.wall11.refreshBody()
    
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
    scene.facultyEntrance1 = scene.hitboxes.create(worldWidth - 25, 95, null).setSize(10, 50).setVisible(false);
    scene.facultyEntrance2 = scene.hitboxes.create(worldWidth - 25, 345, null).setSize(10, 50).setVisible(false);

    scene.room10 = scene.physics.add.staticImage(-150, 670, 'room').setDisplaySize(350, 550).setDepth(2).setFlipX(true);
    scene.room10.body.setSize(347, 347);
    scene.room10.body.setOffset(967, 977);
    scene.room102door2 = scene.add.image(20, 535, 'door-side').setDisplaySize(10, 70).setDepth(2);
    scene.wall10 = scene.physics.add.staticImage(11, 425, 'wall').setDisplaySize(30, 100).setDepth(2);
    scene.wall10.body.setOffset(0,0)
    scene.wall10.refreshBody()
    // scene.mrm10Room1Entrance2 = scene.hitboxes.create(worldWidth - 25, 345, null).setSize(10, 50).setVisible(false);
    
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
    
    scene.GCdoor1 = scene.physics.add.staticImage(worldWidth - 395, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.GCdoor1.body.setOffset(0, 0);
    scene.GCdoor1.refreshBody();
    scene.GCEntrance2 = scene.hitboxes.create(worldWidth - 395, worldHeight, null).setSize(50, 10).setVisible(false);

    scene.GCdoor2 = scene.physics.add.staticImage(worldWidth - 595, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.GCdoor2.body.setOffset(0, 0);
    scene.GCdoor2.refreshBody();
    scene.GCEntrance1 = scene.hitboxes.create(worldWidth - 595, worldHeight, null).setSize(50, 10).setVisible(false);

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

    scene.mrm103door1 = scene.physics.add.staticImage(450, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.mrm103door1.body.setOffset(0, 0);
    scene.mrm103door1.refreshBody();
    scene.mrm103Entrance1 = scene.hitboxes.create(450, worldHeight, null).setSize(50, 10).setVisible(false);

    scene.mrm103door2 = scene.physics.add.staticImage(650, worldHeight, 'door-front').setDisplaySize(70, 70).setDepth(6)
    scene.mrm103door2.body.setOffset(0, 0);
    scene.mrm103door2.refreshBody();
    scene.mrm103Entrance2 = scene.hitboxes.create(650, worldHeight, null).setSize(50, 10).setVisible(false);

    scene.room5 = scene.physics.add.staticImage(130, worldHeight, 'room-wall').setDisplaySize(180, 70).setDepth(5);
    scene.room5.body.setOffset(0, 0);
    scene.room5.refreshBody();
    scene.room5.setCrop(0,0,4000,220);
    scene.room5Wall1 = scene.physics.add.staticImage(220, worldHeight, 'room-wall').setDisplaySize(20, 70).setDepth(5);
    scene.room5Wall1.body.setOffset(0, 0);
    scene.room5Wall1.refreshBody();
    scene.room5Wall2 = scene.physics.add.staticImage(50, worldHeight, 'room-wall').setDisplaySize(20, 70).setDepth(5);
    scene.room5Wall2.body.setOffset(0, 0);
    scene.room5Wall2.refreshBody();
    
    scene.stair2 = scene.physics.add.staticImage(1775, worldHeight, 'stairs').setDisplaySize(100, 100);
    scene.stair2.body.setOffset(0, 0);
    scene.stair2.refreshBody();
    scene.stair2.setCrop(0,350,2300,1000);
    
    scene.stair3 = scene.physics.add.staticImage(280, worldHeight, 'stairs').setDisplaySize(100, 100);
    scene.stair3.body.setOffset(0, 0);
    scene.stair3.refreshBody();
    scene.stair3.setCrop(0,350,2300,1000);

    scene.mrmStair2 = scene.hitboxes.create(1775, worldHeight, null).setSize(100, 10).setVisible(false);
    scene.mrmStair3 = scene.hitboxes.create(280, worldHeight, null).setSize(100, 10).setVisible(false);
    // End of rooms left

    // Entrances
    scene.mrm101Entrance1 = scene.hitboxes.create(25, 132, null).setSize(10, 50).setVisible(false);
    scene.mrm101Entrance2 = scene.hitboxes.create(25, 292, null).setSize(10, 50).setVisible(false);
    scene.mrm102Entrance1 = scene.hitboxes.create(25, 547, null).setSize(10, 50).setVisible(false);
    
    // Gutter -------------------------------------------
    scene.gutterY1 = scene.physics.add.staticImage(worldWidth - 300, 100, 'gutterY').setDisplaySize(50, 400)
    scene.gutterY1.body.setOffset(0, 0);
    scene.gutterY1.refreshBody();

    scene.gutterX1 = scene.physics.add.staticImage(worldWidth - 525, 275, 'gutterX').setDisplaySize(400, 50);
    scene.gutterX1.body.setOffset(0, 0);
    scene.gutterX1.refreshBody();

    scene.gutterY2 = scene.physics.add.staticImage(350, 100, 'gutterY').setDisplaySize(50, 400)
    scene.gutterY2.body.setOffset(0, 0);
    scene.gutterY2.refreshBody();

    scene.gutterX2 = scene.physics.add.staticImage(575, 275, 'gutterX').setDisplaySize(400, 50);
    scene.gutterX2.body.setOffset(0, 0);
    scene.gutterX2.refreshBody();

    scene.stair1 = scene.physics.add.staticImage(1025, 205, 'stairs').setDisplaySize(500, 200);
    scene.stair1.body.setOffset(0, 0);
    scene.stair1.refreshBody();
    scene.hitboxes = scene.physics.add.staticGroup();

    scene.MRMExit1 = scene.hitboxes.create(1025, 100, null).setSize(500, 10).setVisible(false);
    scene.MRMExit2 = scene.hitboxes.create(1025, worldHeight, null).setSize(500, 10).setVisible(false);
    scene.MRMExit3 = scene.hitboxes.create(175, 0, null).setSize(300, 10).setVisible(false);
    scene.MRMExit4 = scene.hitboxes.create(worldWidth - 170, 0, null).setSize(300, 10).setVisible(false);

    scene.availableTargets = {
        mrm101: scene.mrm101Entrance1,
        mrm102: scene.mrm102Entrance1,
        mrm103: scene.mrm103Entrance1,
        gc1: scene.GCEntrance1,
        gc2: scene.GCEntrance2,
        faculty: scene.facultyEntrance1,
        exit: scene.MRMExit1
    };

    scene.physics.add.overlap(scene.player, scene.exit1, () => {
        Object.values(scene.children.list).forEach(obj => obj.destroy());
        scene.physics.world.colliders.destroy();

        createOutside(scene, worldWidth, worldHeight);
        scene.currentMap = "outside";
    });
    // End of gutter ------------------------------------

    // Player and colliders
    // scene.player = scene.physics.add.image(playerPositionX, playerPositionY, 'avatar').setOrigin(0.5, 0.5).setDisplaySize(60, 60).setDepth(3);
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
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

