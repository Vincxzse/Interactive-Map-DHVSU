import React, { useState } from "react";
import HeaderContainer from "./Header/Header-Container";
import NavLink from "./Navigation-Links/Nav-Link";

const menuIcon = "/map-assets/menu-icon.png"

function NavigationSection() {
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthorized = user.role === "super admin" || user.role === "admin" ? true : false;
    const [active, setActive] = useState('');
    const [toggleNav, setToggleNav] = useState(false)

    return (
        <>
            <div className="flex flex-row items-center justify-between w-full h-full px-5 py-1 gap-5 bg-[#2B313C] ">
                <div className="flex flex-row col-span-2">
                    <HeaderContainer
                        imgHeight = '50px'
                        imgWidth = '50px'
                    />
                </div>
                {/* <div className="flex flex-row h-full w-full items-center justify-center"></div> */}
                { isAuthorized ? (
                    <>
                        <div className="hidden xl:flex flex-row items-center justify-end h-full w-100">
                            <div className="flex flex-row h-full w-full items-center justify-center">
                                <NavLink
                                    isActive={active === 'overview'}
                                    navTitle = 'Overview'
                                />
                            </div>
                            <div className="flex flex-row h-full w-full items-center justify-center">
                                <NavLink
                                    isActive={active === 'manage users'}
                                    navTitle = 'Manage Users'
                                />
                            </div>
                        </div>
                        <div className="flex xl:hidden h-full w-auto items-center justify-center">
                            <button
                                className="cursor-pointer"
                                onClick={() => setToggleNav(true)}
                            >
                                <img src={ menuIcon } alt="menu icon" className="h-6 w-auto invert-100" />
                            </button>
                            {
                                toggleNav ? (
                                    <div
                                        className="absolute h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.2)] flex flex-col items-end justify-start pt-12"
                                        onClick={() => setToggleNav(false)}
                                    >
                                        <div className="relative flex flex-col items-center justify-center w-1/3 h-auto bg-[rgba(255,255,255,0.5)] mr-5">
                                            <NavLink
                                                isActive={active === 'manage users'}
                                                navTitle = 'Manage Users'
                                            />
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </>
                ) : (
                    <div className="flex flex-row items-center justify-end h-full w-100">
                        <div className="flex flex-row h-full w-full items-center justify-center">
                            <NavLink
                                isActive={active === 'map'}
                                setActive={setActive}
                                navTitle = 'Campus Map'
                            />
                        </div>
                        <div className="flex flex-row h-full w-full items-center justify-center">
                            <NavLink
                                isActive={active === 'settings'}
                                setActive={setActive}
                                navTitle = 'Settings'
                            />
                        </div>
                    </div>
                ) }
                
            </div>
        </>
    );
}

export default NavigationSection;