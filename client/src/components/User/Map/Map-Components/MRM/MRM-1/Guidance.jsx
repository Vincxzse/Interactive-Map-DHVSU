
export function createGuidance(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {
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
    
    scene.guidanceChair1 = scene.physics.add.staticImage(worldWidth - 285, 330, 'chair').setDisplaySize(50, 70).setDepth(1);
    scene.guidanceChair1.body.setOffset(0, 0);
    scene.guidanceChair1.refreshBody();
    
    scene.guidanceChair2 = scene.physics.add.staticImage(285, 330, 'chair').setDisplaySize(50, 70).setDepth(1).setFlipX(true);
    scene.guidanceChair2.body.setOffset(0, 0);
    scene.guidanceChair2.refreshBody();
    
    scene.guidanceTable = scene.physics.add.staticImage(worldWidth / 2, worldHeight / 2, 'guidance-table').setDisplaySize(130, 70).setDepth(1);
    scene.guidanceTable.body.setOffset(0, 0);
    scene.guidanceTable.refreshBody();

    scene.guidanceExit = scene.physics.add.staticImage(200, 75, 'door-front').setDisplaySize(70, 70).setDepth(1);
    scene.guidanceExit.body.setOffset(0, 0);
    scene.guidanceExit.refreshBody();

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
    scene.physics.add.collider(scene.player, scene.guidanceTable);
    scene.physics.add.collider(scene.player, scene.guidanceChair1);
    scene.physics.add.collider(scene.player, scene.guidanceChair2);

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    scene.player.setCollideWorldBounds(true);
}