

function attachAdminEntrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.adminEntrance1, () => {
        scene.loadAdmin(scene.worldWidth / 2, 500)
        scene.refreshDebug()
    })
}

function attachAdminExit1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.AdminExit1, () => {
        scene.loadOutside((scene.worldWidth / 1.56) - 25, scene.worldHeight - 650)
        scene.refreshDebug()
    })
}

export {
    attachAdminEntrance1Overlap,
    attachAdminExit1Overlap
}