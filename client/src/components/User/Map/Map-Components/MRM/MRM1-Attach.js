
function attachMRMExit1(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMExit1, () => {
        scene.loadOutside(1250, 1800)
        scene.refreshDebug()
    })
}

function attachMRMEntrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance1, () => {
        scene.loadMRM(scene.worldWidth / 2, 250)
        scene.refreshDebug()
    })
}

function attachMRMEntrance2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance2, () => {
        scene.loadMRM(scene.worldWidth / 2, 50)
        scene.refreshDebug()
    })
}

function attachMRMEntrance3Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance3, () => {
        scene.loadMRM(200, 600)
        scene.refreshDebug()
    })
}

function attachMRMEntrance4Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance4, () => {
        console.log("MRM Entrance 4 triggered!")
        scene.loadMRM(scene.worldWidth - 150, 600)
        scene.refreshDebug()
    })
}

function attachMRMStair1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrmStair3, () => {
        scene.loadMRM2nd(280, 550)
        scene.refreshDebug()
    })
}

function attachMRMStair2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrmStair2, () => {
        scene.loadMRM2nd(1775, 550)
        scene.refreshDebug()
    })
}

function attachMRM2ndStair1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm2stair2, () => {
        scene.loadMRM(280, 550)
        scene.refreshDebug()
    })
}

function attachMRM2ndStair2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm2stair1, () => {
        scene.loadMRM(1775, 550)
        scene.refreshDebug()
    })
}

function attachMRM101Entrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm101Entrance1, () => {
        scene.loadMRM101((scene.worldWidth / 2) - 130, 200)
        scene.refreshDebug()
    })
}

function attachMRM101Entrance2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm101Entrance2, () => {
        scene.loadMRM101((scene.worldWidth / 2) - 130, (scene.worldHeight / 5) - 100)
        scene.refreshDebug()
    })
}

function attachMRM101Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRM101Doormat1, () => {
        scene.loadMRM(40, 132)
        scene.refreshDebug()
    })
}

function attachMRM101Doormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRM101Doormat2, () => {
        scene.loadMRM(40, 292)
        scene.refreshDebug()
    })
}

function attachMRM102Entrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm102Entrance1, () => {
        scene.loadMRM102((scene.worldWidth / 2) - 130, 200)
        scene.refreshDebug()
    })
}

function attachMRM102Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRM102Doormat1, () => {
        scene.loadMRM(40, 547)
        scene.refreshDebug()
    })
}

function attachMRM103Entrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm103Entrance1, () => {
        scene.loadMRM103(200, 150)
        scene.refreshDebug()
    })
}

function attachMRM103Entrance2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm103Entrance2, () => {
        scene.loadMRM103((scene.worldWidth / 2) - 200, 150)
        scene.refreshDebug()
    })
}

function attachMRM103Exit1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRM103Exit1, () => {
        scene.loadMRM(450, (scene.worldHeight / 5) - 100)
        scene.refreshDebug()
    })
}

function attachMRM103Exit2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRM103Exit2, () => {
        scene.loadMRM(650, (scene.worldHeight / 5) - 100)
        scene.refreshDebug()
    })
}

function attachGCEntrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.GCEntrance1, () => {
        scene.loadGC1(200, 150)
        scene.refreshDebug()
    })
}

function attachGCEntrance2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.GCEntrance2, () => {
        scene.loadGC2((scene.worldWidth / 3) - 200, 150)
        scene.refreshDebug()
    })
}

function attachGuidanceExitOverlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.guidanceExit, () => {
        scene.loadMRM(scene.worldWidth - 595, (scene.worldHeight / 5) - 100)
        scene.refreshDebug()
    })
}

function attachClinicExitOverlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.clinicExit, () => {
        scene.loadMRM(scene.worldWidth - 395, (scene.worldHeight / 5) - 100)
        scene.refreshDebug()
    })
}

function attachFacultyEntrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyEntrance1, () => {
        scene.loadFacultyRoom(120, 250)
        scene.refreshDebug()
    })
}

function attachFacultyEntrance2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyEntrance2, () => {
        scene.loadFacultyRoom(120, (scene.worldHeight / 4) - 50)
        scene.refreshDebug()
    })
}

function attachFacultyDoormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyRoomDoormat1, () => {
        scene.loadMRM(scene.worldWidth - 75, 95)
        scene.refreshDebug()
    })
}

function attachFacultyDoormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyRoomDoormat2, () => {
        scene.loadMRM(scene.worldWidth - 75, 345)
        scene.refreshDebug()
    })
}

function attachMRM201Entrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm201Entrance1, () => {
        scene.loadMRM201(200, 150)
        scene.refreshDebug()
    })
}

function attachMRM201Entrance2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm201Entrance2, () => {
        scene.loadMRM201((scene.worldWidth / 2) - 200, 150)
        scene.refreshDebug()
    })
}

function attachMRM201Exit1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRM201Exit1, () => {
        scene.loadMRM2nd(450, (scene.worldHeight / 5) - 100)
        scene.refreshDebug()
    })
}

function attachMRM201Exit2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRM201Exit2, () => {
        scene.loadMRM2nd(650, (scene.worldHeight / 5) - 100)
        scene.refreshDebug()
    })
}

export { 
    attachMRMEntrance1Overlap,
    attachMRMEntrance2Overlap,
    attachMRMEntrance3Overlap,
    attachMRMEntrance4Overlap,
    attachMRMStair1Overlap,
    attachMRMStair2Overlap,
    attachMRM2ndStair1Overlap,
    attachMRM2ndStair2Overlap,
    attachMRMExit1,
    attachMRM101Entrance1Overlap,
    attachMRM101Entrance2Overlap,
    attachMRM101Doormat1Overlap,
    attachMRM101Doormat2Overlap,
    attachMRM102Entrance1Overlap,
    attachMRM102Doormat1Overlap,
    attachMRM103Entrance1Overlap,
    attachMRM103Entrance2Overlap,
    attachMRM103Exit1Overlap,
    attachMRM103Exit2Overlap,
    attachGCEntrance1Overlap,
    attachGuidanceExitOverlap,
    attachGCEntrance2Overlap,
    attachClinicExitOverlap,
    attachFacultyEntrance1Overlap,
    attachFacultyEntrance2Overlap,
    attachFacultyDoormat1Overlap,
    attachFacultyDoormat2Overlap,
    attachMRM201Entrance1Overlap,
    attachMRM201Entrance2Overlap,
    attachMRM201Exit1Overlap,
    attachMRM201Exit2Overlap
}