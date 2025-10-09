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
    attachMRM201Exit2Overlap,
    attachMRM202Entrance1Overlap,
    attachMRM202Entrance2Overlap,
    attachMRM202Exit1Overlap,
    attachMRM202Exit2Overlap,
    attachMRM203Entrance1Overlap,
    attachMRM203Entrance2Overlap,
    attachMRM203Exit1Overlap,
    attachMRM203Exit2Overlap,
    attachMRM205Entrance1Overlap,
    attachMRM205Entrance2Overlap,
    attachMRM205Exit1Overlap,
    attachMRM205Exit2Overlap,
} from "./MRM1-Attach.js"

import { createMRM } from './MRM-1/MRM-Map.jsx'
import { createMRM2nd } from './MRM-2/MRM-Map-2.jsx'
import { createMRM101 } from "./MRM-1/MRM101.jsx"
import { createMRM102 } from "./MRM-1/MRM102.jsx"
import { createMRM103 } from "./MRM-1/MRM103.jsx"
import { createGuidance } from "./MRM-1/Guidance.jsx"
import { createClinic } from "./MRM-1/Clinic.jsx"
import { createFaculty } from "./MRM-1/Faculty.jsx"
import { createMRM201 } from "./MRM-2/MRM201.jsx"
import { createMRM202 } from "./MRM-2/MRM202.jsx"
import { createMRM203 } from "./MRM-2/MRM203.jsx"
import { createMRM205 } from "./MRM-2/MRM205.jsx"

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
    attachGCEntrance2Overlap(scene)
    attachFacultyEntrance1Overlap(scene)
    attachFacultyEntrance2Overlap(scene)
}

// Load MRM 2nd floor (if you have one)
function loadMRM2nd(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM2nd(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM2ndStair1Overlap(scene)
    attachMRM2ndStair2Overlap(scene)
    attachMRM201Entrance1Overlap(scene)
    attachMRM201Entrance2Overlap(scene)
    attachMRM202Entrance1Overlap(scene)
    attachMRM202Entrance2Overlap(scene)
    attachMRM203Entrance1Overlap(scene)
    attachMRM203Entrance2Overlap(scene)
    attachMRM205Entrance1Overlap(scene)
    attachMRM205Entrance2Overlap(scene)
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

function loadGC2(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createClinic(scene, scene.worldWidth / 3, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachClinicExitOverlap(scene)
}

function loadFacultyRoom(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createFaculty(scene, scene.worldWidth / 3, scene.worldHeight / 4, playerPositionX, playerPositionY);
    scene.refreshDebug()
    attachFacultyDoormat1Overlap(scene)
    attachFacultyDoormat2Overlap(scene)
}

function loadMRM201(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM201(scene, scene.worldWidth / 2, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM201Exit1Overlap(scene)
    attachMRM201Exit2Overlap(scene)
}

function loadMRM202(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM202(scene, scene.worldWidth / 2, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM202Exit1Overlap(scene)
    attachMRM202Exit2Overlap(scene)
}

function loadMRM203(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM203(scene, scene.worldWidth / 2, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM203Exit1Overlap(scene)
    attachMRM203Exit2Overlap(scene)
}

function loadMRM205(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createMRM205(scene, scene.worldWidth / 1.5, scene.worldHeight / 3.5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    attachMRM205Exit1Overlap(scene)
    attachMRM205Exit2Overlap(scene)
}

export { 
    loadMRM,
    loadMRM2nd,
    loadMRM101,
    loadMRM102,
    loadMRM103,
    loadGC1,
    loadGC2,
    loadFacultyRoom,
    loadMRM201,
    loadMRM202,
    loadMRM203,
    loadMRM205
}