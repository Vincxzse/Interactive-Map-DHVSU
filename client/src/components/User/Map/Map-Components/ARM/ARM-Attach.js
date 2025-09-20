
function attachOutsideOverlap(scene) {
    scene.destroyCurrentOverlap();
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.entrance1, () => {
        scene.loadARM1(scene.worldWidth / 2, 250);
        scene.refreshDebug();
    });
}

function attachARM1Overlap(scene) {
    scene.destroyCurrentOverlap();
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.armStair2, () => {
        scene.loadARM2();
    });

    // Overlap for exit back to outside
    scene.physics.add.overlap(scene.player, scene.exit1, () => {
        scene.loadOutside(1250, 1500);
        scene.refreshDebug();
    });
}

function attachARM1Overlap2(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.armStair3, () => {
        scene.loadARM2();
    });
}

function attachARM2Overlap(scene) {
    scene.destroyCurrentOverlap();
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.armDown2, () => {
        scene.loadARM1();
        scene.refreshDebug();
    });
}

function attachARM2Overlap2(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.armDown3, () => {
        scene.loadARM1();
        scene.refreshDebug();
    });
}

function attachCL2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.CL2Entrance1, () => {
        scene.loadCL2();
        scene.refreshDebug();
    });
}

function attachCL2Doormat1Overlap(scene) {
    scene.destroyCurrentOverlap();
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.cl2Doormat1, () => {
        scene.loadARM2();
        scene.refreshDebug();
    });
}

function attachARM101Door1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.arm1Room1Entrance1, () => {
        scene.loadARM101Door1();
        scene.refreshDebug();
    })
}

function attachARM101Door2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.arm1Room1Entrance2, () => {
        scene.loadARM101Door2();
        scene.refreshDebug();
    })
}

function attachARM101Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM101Doormat1, () => {
        scene.loadARM1(scene.worldWidth - 100, 430);
        scene.refreshDebug();
    })
}

function attachARM101Doormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM101Doormat2, () => {
        scene.loadARM1(scene.worldWidth - 100, 590);
        scene.refreshDebug();
    })
}

function attachARM102Door1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.arm102Entrance1, () => {
        scene.loadARM102(scene.worldWidth - 100, 590);
        scene.refreshDebug();
    })
}

function attachARM102Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM102Doormat1, () => {
        scene.loadARM1(scene.worldWidth - 100, 240);
        scene.refreshDebug();
    })
}

function attachARM103Door1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room3Door1, () => {
        scene.loadARM103(200, 590);
        scene.refreshDebug();
    })
}

function attachARM103Door2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room3Door2, () => {
        scene.loadARM103((scene.worldWidth / 2) - 200, 590);
        scene.refreshDebug();
    })
}

function attachARM103Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM103Doormat1, () => {
        scene.loadARM1(scene.worldWidth - 630, 120);
        scene.refreshDebug();
    })
}

function attachARM103Doormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM103Doormat2, () => {
        scene.loadARM1(scene.worldWidth - 410, 120);
        scene.refreshDebug();
    })
}

function attachGuidanceDoorOverlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.guidanceClinicDoor2, () => {
        scene.loadGuidance(515, 400);
        scene.refreshDebug();
    })
}

function attachGuidanceDoormatOverlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.guidanceDoormat1, () => {
        scene.loadARM1(670, 120);
        scene.refreshDebug();
    })
}

export { attachARM1Overlap, attachARM1Overlap2, attachARM2Overlap, attachARM2Overlap2, attachCL2Overlap, attachCL2Doormat1Overlap, attachARM101Door1Overlap, attachARM101Door2Overlap, attachARM101Doormat1Overlap, attachARM101Doormat2Overlap, attachARM102Door1Overlap, attachARM102Doormat1Overlap, attachOutsideOverlap, attachARM103Door1Overlap, attachARM103Doormat1Overlap, attachARM103Doormat2Overlap, attachARM103Door2Overlap, attachGuidanceDoorOverlap, attachGuidanceDoormatOverlap }