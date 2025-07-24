import React from "react";
import { useNavigate } from "react-router-dom";

function NavLink(props) {
    const navigate = useNavigate();

    const activeButton = {
        backgroundColor: '#E14C4C'
    }

    function handleClick() {
        const title = props.navTitle.toLowerCase();
        props.setActive(title);
        title === 'overview'
            ? navigate('/admin/overview')
            : title === 'manage users'
            ? navigate('/admin/user-management') : null;
    }

    return (
        <>
            <button 
                className="flex flex-row w-[calc(100%-10px)] h-[calc(100%-10px)] items-center justify-center text-center font-normal font-sans tracking-wide text-white rounded-full border-3 border-[#E14C4C] hover:bg-[#E14C4C] transition-[.1s] cursor-pointer"
                style={ props.isActive ? activeButton : null }
                onClick={handleClick}
            >
                { props.navTitle }
            </button>
        </>
    );
}

export default NavLink;