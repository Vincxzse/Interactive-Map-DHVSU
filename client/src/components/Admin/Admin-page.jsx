import React, { useState } from "react";
import DashboardPage from "./Dashboard/Dashboard-page.jsx";
import ManageUsersPage from "./Manage-Users/Manage-Users-Page.jsx";
import dlcLogo from '../../assets/logo.png';
import closeImg from '../../assets/close.png';
import defaultAvatar from '../../assets/default_avatar.png';
import dashboardIcon from '../../assets/dashboard.png';
import multipleUsersIcon from '../../assets/group.png';
import npcIcon from '../../assets/dialogue.png';
import signOutIcon from '../../assets/logout.png';
import { useNavigate } from "react-router-dom";

function AdminPage() {
    const userName = localStorage.getItem("userName");

    const [navigationSelector, setNavigationSelector] = useState(1);
    const selected = { background: '#FFD700', color: '#000' };
    const notSelectedImg = { filter: 'invert(100)' }
    const navigate = useNavigate();

    function handleNavOne() {
        setNavigationSelector(1);
    }

    function handleNavTwo() {
        setNavigationSelector(2);
    }

    function handleNavThree() {
        setNavigationSelector(3);
    }

    function handleSignOut() {
        navigate('/');
    }

    return(
        <>
            <div className="grid grid-cols-[1fr_5fr] h-full w-full font-sans text-white overflow-hidden">
                <div className="grid grid-rows-[2fr_0fr_3fr_0fr_6fr_0fr_1fr] bg-[#8B3A3A]">
                    <div className="grid grid-cols-[1fr_1fr_1fr]">
                        <div className="flex items-start justify-center">
                            <a href="" className="w-auto h-auto mt-5">
                                <img src={closeImg} className="w-7 h-auto invert-100" />
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={dlcLogo} className="w-full h-auto rounded-full shadow-md" />    
                        </div>
                    </div>
                    <hr className="bg-[#800000] border-[#6B0000]" />
                    <div className="flex flex-col items-center justify-center gap-2">
                        <img src={defaultAvatar} className="w-16 h-auto shadow-md rounded-full" />
                        <h2 className="font-light text-xl tracking-widest">{userName}</h2>
                    </div>
                    <hr className="bg-[#800000] border-[#6B0000]" />
                    <div className="flex flex-col items-center gap-2 pt-2">
                        <button
                            className="flex flex-row w-[90%] rounded-md h-12 items-center justify-start gap-2 text-lg px-5 cursor-pointer hover:bg-[rgba(255,215,0,0.2)] transition-[0.1s]"
                            style={navigationSelector === 1 ? selected : null}
                            onClick={handleNavOne}
                        >
                            <img 
                                src={dashboardIcon}
                                className="w-5 h-5"
                                style={navigationSelector === 1 ? null : notSelectedImg}
                            />
                            Dashboard
                        </button>
                        <button
                            className="flex flex-row w-[90%] rounded-md h-12 items-center justify-start gap-2 text-lg px-5 cursor-pointer hover:bg-[rgba(255,215,0,0.2)] transition-[0.1s]"
                            style={navigationSelector === 2 ? selected : null}
                            onClick={handleNavTwo}
                        >
                            <img 
                                src={multipleUsersIcon}
                                className="w-5 h-5"
                                style={navigationSelector === 2 ? null : notSelectedImg}
                            />
                            Manage Users
                        </button>
                        <button
                            className="flex flex-row w-[90%] rounded-md h-12 items-center justify-start gap-2 text-lg px-5 cursor-pointer hover:bg-[rgba(255,215,0,0.2)] transition-[0.1s]"
                            style={navigationSelector === 3 ? selected : null}
                            onClick={handleNavThree}
                        >
                            <img 
                                src={npcIcon}
                                className="w-5 h-5"
                                style={navigationSelector === 3 ? null : notSelectedImg}
                            />
                            Manage NPCs
                        </button>
                    </div>
                    <hr className="bg-[#800000] border-[#6B0000]" />
                    <div className="flex flex-col items-center justify-center">
                        <button
                            className="flex flex-row gap-2 justify-center items-center w-auto cursor-pointer"
                            onClick={handleSignOut}
                        >
                            <img src={signOutIcon} className="h-5 w-auto invert-100" />
                            Sign Out
                        </button>
                    </div>
                </div>
                <div className="bg-[#f0f8ff] p-10 h-full w-full text-slate-800">
                    {navigationSelector === 1 ? <DashboardPage /> : navigationSelector === 2 ? <ManageUsersPage /> : null}
                </div>
            </div>
        </>
    );
}

export default AdminPage;