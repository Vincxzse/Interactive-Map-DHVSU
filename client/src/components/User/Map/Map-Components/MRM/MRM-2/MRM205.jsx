
export function createMRM205(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1);

    scene.wall1 = scene.physics.add.staticImage(worldWidth / 2, 50, 'room-wall').setDisplaySize(worldWidth * 1.7, 100).setDepth(1);
    scene.wall1.body.setOffset(0, 0);
    scene.wall1.refreshBody();
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height);

    scene.wall2 = scene.physics.add.staticImage(20, 400, 'wall').setDisplaySize(50, worldHeight + 200).setDepth(1);
    scene.wall2.body.setOffset(0, 0);
    scene.wall2.refreshBody();

    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 400, 'wall').setDisplaySize(50, worldHeight + 200).setDepth(1);
    scene.wall3.body.setOffset(0, 0);
    scene.wall3.refreshBody();
    
    scene.MRM205Doormat1 = scene.physics.add.staticImage(70, 200, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.MRM205Doormat1.body.setOffset(0, 0);
    scene.MRM205Doormat1.refreshBody();

    scene.MRM205Doormat2 = scene.physics.add.staticImage(70, worldHeight - 100, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.MRM205Doormat2.body.setOffset(0, 0);
    scene.MRM205Doormat2.refreshBody();

    scene.armchair1 = scene.physics.add.staticImage(350, 400, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair1.body.setOffset(0, 0);
    scene.armchair1.refreshBody();
    scene.armchair2 = scene.physics.add.staticImage(350, 500, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair2.body.setOffset(0, 0);
    scene.armchair2.refreshBody();
    scene.armchair3 = scene.physics.add.staticImage(350, 600, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair3.body.setOffset(0, 0);
    scene.armchair3.refreshBody();
    scene.armchair4 = scene.physics.add.staticImage(350, 700, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair4.body.setOffset(0, 0);
    scene.armchair4.refreshBody();
    
    scene.armchair5 = scene.physics.add.staticImage(worldWidth - 350, 400, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair5.body.setOffset(0, 0);
    scene.armchair5.refreshBody();
    scene.armchair6 = scene.physics.add.staticImage(worldWidth - 350, 500, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair6.body.setOffset(0, 0);
    scene.armchair6.refreshBody();
    scene.armchair7 = scene.physics.add.staticImage(worldWidth - 350, 600, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair7.body.setOffset(0, 0);
    scene.armchair7.refreshBody();
    scene.armchair8 = scene.physics.add.staticImage(worldWidth - 350, 700, 'armchair').setDisplaySize(250, 70).setDepth(1);
    scene.armchair8.body.setOffset(0, 0);
    scene.armchair8.refreshBody();

    // Player and colliders
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
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

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    scene.player.setCollideWorldBounds(true);
}

