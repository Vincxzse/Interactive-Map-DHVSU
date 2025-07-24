import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationSection from "./Navigation/Navigation-Section";
import Overview from "./Overview/Overview";
import UserManagement from "./User-Management/User-Management";

function AdminPage() {
    return (
        <>
            <div className="flex flex-col w-full h-full items-start justify-start bg-[#1E232C]">
                <div className="flex flex-col w-full h-[10%]">
                    <NavigationSection />
                </div>
                <div className="flex flex-col w-full h-[90%] p-2">
                    <Routes>
                        <Route index element={<Navigate to="overview" replace />} />
                        <Route path="overview" element={<Overview />} />
                        <Route path="user-management" element={<UserManagement />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default AdminPage;