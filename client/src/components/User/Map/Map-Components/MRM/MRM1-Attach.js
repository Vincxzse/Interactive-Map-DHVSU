
function loadOutside(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createOutside(scene, scene.worldWidth, scene.worldHeight, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "outside";
    scene.attachOutsideOverlap();
    scene.attachOutsideOverlap2();
    scene.attachOutsideOverlap3();
    scene.attachOutsideOverlap4();

    attachMRMEntrance1Overlap(scene);
    attachMRMEntrance2Overlap(scene);
    attachMRMEntrance3Overlap(scene);
    attachMRMEntrance4Overlap(scene);
}

function attachMRMEntrance1Overlap(scene) {
    console.log("Attaching MRM Entrance 1...");
    scene.destroyCurrentOverlap();
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance1, () => {
        console.log("MRM Entrance 1 triggered!");
        scene.loadMRM(scene.worldWidth / 2, 250);
        scene.refreshDebug();
    });
}

function attachMRMEntrance2Overlap(scene) {
    console.log("Attaching MRM Entrance 2...");
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance2, () => {
        console.log("MRM Entrance 2 triggered!");
        scene.loadMRM(scene.worldWidth / 2, 50);
        scene.refreshDebug();
    });
}

function attachMRMEntrance3Overlap(scene) {
    console.log("Attaching MRM Entrance 3...");
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance3, () => {
        console.log("MRM Entrance 3 triggered!");
        scene.loadMRM(200, 600);
        scene.refreshDebug();
    });
}

function attachMRMEntrance4Overlap(scene) {
    console.log("Attaching MRM Entrance 4...");
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.MRMEntrance4, () => {
        console.log("MRM Entrance 4 triggered!");
        scene.loadMRM(scene.worldWidth - 150, 600);
        scene.refreshDebug();
    });
}

function attachMRMStair1Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrmStair3, () => {
        scene.loadMRM2nd(280, 550);
        scene.refreshDebug();
    })
}

function attachMRMStair2Overlap(scene) {
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrmStair2, () => {
        scene.loadMRM2nd(1775, 550);
        scene.refreshDebug();
    })
}

function attachMRM2ndStair1Overlap(scene) {
    console.log("Attaching MRM...");
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm2stair2, () => {
        scene.loadMRM(280, 550);
        scene.refreshDebug();
    });
}

function attachMRM2ndStair2Overlap(scene) {
    console.log("Attaching MRM...");
    scene.currentOverlap = scene.physics.add.overlap(scene.player, scene.mrm2stair1, () => {
        scene.loadMRM(1775, 550);
        scene.refreshDebug();
    });
}

export { 
    attachMRMEntrance1Overlap,
    attachMRMEntrance2Overlap,
    attachMRMEntrance3Overlap,
    attachMRMEntrance4Overlap,
    attachMRMStair1Overlap,
    attachMRMStair2Overlap,
    attachMRM2ndStair1Overlap,
    attachMRM2ndStair2Overlap
};