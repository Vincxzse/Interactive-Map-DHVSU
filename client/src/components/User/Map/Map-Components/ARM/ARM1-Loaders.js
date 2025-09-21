import { attachARM1Overlap, attachARM1Overlap2, attachARM2Overlap, attachARM2Overlap2, attachCL2Overlap, attachCL2Doormat1Overlap, attachARM101Door1Overlap, attachARM101Door2Overlap, attachARM101Doormat1Overlap, attachARM101Doormat2Overlap, attachARM102Door1Overlap, attachARM102Doormat1Overlap, attachOutsideOverlap, attachARM103Door1Overlap, attachARM103Doormat1Overlap, attachARM103Doormat2Overlap, attachARM103Door2Overlap, attachGuidanceDoorOverlap, attachGuidanceDoormatOverlap, attachClinicDoorOverlap, attachClinicDoormatOverlap, attachFacultyEntrance1Overlap, attachFacultyDoormat1Overlap, attachFacultyDoormat2Overlap, attachFacultyEntrance2Overlap } from './ARM1-Attach.js'
import { createARM } from "./ARM-1st/ARM-Map.jsx";
import { createARM101 } from "./ARM-1st/ARM-101.jsx";
import { createARM102 } from "./ARM-1st/ARM-102.jsx";
import { createARM103 } from "./ARM-1st/ARM-103.jsx";
import { createGuidance } from './ARM-1st/Guidance-Room.jsx';
import { createARM2nd } from "./ARM-2nd/ARM-2nd.jsx";
import { createCL2 } from "./ARM-2nd/CL2.jsx";
import { createOutside } from '../Outside-Map.jsx';
import { createClinic } from './ARM-1st/Clinic-Room.jsx';
import { createFaculty } from './ARM-1st/Faculty-Room.jsx';

function loadOutside(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createOutside(scene, scene.worldWidth, scene.worldHeight, playerPositionX, playerPositionY);
    scene.currentMap = "outside";
    scene.attachOutsideOverlap();
}

function loadARM1(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createARM(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachOutsideOverlap(scene);
    attachARM1Overlap(scene);
    attachARM1Overlap2(scene);
    attachARM101Door1Overlap(scene);
    attachARM101Door2Overlap(scene);
    attachARM102Door1Overlap(scene);
    attachARM103Door1Overlap(scene);
    attachARM103Door2Overlap(scene);
    attachGuidanceDoorOverlap(scene);
    attachClinicDoorOverlap(scene);
    attachFacultyEntrance1Overlap(scene);
    attachFacultyEntrance2Overlap(scene);
}

function loadARM1ARM101Exit1(scene) {
    scene.clearMap();
    createARM(scene, scene.worldWidth, scene.worldHeight / 5, scene.playerPositionX, scene.playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachARM1Overlap(scene);
    attachARM1Overlap2(scene);
    attachARM101Door1Overlap(scene);
    attachARM101Door2Overlap(scene);
}

function loadARM101Door1(scene) {
    scene.clearMap();
    createARM101(scene, scene.worldWidth / 1.5, scene.worldHeight / 3.5, 150, (scene.worldHeight / 3.5) / 5);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachARM101Doormat1Overlap(scene);
    attachARM101Doormat2Overlap(scene);
}

function loadARM101Door2(scene) {
    scene.clearMap();
    createARM101(scene, scene.worldWidth / 1.5, scene.worldHeight / 3.5, 150, (scene.worldHeight / 3.5) / 1.11);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachARM101Doormat1Overlap(scene);
    attachARM101Doormat2Overlap(scene);
}

function loadARM102(scene) {
    scene.clearMap();
    createARM102(scene, scene.worldWidth / 1.5, scene.worldHeight / 3.5, 150, (scene.worldHeight / 3.5) / 1.11);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachARM102Doormat1Overlap(scene);
}

function loadARM103(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createARM103(scene, scene.worldWidth / 2, scene.worldHeight / 5, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachARM103Doormat1Overlap(scene);
    attachARM103Doormat2Overlap(scene);
}

function loadGuidance(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createGuidance(scene, scene.worldWidth / 3, scene.worldHeight / 7, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachGuidanceDoormatOverlap(scene);
}

function loadClinic(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createClinic(scene, scene.worldWidth / 3, scene.worldHeight / 7, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachClinicDoormatOverlap(scene);
}

function loadFaculty(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createFaculty(scene, scene.worldWidth / 3, scene.worldHeight / 4, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "arm";
    attachFacultyDoormat1Overlap(scene);
    attachFacultyDoormat2Overlap(scene);
}

function loadARM2(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createARM2nd(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "arm2nd";
    attachARM2Overlap(scene);
    attachARM2Overlap2(scene);
    attachCL2Overlap(scene);
}

function loadCL2(scene) {
    scene.clearMap();
    createCL2(scene, scene.worldWidth / 1.5, scene.worldHeight / 4);
    scene.refreshDebug();
    scene.currentMap = "cl2";
    attachCL2Doormat1Overlap(scene);
}

export { loadARM1, loadARM101Door1, loadARM101Door2, loadARM2, loadCL2, loadARM1ARM101Exit1, loadARM102, loadOutside, loadARM103, loadGuidance, loadClinic, loadFaculty }