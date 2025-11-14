import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderContainer from "./Header/Header-Container";
import NavLink from "./Navigation-Links/Nav-Link";

const menuIcon = "/map-assets/menu-icon.png"

function NavigationSection() {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthorized = user.role === "super admin" || user.role === "admin" ? true : false;
    const [toggleNav, setToggleNav] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (toggleNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [toggleNav]);

    // Close menu when route changes
    useEffect(() => {
        setToggleNav(false);
    }, [location.pathname]);

    return (
        <>
            <div className="flex flex-row items-center justify-between w-full h-full px-5 py-1 gap-5 bg-[#2B313C] relative z-105">
                <div className="flex flex-row col-span-2">
                    <HeaderContainer
                        imgHeight='50px'
                        imgWidth='50px'
                    />
                </div>

                {isAuthorized ? (
                    <>
                        {/* Desktop Navigation - Admin */}
                        <div className="hidden xl:flex flex-row items-center justify-end h-full w-100 gap-2">
                            <div className="flex flex-row h-full w-full items-center justify-center">
                                <NavLink navTitle='Overview' />
                            </div>
                            <div className="flex flex-row h-full w-full items-center justify-center">
                                <NavLink navTitle='Manage Users' />
                            </div>
                        </div>

                        {/* Mobile Navigation - Admin */}
                        <div className="flex xl:hidden h-full w-auto items-center justify-center">
                            <button
                                className="cursor-pointer p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors"
                                onClick={() => setToggleNav(true)}
                                aria-label="Open menu"
                            >
                                <img src={menuIcon} alt="menu icon" className="h-6 w-auto invert" />
                            </button>

                            {/* Mobile Menu Overlay - Admin */}
                            {toggleNav && (
                                <div
                                    className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-50 transition-opacity duration-300"
                                    onClick={() => setToggleNav(false)}
                                >
                                    {/* Sliding Menu Panel */}
                                    <div
                                        className="absolute right-0 top-0 h-full w-72 bg-[#2B313C] shadow-2xl transform transition-transform duration-300 ease-out"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Menu Header */}
                                        <div className="flex items-center justify-between p-5 border-b border-gray-600">
                                            <h2 className="text-white text-lg font-semibold">Menu</h2>
                                            <button
                                                onClick={() => setToggleNav(false)}
                                                className="text-white hover:bg-[rgba(255,255,255,0.1)] p-2 rounded-lg transition-colors"
                                                aria-label="Close menu"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Menu Items */}
                                        <nav className="flex flex-col p-4 gap-2">
                                            <NavLink navTitle='Overview' mobile={true} />
                                            <NavLink navTitle='Manage Users' mobile={true} />
                                        </nav>

                                        {/* User Info Section */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-600">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                    {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white text-sm font-medium">{user.username || 'Admin'}</span>
                                                    <span className="text-gray-400 text-xs capitalize">{user.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        {/* Desktop Navigation - Regular User */}
                        <div className="hidden md:flex flex-row items-center justify-end h-full w-100 gap-2">
                            <div className="flex flex-row h-full w-full items-center justify-center">
                                <NavLink navTitle='Campus Map' />
                            </div>
                            <div className="flex flex-row h-full w-full items-center justify-center">
                                <NavLink navTitle='Settings' />
                            </div>
                        </div>

                        {/* Mobile Navigation - Regular User */}
                        <div className="flex md:hidden h-full w-auto items-center justify-center">
                            <button
                                className="cursor-pointer p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors"
                                onClick={() => setToggleNav(true)}
                                aria-label="Open menu"
                            >
                                <img src={menuIcon} alt="menu icon" className="h-6 w-auto invert" />
                            </button>

                            {/* Mobile Menu Overlay - Regular User */}
                            {toggleNav && (
                                <div
                                    className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-50 transition-opacity duration-300"
                                    onClick={() => setToggleNav(false)}
                                >
                                    {/* Sliding Menu Panel */}
                                    <div
                                        className="absolute right-0 top-0 h-full w-72 bg-[#2B313C] shadow-2xl transform transition-transform duration-300 ease-out"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Menu Header */}
                                        <div className="flex items-center justify-between p-5 border-b border-gray-600">
                                            <h2 className="text-white text-lg font-semibold">Menu</h2>
                                            <button
                                                onClick={() => setToggleNav(false)}
                                                className="text-white hover:bg-[rgba(255,255,255,0.1)] p-2 rounded-lg transition-colors"
                                                aria-label="Close menu"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Menu Items */}
                                        <nav className="flex flex-col p-4 gap-2">
                                            <NavLink navTitle='Campus Map' mobile={true} />
                                            <NavLink navTitle='Settings' mobile={true} />
                                        </nav>

                                        {/* User Info Section */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-600">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white text-sm font-medium">{user.username || 'User'}</span>
                                                    <span className="text-gray-400 text-xs capitalize">{user.role || 'Student'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default NavigationSection;