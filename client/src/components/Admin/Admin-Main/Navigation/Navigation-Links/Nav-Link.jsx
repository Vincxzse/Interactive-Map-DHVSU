import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavLink(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthorized = user.role === "super admin" || user.role === "admin" ? true : false;

    const activeButton = {
        backgroundColor: '#E14C4C'
    }

    function handleClick() {
        const title = props.navTitle.toLowerCase();
        title === 'overview'
            ? navigate('/admin/overview')
            : title === 'manage users'
            ? navigate('/admin/user-management')
            : title === 'campus map'
            ? navigate('/home/map')
            : title === 'settings'
            ? navigate('/home/settings')
            : null;
    }
    
    if (isAuthorized) {
        const isActive = (location.pathname === "/admin/overview" && props.navTitle.toLowerCase() === "overview") || (location.pathname === "/admin/user-management" && props.navTitle.toLowerCase() === "manage users");
        return (
            <>
                <button 
                    className="flex flex-row w-[calc(100%-10px)] h-[calc(100%-10px)] items-center justify-center text-center font-normal font-sans tracking-wide text-white xl:rounded-full border-3 xl:border-[#E14C4C] hover:bg-[#E14C4C] transition-[.1s] cursor-pointer"
                    style={ isActive ? activeButton : null }
                    onClick={handleClick}
                >
                    { props.navTitle }
                </button>
            </>
        );
    } else {
        const isActive = (location.pathname === "/home/map" && props.navTitle.toLowerCase() === "campus map") || (location.pathname === "/home/settings" && props.navTitle.toLowerCase() === "settings");
        return (
            <>
                <button 
                    className="flex flex-row w-[calc(100%-10px)] h-[calc(100%-10px)] items-center justify-center text-center font-normal font-sans tracking-wide text-white rounded-full border-3 border-[#E14C4C] hover:bg-[#E14C4C] transition-[.1s] cursor-pointer"
                    style={ isActive ? activeButton : null }
                    onClick={handleClick}
                >
                    { props.navTitle }
                </button>
            </>
        );
    }

    
}

export default NavLink;