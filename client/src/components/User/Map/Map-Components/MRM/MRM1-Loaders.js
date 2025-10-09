import {
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
    attachGuidanceExitOverlap
} from "./MRM1-Attach.js"

import { createMRM } from './MRM-1/MRM-Map.jsx'
import { createMRM2nd } from './MRM-2/MRM-Map-2.jsx'
import { createMRM101 } from "./MRM-1/MRM101.jsx"
import { createMRM102 } from "./MRM-1/MRM102.jsx"
import { createMRM103 } from "./MRM-1/MRM103.jsx"
import { createGuidance } from "./MRM-1/Guidance.jsx"

// Load the main MRM building (1st floor)
function loadMRM(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    scene.currentMap = "mrm"
    attachMRMStair1Overlap(scene)
    attachMRMStair2Overlap(scene)
    attachMRMExit1(scene)
    attachMRM101Entrance1Overlap(scene)
    attachMRM101Entrance2Overlap(scene)
    attachMRM102Entrance1Overlap(scene)
    attachMRM103Entrance1Overlap(scene)
    attachMRM103Entrance2Overlap(scene)
    attachGCEntrance1Overlap(scene)
}

// Load MRM 2nd floor (if you have one)
function loadMRM2nd(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM2nd(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM2ndStair1Overlap(scene)
    attachMRM2ndStair2Overlap(scene)
    
    // Attach overlaps for 2nd floor
    // Add your 2nd floor overlaps here
}

function loadMRM101(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM101(scene, scene.worldWidth / 2, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM101Doormat1Overlap(scene)
    attachMRM101Doormat2Overlap(scene)
}

function loadMRM102(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM102(scene, scene.worldWidth / 2, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM102Doormat1Overlap(scene)
}

function loadMRM103(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM103(scene, scene.worldWidth / 2, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM103Exit1Overlap(scene)
    attachMRM103Exit2Overlap(scene)
}

function loadGC1(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createGuidance(scene, scene.worldWidth / 3, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachGuidanceExitOverlap(scene)
}

export { 
    loadMRM,
    loadMRM2nd,
    loadMRM101,
    loadMRM102,
    loadMRM103,
    loadGC1
}