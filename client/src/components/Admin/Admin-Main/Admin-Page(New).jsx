import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationSection from "./Navigation/Navigation-Section";
import Overview from "./Overview/Overview";
import UserManagement from "./User-Management/User-Management";
import CreateUserPopUp from "./User-Management/Create-User-Popup";
import EditDelete from "./User-Management/Edit-Delete";

function AdminPage() {
    // const currentUID = localStorage.getItem('userID');
    // console.log("Current User: ", currentUID);
    
    const [createUserPopUp, setCreateUserPopUp] = useState(false);
    const [editDeletePopUp, setEditDeletePopUp] = useState(false);
    const [userInfo, setUserInfo] = useState('');
    const handleCreateUserPopUp = (data) => {
        setCreateUserPopUp(data);
        console.log("Received from Create User Button: ", data);
    }
    const handleCloseCreatePopUp = (data) => {
        setCreateUserPopUp(data);
        console.log("Received from Close Button: ", data);
    }
    const handleEditDeletePopUp = (data) => {
        setEditDeletePopUp(data);
        console.log("Received from Edit/Delete Button: ", data);
    }
    const handleCloseEditDeletePopUp = (data) => {
        setEditDeletePopUp(data);
        console.log("Received from Edit/Delete Button: ", data);
    }
    const handleUserInfo = (userData) => {
        setUserInfo(userData);
        console.log("User Data: ", userData.id);
    }

    return (
        <>
            { createUserPopUp ? <CreateUserPopUp onSendData = { handleCloseCreatePopUp } /> : editDeletePopUp ? <EditDelete onSendData = { handleCloseEditDeletePopUp } onSendData2 = { handleCloseCreatePopUp } user = { userInfo } /> : null }
            <div className="flex flex-col w-screen h-screen items-start justify-start bg-[#1E232C]">
                <div className="flex flex-col w-full h-[10%]">
                    <NavigationSection />
                </div>
                <div className="flex flex-col w-full h-[90%] p-2">
                    <Routes>
                        <Route index element={<Navigate to="overview" replace />} />
                        <Route path="overview" element={<Overview />} />
                        <Route path="user-management" element={<UserManagement onSendData={ handleCreateUserPopUp } onSendData2={ handleEditDeletePopUp } userInfo = { handleUserInfo } />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default AdminPage;