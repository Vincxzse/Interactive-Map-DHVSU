
export function createOutside(scene, worldWidth, worldHeight) {
    const centerX = worldWidth;
    const centerY = worldHeight;

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'bg1').setOrigin(0, 0);

    // Admin Building
    scene.admin = scene.physics.add.staticImage(820, 2400, 'admin').setOrigin(0, 0).setDepth(5);
    scene.admin.body.setSize(scene.admin.width - 20, scene.admin.height - 200);
    scene.admin.body.setOffset(scene.admin.width - 455, scene.admin.height);
    scene.adminGrass1 = scene.physics.add.image(scene.admin.width - 110, scene.admin.height + 2380, 'grass').setDisplaySize(scene.admin.width, 20).setOrigin(0, 0).setDepth(1);
    scene.adminGrass2 = scene.physics.add.image(scene.admin.width - 140, scene.admin.height + 2200, 'grass').setDisplaySize(70, scene.admin.height / 2).setOrigin(0, 0).setDepth(1);
    scene.adminGrass23 = scene.physics.add.image(scene.admin.width + 775, scene.admin.height + 2200, 'grass').setDisplaySize(70, scene.admin.height / 2).setOrigin(0, 0).setDepth(1);
    scene.adminCurb1 = scene.physics.add.image(scene.admin.width + 200, scene.admin.height + 2410, 'curb').setDepth(1);
    scene.adminCurb2 = scene.physics.add.image(scene.admin.width + 503, scene.admin.height + 2410, 'curb').setDepth(1);
    scene.adminCurb3 = scene.physics.add.image(scene.admin.width - 150, scene.admin.height + 2523, 'curb').setDepth(1);
    scene.adminCurb3.setAngle(90);
    scene.adminCurb3.setCrop(0, 0, 239, 1000);
    scene.adminCurb4 = scene.physics.add.image(scene.admin.width + 850, scene.admin.height + 2523, 'curb').setDepth(1);
    scene.adminCurb4.setAngle(90);
    scene.adminCurb4.setCrop(0, 0, 239, 1000);
    scene.adminCurb5 = scene.physics.add.image(scene.admin.width + 200, scene.admin.height + 2192, 'curb').setDepth(1);
    scene.adminCurb6 = scene.physics.add.image(scene.admin.width + 503, scene.admin.height + 2192, 'curb').setDepth(1);
    scene.adminShed1 = scene.physics.add.image(scene.admin.width - 130, scene.admin.height + 2285, 'shedSV').setDepth(2);
    scene.adminShed2 = scene.physics.add.image(scene.admin.width + 830, scene.admin.height + 2285, 'shedSV').setDepth(2);

    // MRM Building
    scene.mrm = scene.add.image(770, 1700, 'mrm').setOrigin(0, 0).setDepth(0);
    scene.mrm.setScale(1, 1);
    // ARM Building
    scene.arm = scene.add.image(770, 1710, 'mrm').setOrigin(0, 0).setDepth(0);
    scene.arm.setScale(1, -1);
    // Sheds MRM & ARM
    scene.mrmShed = scene.add.image(scene.mrm.width - 50, scene.mrm.height + 1730, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 115, scene.mrm.height + 1730, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width - 50, scene.mrm.height + 620, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 115, scene.mrm.height + 620, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 690, scene.mrm.height + 1730, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 525, scene.mrm.height + 1730, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 690, scene.mrm.height + 620, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 525, scene.mrm.height + 620, 'shedSH').setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width - 165, scene.mrm.height + 1645, 'shedSV').setDisplaySize(100, 200).setDepth(4);
    scene.mrmShed = scene.add.image(scene.mrm.width - 165, scene.mrm.height + 1520, 'shedSV').setDisplaySize(100, 200).setDepth(3);
    scene.mrmShed = scene.add.image(scene.mrm.width - 165, scene.mrm.height + 1390, 'shedSV').setDisplaySize(100, 200).setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 795, scene.mrm.height + 1645, 'shedSV').setDisplaySize(100, 200).setDepth(4);
    scene.mrmShed = scene.add.image(scene.mrm.width + 795, scene.mrm.height + 1520, 'shedSV').setDisplaySize(100, 200).setDepth(3);
    scene.mrmShed = scene.add.image(scene.mrm.width + 795, scene.mrm.height + 1390, 'shedSV').setDisplaySize(100, 200).setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width + 795, scene.mrm.height + 1000, 'shedSV').setDisplaySize(100, 200).setDepth(4);
    scene.mrmShed = scene.add.image(scene.mrm.width + 795, scene.mrm.height + 875, 'shedSV').setDisplaySize(100, 200).setDepth(3);
    scene.mrmShed = scene.add.image(scene.mrm.width + 795, scene.mrm.height + 745, 'shedSV').setDisplaySize(100, 200).setDepth(2);
    scene.mrmShed = scene.add.image(scene.mrm.width - 165, scene.mrm.height + 1000, 'shedSV').setDisplaySize(100, 200).setDepth(4);
    scene.mrmShed = scene.add.image(scene.mrm.width - 165, scene.mrm.height + 875, 'shedSV').setDisplaySize(100, 200).setDepth(3);
    scene.mrmShed = scene.add.image(scene.mrm.width - 165, scene.mrm.height + 745, 'shedSV').setDisplaySize(100, 200).setDepth(2);
    // Curbs MRM & ARM
    scene.curb = scene.add.image(scene.mrm.width + 150, scene.mrm.height + 1760, 'curb');
    scene.curb = scene.add.image(scene.mrm.width + 480, scene.mrm.height + 1760, 'curb');
    scene.curbSide1 = scene.add.image(scene.mrm.width - 200, scene.mrm.height + 1426, 'curb');
    scene.curbSide1.setAngle(90);
    scene.curbSide1 = scene.add.image(scene.mrm.width + 831, scene.mrm.height + 1426, 'curb');
    scene.curbSide1.setAngle(90);
    scene.curbSide1 = scene.add.image(scene.mrm.width - 200, scene.mrm.height + 931, 'curb');
    scene.curbSide1.setAngle(90);
    scene.curbSide1 = scene.add.image(scene.mrm.width + 831, scene.mrm.height + 931, 'curb');
    scene.curbSide1.setAngle(90);
    scene.curb = scene.add.image(scene.mrm.width + 150, scene.mrm.height + 600, 'curb');
    scene.curb = scene.add.image(scene.mrm.width + 480, scene.mrm.height + 600, 'curb');

    // Invisible Hitboxes
    scene.hitboxes = scene.physics.add.staticGroup();
    // MRM Hitboxes
    scene.hitbox1 = scene.hitboxes.create(scene.mrm.width, scene.mrm.height + 1470, null).setSize(280, scene.mrm.height - 70).setVisible(false);
    scene.hitbox2 = scene.hitboxes.create(scene.mrm.width + 630, scene.mrm.height + 1470, null).setSize(280, scene.mrm.height - 70).setVisible(false);
    scene.hitbox3 = scene.hitboxes.create(scene.mrm.width + 315, scene.mrm.height + 1590, null).setSize(scene.mrm.width - 70, 220).setVisible(false);
    // ARM Hitboxes
    scene.hitbox4 = scene.hitboxes.create(scene.arm.width, scene.arm.height + 885, null).setSize(280, scene.arm.height - 70).setVisible(false);
    scene.hitbox5 = scene.hitboxes.create(scene.arm.width + 630, scene.arm.height + 885, null).setSize(280, scene.arm.height - 70).setVisible(false);
    scene.hitbox6 = scene.hitboxes.create(scene.arm.width + 315, scene.arm.height + 760, null).setSize(scene.arm.width - 70, 220).setVisible(false);

    // Canteen
    scene.canteen = scene.physics.add.staticImage(1290, 850, 'canteen').setDepth(3);
    scene.canteen.body.setSize(scene.canteen.width - 200, scene.canteen.height - 100);
    scene.canteen.body.setOffset(100, 100);
    scene.canteenCurb = scene.add.image(1100, 960, 'curb');
    scene.canteenCurb = scene.add.image(1475, 960, 'curb');

    // Court
    scene.court = scene.physics.add.staticImage(1570, 400, 'court').setDepth(3);
    scene.court.body.setSize(scene.court.width - 100, scene.court.height - 280);
    scene.court.body.setOffset(scene.court.width - 432, 280);
    scene.curbCourt1 = scene.physics.add.image(scene.court.width + 865, scene.court.height + 320, 'curb');
    scene.curbCourt1.setAngle(90);
    scene.curbCourt1.setCrop(0, 0, 250, 100);
    scene.curbCourt3 = scene.physics.add.image(scene.court.width + 1310, scene.court.height + 322, 'curb');
    scene.curbCourt3.setAngle(90);
    scene.curbCourt3.setCrop(0, 0, 250, 100);
    scene.curbCourt2 = scene.physics.add.image(scene.court.width + 1198, scene.court.height + 220, 'curb');
    scene.curbCourt2.setCrop(0, 0, 455, 100);


    // Unfinished building

    // Shed
    scene.shed = scene.physics.add.staticImage(500, 850, 'shed1').setOrigin(0, 0).setDepth(2);
    scene.shed.body.allowGravity = false;
    scene.shed.body.setSize(1, scene.shed.height - 100);
    scene.shed.body.setOffset(scene.shed.width, scene.shed.height - 1190);

    // Player and colliders
    scene.player = scene.physics.add.image(centerX / 1.5, centerY / 5, 'avatar').setOrigin(0, 0).setDisplaySize(60, 60).setDepth(3);
    scene.player.body.setSize(250, 400);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.shed);
    scene.physics.add.collider(scene.player, scene.admin);
    scene.physics.add.collider(scene.player, scene.hitbox1);
    scene.physics.add.collider(scene.player, scene.hitbox2);
    scene.physics.add.collider(scene.player, scene.hitbox3);
    scene.physics.add.collider(scene.player, scene.hitbox4);
    scene.physics.add.collider(scene.player, scene.hitbox5);
    scene.physics.add.collider(scene.player, scene.hitbox6);
    scene.physics.add.collider(scene.player, scene.canteen);
    scene.physics.add.collider(scene.player, scene.court);

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
        let newZoom = Phaser.Math.Clamp(cam.zoom + zoomChange, 0.1, 2);
        cam.zoomTo(newZoom, 10);
    });
}