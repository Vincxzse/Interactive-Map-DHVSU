import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationSection from "../Admin/Admin-Main/Navigation/Navigation-Section";
import MapPage from "./Map/Map-Page";
import SettingsPage from "./Settings/Settings-Page";

function UserPage() {
    return (
        <>
            <div className="flex flex-col w-screen h-screen items-start justify-start bg-[#1E232C]">
                <div className="flex flex-col w-full h-[10%]">
                    <NavigationSection />
                </div>
                <div className="flex flex-col w-full h-[90%] p-2">
                    <Routes>
                        <Route index element={<Navigate to="map" replace />} />
                        <Route path="map" element={<MapPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default UserPage;