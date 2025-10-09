
import { attachMRMStair1Overlap, attachMRMStair2Overlap } from "./MRM1-Attach"
import { attachMRM2ndStair1Overlap } from "./MRM2-Attach";

function loadMRM(scene, playerPositionX, playerPositionY) {
    scene.clearMap();
    createMRM(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY);
    scene.refreshDebug();
    scene.currentMap = "mrm";
    attachMRMStair1Overlap(scene)
    attachMRMStair2Overlap(scene)
}