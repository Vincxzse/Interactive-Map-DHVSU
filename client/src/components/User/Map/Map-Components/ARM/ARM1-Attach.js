
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
        scene.loadARM2(1730, 150);
    });

    // Overlap for exit back to outside
    scene.physics.add.overlap(scene.player, scene.exit1, () => {
        scene.loadOutside(1250, 1500);
        scene.refreshDebug();
    });
}

function attachARM1Overlap2(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.armStair3, () => {
        scene.loadARM2(295, 150);
    });
}

function attachARM2Overlap(scene) {
    scene.destroyCurrentOverlap();
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.armDown2, () => {
        scene.loadARM1(1730, 150);
        scene.refreshDebug();
    });
}

function attachARM2Overlap2(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.armDown3, () => {
        scene.loadARM1(295, 150);
        scene.refreshDebug();
    });
}

function attachCL2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.CL2Entrance1, () => {
        scene.loadCL2(850, 200);
        scene.refreshDebug();
    });
}

function attachCL2Overlap2(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.CL2Entrance2, () => {
        scene.loadCL2(850, 775);
        scene.refreshDebug();
    });
}

function attachCL2Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.cl2Doormat1, () => {
        scene.loadARM2(100, 360);
        scene.refreshDebug();
    });
}

function attachCL2Doormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.cl2Doormat2, () => {
        scene.loadARM2(100, 590);
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

function attachClinicDoorOverlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.guidanceClinicDoor1, () => {
        scene.loadClinic(150, 400);
        scene.refreshDebug();
    })
}

function attachClinicDoormatOverlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.clinicDoormat1, () => {
        scene.loadARM1(450, 120);
        scene.refreshDebug();
    })
}

function attachFacultyEntrance1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyEntrance1, () => {
        scene.loadFaculty(550, 250);
        scene.refreshDebug();
    })
}

function attachFacultyEntrance2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyEntrance2, () => {
        scene.loadFaculty(550, 830);
        scene.refreshDebug();
    })
}

function attachFacultyDoormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyDoormat1, () => {
        scene.loadARM1(60, 360);
        scene.refreshDebug();
    })
}

function attachFacultyDoormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.facultyDoormat2, () => {
        scene.loadARM1(60, 590);
        scene.refreshDebug();
    })
}

function attachARM202Door1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room5Door1, () => {
        scene.loadARM202(200, 600);
        scene.refreshDebug();
    })
}

function attachARM202Door2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room5Door2, () => {
        scene.loadARM202(800, 600);
        scene.refreshDebug();
    })
}

function attachARM202Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM202Doormat1, () => {
        scene.loadARM2(530, 120);
        scene.refreshDebug();
    })
}

function attachARM202Doormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM202Doormat2, () => {
        scene.loadARM2(750, 120);
        scene.refreshDebug();
    })
}

function attachARM203Door1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room4Door1, () => {
        scene.loadARM203(200, 600);
        scene.refreshDebug();
    })
}

function attachARM203Door2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room4Door2, () => {
        scene.loadARM203(800, 600);
        scene.refreshDebug();
    })
}

function attachARM203Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM203Doormat1, () => {
        scene.loadARM2(925, 120);
        scene.refreshDebug();
    })
}

function attachARM203Doormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM203Doormat2, () => {
        scene.loadARM2(1145, 120);
        scene.refreshDebug();
    })
}

function attachARM204Door1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room3Door1, () => {
        scene.loadARM204(200, 600);
        scene.refreshDebug();
    })
}

function attachARM204Door2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.room3Door2, () => {
        scene.loadARM204(800, 600);
        scene.refreshDebug();
    })
}


function attachARM204Doormat1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM204Doormat1, () => {
        scene.loadARM2(1270, 120);
        scene.refreshDebug();
    })
}

function attachARM204Doormat2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.ARM204Doormat2, () => {
        scene.loadARM2(1490, 120);
        scene.refreshDebug();
    })
}

export { attachARM1Overlap, attachARM1Overlap2, attachARM2Overlap, attachARM2Overlap2, attachCL2Overlap, attachCL2Overlap2, attachCL2Doormat1Overlap, attachCL2Doormat2Overlap, attachARM101Door1Overlap, attachARM101Door2Overlap, attachARM101Doormat1Overlap, attachARM101Doormat2Overlap, attachARM102Door1Overlap, attachARM102Doormat1Overlap, attachOutsideOverlap, attachARM103Door1Overlap, attachARM103Doormat1Overlap, attachARM103Doormat2Overlap, attachARM103Door2Overlap, attachGuidanceDoorOverlap, attachGuidanceDoormatOverlap, attachClinicDoorOverlap, attachClinicDoormatOverlap, attachFacultyEntrance1Overlap, attachFacultyDoormat1Overlap, attachFacultyDoormat2Overlap, attachFacultyEntrance2Overlap, attachARM202Door1Overlap, attachARM202Door2Overlap, attachARM202Doormat1Overlap, attachARM202Doormat2Overlap, attachARM203Door1Overlap, attachARM203Door2Overlap, attachARM203Doormat1Overlap, attachARM203Doormat2Overlap, attachARM204Door1Overlap, attachARM204Door2Overlap, attachARM204Doormat1Overlap, attachARM204Doormat2Overlap }