
export function createARM204(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {
    const centerX = worldWidth;
    const centerY = worldHeight;

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1);

    scene.wall1 = scene.physics.add.staticImage(worldWidth / 2, 50, 'room-wall').setDisplaySize(worldWidth * 1.7, 100).setDepth(1);
    scene.wall1.body.setOffset(0, 0);
    scene.wall1.refreshBody();
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height);

    scene.wall2 = scene.physics.add.staticImage(20, 320, 'wall').setDisplaySize(50, worldHeight + 60).setDepth(1);
    scene.wall2.body.setOffset(0, 0);
    scene.wall2.refreshBody();

    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 320, 'wall').setDisplaySize(50, worldHeight + 60).setDepth(1);
    scene.wall3.body.setOffset(0, 0);
    scene.wall3.refreshBody();

    scene.ARM204Doormat1 = scene.physics.add.staticImage(200, worldHeight - 20, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.ARM204Doormat1.body.setOffset(0, 0);
    scene.ARM204Doormat1.refreshBody();
    scene.ARM204Doormat1.setAngle(90);

    scene.ARM204Doormat2 = scene.physics.add.staticImage(worldWidth - 200, worldHeight - 20, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.ARM204Doormat2.body.setOffset(0, 0);
    scene.ARM204Doormat2.refreshBody();
    scene.ARM204Doormat2.setAngle(90);

    scene.armchair1 = scene.physics.add.staticImage(350, worldHeight - 100, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair1.body.setOffset(0, 0);
    scene.armchair1.refreshBody();
    scene.armchair2 = scene.physics.add.staticImage(350, worldHeight - 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair2.body.setOffset(0, 0);
    scene.armchair2.refreshBody();
    scene.armchair3 = scene.physics.add.staticImage(450, worldHeight - 100, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair3.body.setOffset(0, 0);
    scene.armchair3.refreshBody();
    scene.armchair4 = scene.physics.add.staticImage(450, worldHeight - 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair4.body.setOffset(0, 0);
    scene.armchair4.refreshBody();
    scene.armchair5 = scene.physics.add.staticImage(550, worldHeight - 100, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair5.body.setOffset(0, 0);
    scene.armchair5.refreshBody();
    scene.armchair6 = scene.physics.add.staticImage(550, worldHeight - 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair6.body.setOffset(0, 0);
    scene.armchair6.refreshBody();
    scene.armchair7 = scene.physics.add.staticImage(650, worldHeight - 100, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair7.body.setOffset(0, 0);
    scene.armchair7.refreshBody();
    scene.armchair8 = scene.physics.add.staticImage(650, worldHeight - 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair8.body.setOffset(0, 0);
    scene.armchair8.refreshBody();

    scene.armchair9 = scene.physics.add.staticImage(350, 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair9.body.setOffset(0, 0);
    scene.armchair9.refreshBody();
    scene.armchair10 = scene.physics.add.staticImage(350, 300, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair10.body.setOffset(0, 0);
    scene.armchair10.refreshBody();
    scene.armchair11 = scene.physics.add.staticImage(450, 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair11.body.setOffset(0, 0);
    scene.armchair11.refreshBody();
    scene.armchair12 = scene.physics.add.staticImage(450, 300, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair12.body.setOffset(0, 0);
    scene.armchair12.refreshBody();
    scene.armchair13 = scene.physics.add.staticImage(550, 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair13.body.setOffset(0, 0);
    scene.armchair13.refreshBody();
    scene.armchair14 = scene.physics.add.staticImage(550, 300, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair14.body.setOffset(0, 0);
    scene.armchair14.refreshBody();
    scene.armchair15 = scene.physics.add.staticImage(650, 200, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair15.body.setOffset(0, 0);
    scene.armchair15.refreshBody();
    scene.armchair16 = scene.physics.add.staticImage(650, 300, 'armchair-side').setDisplaySize(50, 100).setDepth(1);
    scene.armchair16.body.setOffset(0, 0);
    scene.armchair16.refreshBody();
    
    scene.arm103Window1 = scene.physics.add.staticImage(350, 50, 'window2').setDisplaySize(150, 75).setDepth(1);
    scene.arm103Window1.body.setOffset(0, 0);
    scene.arm103Window1.refreshBody();
    scene.arm103Window2 = scene.physics.add.staticImage(worldWidth - 350, 50, 'window2').setDisplaySize(150, 75).setDepth(1);
    scene.arm103Window2.body.setOffset(0, 0);
    scene.arm103Window2.refreshBody();

    // Player and colliders
    scene.player = scene.physics.add.image(playerPositionX, playerPositionY, 'avatar')
        .setOrigin(0.5, 0.5)
        .setDisplaySize(60, 60)
        .setDepth(3);
    scene.player.body.setSize(250, 400);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.wall1);
    scene.physics.add.collider(scene.player, scene.wall2);
    scene.physics.add.collider(scene.player, scene.wall3);
    scene.physics.add.collider(scene.player, scene.armchair1);
    scene.physics.add.collider(scene.player, scene.armchair2);
    scene.physics.add.collider(scene.player, scene.armchair3);
    scene.physics.add.collider(scene.player, scene.armchair4);
    scene.physics.add.collider(scene.player, scene.armchair5);
    scene.physics.add.collider(scene.player, scene.armchair6);
    scene.physics.add.collider(scene.player, scene.armchair7);
    scene.physics.add.collider(scene.player, scene.armchair8);
    scene.physics.add.collider(scene.player, scene.armchair9);
    scene.physics.add.collider(scene.player, scene.armchair10);
    scene.physics.add.collider(scene.player, scene.armchair11);
    scene.physics.add.collider(scene.player, scene.armchair12);
    scene.physics.add.collider(scene.player, scene.armchair13);
    scene.physics.add.collider(scene.player, scene.armchair14);
    scene.physics.add.collider(scene.player, scene.armchair15);
    scene.physics.add.collider(scene.player, scene.armchair16);

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    scene.player.setCollideWorldBounds(true);
}