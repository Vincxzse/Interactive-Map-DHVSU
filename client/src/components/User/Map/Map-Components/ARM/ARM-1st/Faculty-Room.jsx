
export function createFaculty(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {
    const centerX = worldWidth;
    const centerY = worldHeight;

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1);

    scene.wall1 = scene.physics.add.staticImage(worldWidth / 2, 50, 'room-wall').setDisplaySize(worldWidth * 1.7, 100).setDepth(1);
    scene.wall1.body.setOffset(0, 0);
    scene.wall1.refreshBody();
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height);

    scene.wall2 = scene.physics.add.staticImage(20, 237, 'wall').setDisplaySize(50, worldHeight + 500).setDepth(1);
    scene.wall2.body.setOffset(0, 0);
    scene.wall2.refreshBody();

    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 237, 'wall').setDisplaySize(50, worldHeight + 500).setDepth(1);
    scene.wall3.body.setOffset(0, 0);
    scene.wall3.refreshBody();
    
    scene.facultyTable1 = scene.physics.add.staticImage(worldWidth / 1.5, worldHeight / 1.2, 'clinic-table').setDisplaySize(130, 110).setDepth(1);
    scene.facultyTable1.body.setOffset(0, 0);
    scene.facultyTable1.refreshBody();
    scene.facultyTable2 = scene.physics.add.staticImage(worldWidth / 1.5, worldHeight / 1.4, 'clinic-table').setDisplaySize(130, 110).setDepth(1);
    scene.facultyTable2.body.setOffset(0, 0);
    scene.facultyTable2.refreshBody();
    scene.facultyTable3 = scene.physics.add.staticImage(worldWidth / 1.5, worldHeight / 1.72, 'clinic-table').setDisplaySize(130, 110).setDepth(1);
    scene.facultyTable3.body.setOffset(0, 0);
    scene.facultyTable3.refreshBody();
    scene.facultyTable4 = scene.physics.add.staticImage(worldWidth / 1.5, worldHeight / 2.225, 'clinic-table').setDisplaySize(130, 110).setDepth(1);
    scene.facultyTable4.body.setOffset(0, 0);
    scene.facultyTable4.refreshBody();

    scene.facultyTable5 = scene.physics.add.staticImage(220, worldHeight / 1.2, 'clinic-table').setDisplaySize(130, 110).setDepth(1).setFlipX(true);
    scene.facultyTable5.body.setOffset(0, 0);
    scene.facultyTable5.refreshBody();
    scene.facultyTable6 = scene.physics.add.staticImage(220, worldHeight / 1.4, 'clinic-table').setDisplaySize(130, 110).setDepth(1).setFlipX(true);
    scene.facultyTable6.body.setOffset(0, 0);
    scene.facultyTable6.refreshBody();
    scene.facultyTable7 = scene.physics.add.staticImage(220, worldHeight / 1.72, 'clinic-table').setDisplaySize(130, 110).setDepth(1).setFlipX(true);
    scene.facultyTable7.body.setOffset(0, 0);
    scene.facultyTable7.refreshBody();
    scene.facultyTable8 = scene.physics.add.staticImage(220, worldHeight / 2.225, 'clinic-table').setDisplaySize(130, 110).setDepth(1).setFlipX(true);
    scene.facultyTable8.body.setOffset(0, 0);
    scene.facultyTable8.refreshBody();
    
    scene.facultyTable9 = scene.physics.add.staticImage(270, 150, 'guidance-table').setDisplaySize(110, 90).setDepth(1).setFlipX(true);
    scene.facultyTable9.body.setOffset(0, 0);
    scene.facultyTable9.refreshBody();
    scene.facultyTable10 = scene.physics.add.staticImage(390, 150, 'guidance-table').setDisplaySize(110, 90).setDepth(1).setFlipX(true);
    scene.facultyTable10.body.setOffset(0, 0);
    scene.facultyTable10.refreshBody();
    
    scene.facultyClock = scene.physics.add.staticImage(worldWidth - 200, 30, 'clock').setDisplaySize(30, 30).setDepth(1);
    scene.facultyClock.body.setOffset(0, 0);
    scene.facultyClock.refreshBody();
    
    scene.facultyWaterDispenser = scene.physics.add.staticImage(worldWidth - 70, 60, 'water-dispenser').setDisplaySize(50, 120).setDepth(1);
    scene.facultyWaterDispenser.body.setOffset(0, 0);
    scene.facultyWaterDispenser.refreshBody();

    scene.facultyDoormat1 = scene.physics.add.staticImage(worldWidth - 70, 250, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.facultyDoormat1.body.setOffset(0, 0);
    scene.facultyDoormat1.refreshBody();
    scene.facultyDoormat2 = scene.physics.add.staticImage(worldWidth - 70, worldHeight - 50, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.facultyDoormat2.body.setOffset(0, 0);
    scene.facultyDoormat2.refreshBody();

    // Player and colliders
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.wall1);
    scene.physics.add.collider(scene.player, scene.wall2);
    scene.physics.add.collider(scene.player, scene.wall3);
    scene.physics.add.collider(scene.player, scene.facultyTable1);
    scene.physics.add.collider(scene.player, scene.facultyTable2);
    scene.physics.add.collider(scene.player, scene.facultyTable3);
    scene.physics.add.collider(scene.player, scene.facultyTable4);
    scene.physics.add.collider(scene.player, scene.facultyTable5);
    scene.physics.add.collider(scene.player, scene.facultyTable6);
    scene.physics.add.collider(scene.player, scene.facultyTable7);
    scene.physics.add.collider(scene.player, scene.facultyTable8);
    scene.physics.add.collider(scene.player, scene.facultyTable9);
    scene.physics.add.collider(scene.player, scene.facultyTable10);
    scene.physics.add.collider(scene.player, scene.facultyWaterDispenser);

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    scene.player.setCollideWorldBounds(true);
}