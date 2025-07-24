import React, { useState } from "react";
import HeaderContainer from "./Header/Header-Container";
import NavLink from "./Navigation-Links/Nav-Link";

function NavigationSection() {
    const [active, setActive] = useState('overview')

    return (
        <>
            <div className="grid grid-cols-5 w-full h-full px-5 py-1 gap-5 bg-[#2B313C]">
                <div className="flex flex-row col-span-2">
                    <HeaderContainer
                        imgHeight = '50px'
                        imgWidth = '50px'
                    />
                </div>
                <div className="flex flex-row h-full w-full items-center justify-center">
                    <NavLink
                        isActive={active === 'overview'}
                        setActive={setActive}
                        navTitle = 'Overview'
                    />
                </div>
                <div className="flex flex-row h-full w-full items-center justify-center">
                    <NavLink
                        isActive={active === 'manage users'}
                        setActive={setActive}
                        navTitle = 'Manage Users'
                    />
                </div>
                <div className="flex flex-row h-full w-full items-center justify-center">
                    <NavLink
                        navTitle = 'Manage Account'
                    />
                </div>
            </div>
        </>
    );
}

export default NavigationSection;