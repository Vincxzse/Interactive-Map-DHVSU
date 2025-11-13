
import {
    attachAdminEntrance1Overlap,
    attachAdminExit1Overlap
} from "./Admin-Attach.js"

import { createAdmin } from "./Admin-Bulding"

function loadAdmin(scene, playerPositionX, playerPositionY) {
    scene.clearMap()
    createAdmin(scene, scene.worldWidth, scene.worldHeight / 5, playerPositionX, playerPositionY)
    scene.refreshDebug()
    scene.currentMap = "admin"
    attachAdminExit1Overlap(scene)
}

export {
    loadAdmin,
}