
export function createCL2(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {
    const centerX = worldWidth;
    const centerY = worldHeight;

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1);

    scene.wall1 = scene.physics.add.staticImage(480, 50, 'room-wall').setDisplaySize(1800, 100).setDepth(1);
    scene.wall1.body.setOffset(0, 0);
    scene.wall1.refreshBody();
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height);

    scene.wall2 = scene.physics.add.staticImage(20, 400, 'wall').setDisplaySize(50, worldHeight + 100).setDepth(1);
    scene.wall2.body.setOffset(0, 0);
    scene.wall2.refreshBody();

    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 400, 'wall').setDisplaySize(50, worldHeight + 100).setDepth(1);
    scene.wall3.body.setOffset(0, 0);
    scene.wall3.refreshBody();
    
    scene.cl2Doormat1 = scene.physics.add.staticImage(worldWidth - 70, 200, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.cl2Doormat1.body.setOffset(0, 0);
    scene.cl2Doormat1.refreshBody();

    scene.cl2Doormat2 = scene.physics.add.staticImage(worldWidth - 70, worldHeight - 100, 'doormat1').setDisplaySize(50, 60).setDepth(1);
    scene.cl2Doormat2.body.setOffset(0, 0);
    scene.cl2Doormat2.refreshBody();

    scene.armchair1 = scene.physics.add.staticImage(180, 350, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair1.body.setOffset(0, 0);
    scene.armchair1.refreshBody();
    scene.armchair2 = scene.physics.add.staticImage(180, 450, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair2.body.setOffset(0, 0);
    scene.armchair2.refreshBody();
    scene.armchair3 = scene.physics.add.staticImage(180, 550, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair3.body.setOffset(0, 0);
    scene.armchair3.refreshBody();
    scene.armchair4 = scene.physics.add.staticImage(180, 650, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair4.body.setOffset(0, 0);
    scene.armchair4.refreshBody();
    
    scene.armchair5 = scene.physics.add.staticImage(worldWidth - 180, 350, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair5.body.setOffset(0, 0);
    scene.armchair5.refreshBody();
    scene.armchair6 = scene.physics.add.staticImage(worldWidth - 180, 450, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair6.body.setOffset(0, 0);
    scene.armchair6.refreshBody();
    scene.armchair7 = scene.physics.add.staticImage(worldWidth - 180, 550, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair7.body.setOffset(0, 0);
    scene.armchair7.refreshBody();
    scene.armchair8 = scene.physics.add.staticImage(worldWidth - 180, 650, 'pc-set').setDisplaySize(300, 70).setDepth(1).setFlipY(true);
    scene.armchair8.body.setOffset(0, 0);
    scene.armchair8.refreshBody();
    
    scene.prof1 = scene.physics.add.staticImage(worldWidth / 2, 120, 'guard').setDisplaySize(60, 60).setDepth(1);
    scene.prof1.body.setOffset(0, 0);
    scene.prof1.refreshBody();
    scene.profQuestion = scene.add.text(scene.prof1.x, scene.prof1.y - 80, "Hi! Do you need something?", {
        font: "20px Arial",
        fill: "#ffffff",
        backgroundColor: "#000000",
        padding: { x: 10, y: 5 },
        align: "center",
    })
    .setOrigin(0.5)
    .setDepth(5)
    .setVisible(false);

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

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    scene.player.setCollideWorldBounds(true);
}

