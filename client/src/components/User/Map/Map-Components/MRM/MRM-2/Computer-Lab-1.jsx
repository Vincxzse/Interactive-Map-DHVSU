
export function createComlab1(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1)

    scene.wall1 = scene.physics.add.staticImage(worldWidth / 2, 50, 'room-wall').setDisplaySize(worldWidth * 1.7, 100).setDepth(1)
    scene.wall1.body.setOffset(0, 0)
    scene.wall1.refreshBody()
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height)

    scene.wall2 = scene.physics.add.staticImage(20, 400, 'wall').setDisplaySize(50, worldHeight + 200).setDepth(1)
    scene.wall2.body.setOffset(0, 0)
    scene.wall2.refreshBody()

    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 400, 'wall').setDisplaySize(50, worldHeight + 200).setDepth(1)
    scene.wall3.body.setOffset(0, 0)
    scene.wall3.refreshBody()
    
    scene.comLab1Doormat1 = scene.physics.add.staticImage(worldWidth - 70, 130, 'doormat1').setDisplaySize(50, 60).setDepth(1)
    scene.comLab1Doormat1.body.setOffset(0, 0)
    scene.comLab1Doormat1.refreshBody()
    
    scene.comLab1Doormat2 = scene.physics.add.staticImage(worldWidth - 70, worldHeight - 100, 'doormat1').setDisplaySize(50, 60).setDepth(1)
    scene.comLab1Doormat2.body.setOffset(0, 0)
    scene.comLab1Doormat2.refreshBody()
    
    scene.whiteboard = scene.physics.add.staticImage(worldWidth / 2, 50, 'whiteboard-2').setDisplaySize(300, 70).setDepth(1)
    scene.whiteboard.body.setOffset(0, 0)
    scene.whiteboard.refreshBody()

    scene.comp1x1f = scene.physics.add.staticImage(95, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1)
    scene.comp1x1f.body.setOffset(0, 0)
    scene.comp1x1f.refreshBody()
    scene.comp3x3f = scene.physics.add.staticImage(95, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3f.body.setOffset(0, 0)
    scene.comp3x3f.refreshBody()
    scene.comp3x3s = scene.physics.add.staticImage(95, 580, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3s.body.setOffset(0, 0)
    scene.comp3x3s.refreshBody()
    
    scene.computerWall = scene.physics.add.staticImage((worldWidth / 4) + 20, 700, 'computer-wall').setDisplaySize(500, 40).setDepth(1)
    scene.computerWall.body.setOffset(0, 0)
    scene.computerWall.refreshBody()

    scene.comp1x1s = scene.physics.add.staticImage((worldWidth / 2) - 50, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1).setFlipX(true)
    scene.comp1x1s.body.setOffset(0, 0)
    scene.comp1x1s.refreshBody()
    scene.comp3x3t = scene.physics.add.staticImage((worldWidth / 2) - 50, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3t.body.setOffset(0, 0)
    scene.comp3x3t.refreshBody()
    scene.comp3x3fr = scene.physics.add.staticImage((worldWidth / 2) - 50, 580, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3fr.body.setOffset(0, 0)
    scene.comp3x3fr.refreshBody()

    scene.comp1x1t = scene.physics.add.staticImage((worldWidth / 2) + 50, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1)
    scene.comp1x1t.body.setOffset(0, 0)
    scene.comp1x1t.refreshBody()
    scene.comp3x3ft = scene.physics.add.staticImage((worldWidth / 2) + 50, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3fr.body.setOffset(0, 0)
    scene.comp3x3ft.refreshBody()
    scene.comp3x3sx = scene.physics.add.staticImage((worldWidth / 2) + 50, 580, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3sx.body.setOffset(0, 0)
    scene.comp3x3sx.refreshBody()
    scene.comp2x2f = scene.physics.add.staticImage((worldWidth / 2) + 50, 750, 'computer-2').setDisplaySize(100, 140).setDepth(1).setFlipX(true)
    scene.comp2x2f.body.setOffset(0, 0)
    scene.comp2x2f.refreshBody()

    scene.comp1x1fr = scene.physics.add.staticImage(worldWidth - 95, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1).setFlipX(true)
    scene.comp1x1fr.body.setOffset(0, 0)
    scene.comp1x1fr.refreshBody()
    scene.comp3x3sv = scene.physics.add.staticImage(worldWidth - 95, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3sv.body.setOffset(0, 0)
    scene.comp3x3sv.refreshBody()
    scene.comp3x3et = scene.physics.add.staticImage(worldWidth - 95, 550, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3et.body.setOffset(0, 0)
    scene.comp3x3et.refreshBody()
    scene.comp2x2s = scene.physics.add.staticImage(worldWidth - 95, 720, 'computer-2').setDisplaySize(100, 140).setDepth(1)
    scene.comp2x2s.body.setOffset(0, 0)
    scene.comp2x2s.refreshBody()

    scene.adminTable = scene.physics.add.staticImage(250, 820, 'clinic-table').setDisplaySize(130, 70).setDepth(1).setFlipX(true)
    scene.adminTable.body.setOffset(0, 0)
    scene.adminTable.refreshBody()
    

    // Player and colliders
    scene.player = scene.physics.add.image(playerPositionX, playerPositionY, 'avatar')
        .setOrigin(0.5, 0.5)
        .setDisplaySize(60, 60)
        .setDepth(3)
    scene.player.body.setSize(250, 400)
    scene.player.body.allowGravity = false
    scene.physics.add.collider(scene.player, scene.wall1)
    scene.physics.add.collider(scene.player, scene.wall2)
    scene.physics.add.collider(scene.player, scene.wall3)
    scene.physics.add.collider(scene.player, scene.comp1x1f)
    scene.physics.add.collider(scene.player, scene.comp1x1fr)
    scene.physics.add.collider(scene.player, scene.comp1x1s)
    scene.physics.add.collider(scene.player, scene.comp1x1t)
    scene.physics.add.collider(scene.player, scene.comp3x3f)
    scene.physics.add.collider(scene.player, scene.comp3x3s)
    scene.physics.add.collider(scene.player, scene.comp3x3t)
    scene.physics.add.collider(scene.player, scene.comp3x3fr)
    scene.physics.add.collider(scene.player, scene.comp3x3ft)
    scene.physics.add.collider(scene.player, scene.comp3x3sx)
    scene.physics.add.collider(scene.player, scene.comp3x3sv)
    scene.physics.add.collider(scene.player, scene.comp3x3et)
    scene.physics.add.collider(scene.player, scene.comp2x2f)
    scene.physics.add.collider(scene.player, scene.comp2x2s)
    scene.physics.add.collider(scene.player, scene.computerWall)
    scene.physics.add.collider(scene.player, scene.adminTable)

    scene.cameras.main.startFollow(scene.player, true, 1, 1)
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight)
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight)
    scene.player.setCollideWorldBounds(true)
}

