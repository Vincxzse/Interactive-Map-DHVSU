import React, { useState, Fragment } from "react";
import SettingsPage from "./Settings-Page/Settings-page.jsx";
import dhvsuLogo from "../../assets/logo.png";
import mapIcon from "../../assets/map.png";
import signOutIcon from "../../assets/logout.png";
import settingsIcon from "../../assets/settings.png";
import menuIcon from "../../assets/menu.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();    
    const [navSelection, setNavSelection] = useState(1);

    function handleSignout() {
        navigate("/");
    }
    
    const selectedNav = {
        background: '#DC3C3C',
        color: '#fff',
    }
    const notSelectedNav = {
        background: 'transparent',
        color: 'rgb(0,0,0,0.7)',
    }
    const selectedNavImg = {
        filter: 'invert(100%)',
    }
    const notSelectedNavImg = {
        filter: 'invert(30%)',
    }

    var currentNav = notSelectedNav;
    var currentNavImg = notSelectedNavImg;

    function handleNavSelectionOne() {
        console.log('Handler One Success');
        setNavSelection(1);
    }
    function handleNavSelectionTwo() {
        console.log('Handler Two Success');
        setNavSelection(2);
    }
    function handleNavSelectionThree() {
        console.log('Handler Three Success');
        setNavSelection(3);
    }
    
    let content;

    switch (navSelection) {
        case 2:
            content = <SettingsPage />
            break;
        default:
            content = null;
            break;
    }

    return (
        <Fragment>
            <div className="flex flex-col w-full h-full items-center bg-white font-sans">
                <div className="flex flex-row w-[calc(100%-50px)] h-20 justify-between xl:justify-start items-center">
                    <div className="flex flex-row gap-2 w-full justify-start items-center">
                        <img src={ dhvsuLogo } className="h-12 w-auto rounded-full" />
                        <h2 className="text-lg font-bold text-gray-700">DHVSU | Lubao Campus</h2>
                    </div>
                    <div>
                        <a href="#">
                            <img
                                src={ menuIcon }
                                className="xl:hidden h-12 w-auto"
                                
                            />
                        </a>
                    </div>
                </div>
                <div className="grid xl:grid-cols-[1fr_4fr] w-full h-full">
                    <div className="hidden xl:flex flex-col bg-white w-full items-center justify-center">
                        <div className="flex flex-col w-[calc(100%-50px)] h-[calc(100%-50px)] items-center justify-start gap-5">
                            <a
                                href="#"
                                className="flex flex-row items-center justify-start h-15 w-full px-5 rounded-2xl gap-2 text-xl tracking-wide"
                                style={navSelection === 1 ? selectedNav : notSelectedNav}
                                onClick={ handleNavSelectionOne }
                            >
                                <img src={ mapIcon } style={navSelection === 1 ? selectedNavImg : notSelectedNavImg} className="h-8 w-auto" />
                                Map
                            </a>
                            <a
                                href="#"
                                className="flex flex-row items-center justify-start h-15 w-full px-5 rounded-2xl gap-2 text-xl tracking-wide"
                                style={navSelection === 2 ? selectedNav : notSelectedNav}
                                onClick={ handleNavSelectionTwo }
                            >
                                <img src={ settingsIcon } style={navSelection === 2 ? selectedNavImg : notSelectedNavImg} className="h-8 w-auto" />
                                Settings
                            </a>
                            <a
                                href="#"
                                className="flex flex-row items-center justify-start h-15 w-full px-5 rounded-2xl gap-2 text-xl tracking-wide"
                                style={navSelection === 3 ? selectedNav : notSelectedNav}
                                onClick={handleSignout}
                            >
                                <img src={ signOutIcon } style={ notSelectedNavImg } className="h-8 w-auto" />
                                Sign Out
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-300">
                        {content}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;