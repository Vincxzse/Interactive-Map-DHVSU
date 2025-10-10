

function attachAdminEntrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.adminEntrance1, () => {
        scene.loadAdmin(scene.worldWidth / 2, 250)
        scene.refreshDebug()
    })
}

export {
    attachAdminEntrance1Overlap
}