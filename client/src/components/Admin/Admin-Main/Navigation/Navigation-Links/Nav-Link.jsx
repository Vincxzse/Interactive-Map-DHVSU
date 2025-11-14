import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavLink({ navTitle, mobile = false }) {
    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthorized = user.role === "super admin" || user.role === "admin";

    // Determine if this link is currently active
    const getIsActive = () => {
        const title = navTitle.toLowerCase();
        const path = location.pathname;

        if (title === 'overview') return path === '/admin/overview';
        if (title === 'manage users') return path === '/admin/user-management';
        if (title === 'campus map') return path === '/home/map';
        if (title === 'settings') return path === '/home/settings';
        return false;
    };

    const isActive = getIsActive();

    // Handle navigation
    function handleClick() {
        const title = navTitle.toLowerCase();
        
        if (title === 'overview') {
            navigate('/admin/overview');
        } else if (title === 'manage users') {
            navigate('/admin/user-management');
        } else if (title === 'campus map') {
            navigate('/home/map');
        } else if (title === 'settings') {
            navigate('/home/settings');
        }
    }

    // Desktop styles for admin
    if (isAuthorized && !mobile) {
        return (
            <button 
                className={`
                    flex items-center justify-center text-center font-normal font-sans tracking-wide text-white 
                    rounded-full border-3 border-[#E14C4C] 
                    w-[calc(100%-10px)] h-[calc(100%-10px)]
                    transition-all duration-200
                    ${isActive 
                        ? 'bg-[#E14C4C] shadow-lg' 
                        : 'hover:bg-[#E14C4C] hover:shadow-md'
                    }
                `}
                onClick={handleClick}
            >
                {navTitle}
            </button>
        );
    }

    // Mobile styles for admin
    if (isAuthorized && mobile) {
        return (
            <button 
                className={`
                    flex items-center justify-start px-4 py-3 text-left font-normal font-sans tracking-wide
                    rounded-lg transition-all duration-200 w-full
                    ${isActive 
                        ? 'bg-[#E14C4C] text-white shadow-md' 
                        : 'text-gray-300 hover:bg-[rgba(225,76,76,0.2)] hover:text-white'
                    }
                `}
                onClick={handleClick}
            >
                <span className="flex items-center gap-3">
                    {/* Icon based on nav title */}
                    {navTitle.toLowerCase() === 'overview' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                    )}
                    {navTitle.toLowerCase() === 'manage users' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    )}
                    {navTitle}
                </span>
            </button>
        );
    }

    // Desktop styles for regular users
    if (!isAuthorized && !mobile) {
        return (
            <button 
                className={`
                    flex items-center justify-center text-center font-normal font-sans tracking-wide text-white 
                    rounded-full border-3 border-[#E14C4C] 
                    w-[calc(100%-10px)] h-[calc(100%-10px)]
                    transition-all duration-200
                    ${isActive 
                        ? 'bg-[#E14C4C] shadow-lg' 
                        : 'hover:bg-[#E14C4C] hover:shadow-md'
                    }
                `}
                onClick={handleClick}
            >
                {navTitle}
            </button>
        );
    }

    // Mobile styles for regular users
    if (!isAuthorized && mobile) {
        return (
            <button 
                className={`
                    flex items-center justify-start px-4 py-3 text-left font-normal font-sans tracking-wide
                    rounded-lg transition-all duration-200 w-full
                    ${isActive 
                        ? 'bg-[#E14C4C] text-white shadow-md' 
                        : 'text-gray-300 hover:bg-[rgba(225,76,76,0.2)] hover:text-white'
                    }
                `}
                onClick={handleClick}
            >
                <span className="flex items-center gap-3">
                    {/* Icon based on nav title */}
                    {navTitle.toLowerCase() === 'campus map' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                            <line x1="8" y1="2" x2="8" y2="18"></line>
                            <line x1="16" y1="6" x2="16" y2="22"></line>
                        </svg>
                    )}
                    {navTitle.toLowerCase() === 'settings' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m6-12h-6m0 6H6m6 6H6m12 0h-6"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                        </svg>
                    )}
                    {navTitle}
                </span>
            </button>
        );
    }

    return null;
}

export default NavLink;