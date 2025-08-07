import React, { useState } from "react";
import HeaderContainer from "./Header/Header-Container";
import NavLink from "./Navigation-Links/Nav-Link";

function NavigationSection() {
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthorized = user.role === "super admin" || user.role === "admin" ? true : false;
    const [active, setActive] = useState('');

    return (
        <>
            <div className="grid grid-cols-5 w-full h-full px-5 py-1 gap-5 bg-[#2B313C] ">
                <div className="flex flex-row col-span-2">
                    <HeaderContainer
                        imgHeight = '50px'
                        imgWidth = '50px'
                    />
                </div>
                <div className="flex flex-row h-full w-full items-center justify-center"></div>
                { isAuthorized ? (
                    <>
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
                    </>
                ) : (
                    <>
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
                    </>
                ) }
                
            </div>
        </>
    );
}

export default NavigationSection;