import { attachMRMStair1Overlap, attachMRMStair2Overlap, attachMRM2ndStair1Overlap, attachMRM2ndStair2Overlap } from "./MRM1-Attach.js"

import { createMRM } from './MRM-1/MRM-Map.jsx';
import { createMRM2nd } from './MRM-2/MRM-Map-2.jsx';

// Load the main MRM building (1st floor)
function loadMRM(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createMRM(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "mrm";
    attachMRMStair1Overlap(scene)
    attachMRMStair2Overlap(scene)
}

// Load MRM 2nd floor (if you have one)
function loadMRM2nd(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createMRM2nd(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "mrm2nd";
    attachMRM2ndStair1Overlap(scene);
    attachMRM2ndStair2Overlap(scene);
    
    // Attach overlaps for 2nd floor
    // Add your 2nd floor overlaps here
}

export { 
    loadMRM,
    loadMRM2nd
};