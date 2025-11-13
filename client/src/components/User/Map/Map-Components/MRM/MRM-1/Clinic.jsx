
export function createClinic(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {
    const centerX = worldWidth;
    const centerY = worldHeight;

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1);

    scene.wall1 = scene.physics.add.staticImage(worldWidth / 2, 50, 'room-wall').setDisplaySize(worldWidth * 1.7, 100).setDepth(1);
    scene.wall1.body.setOffset(0, 0);
    scene.wall1.refreshBody();
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height);

    scene.wall2 = scene.physics.add.staticImage(20, 237, 'wall').setDisplaySize(50, worldHeight * 2).setDepth(1);
    scene.wall2.body.setOffset(0, 0);
    scene.wall2.refreshBody();

    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 237, 'wall').setDisplaySize(50, worldHeight * 2).setDepth(1);
    scene.wall3.body.setOffset(0, 0);
    scene.wall3.refreshBody();
    
    scene.clinicTable = scene.physics.add.staticImage(worldWidth / 1.5, worldHeight / 1.2, 'clinic-table').setDisplaySize(130, 110).setDepth(1);
    scene.clinicTable.body.setOffset(0, 0);
    scene.clinicTable.refreshBody();
    
    scene.clinicBed1 = scene.physics.add.staticImage(worldWidth / 2, 130, 'bed').setDisplaySize(50, 80).setDepth(1);
    scene.clinicBed1.body.setOffset(0, 0);
    scene.clinicBed1.refreshBody();
    scene.clinicBed2 = scene.physics.add.staticImage(worldWidth / 2.5, 130, 'bed').setDisplaySize(50, 80).setDepth(1);
    scene.clinicBed2.body.setOffset(0, 0);
    scene.clinicBed2.refreshBody();

    scene.clinicExit = scene.physics.add.staticImage(worldWidth - 200, 75, 'door-front').setDisplaySize(70, 70).setDepth(1);
    scene.clinicExit.body.setOffset(0, 0);
    scene.clinicExit.refreshBody();

    // Player and colliders
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.wall1);
    scene.physics.add.collider(scene.player, scene.wall2);
    scene.physics.add.collider(scene.player, scene.wall3);
    scene.physics.add.collider(scene.player, scene.clinicTable);
    scene.physics.add.collider(scene.player, scene.clinicBed1);
    scene.physics.add.collider(scene.player, scene.clinicBed2);

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    scene.player.setCollideWorldBounds(true);
}