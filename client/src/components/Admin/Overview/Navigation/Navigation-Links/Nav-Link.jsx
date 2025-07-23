import React from "react";

function NavLink(props) {
    return (
        <>
            <a href={ props.navHref } className="flex flex-row w-[calc(100%-10px)] h-[calc(100%-10px)] items-center justify-center text-center font-normal font-sans tracking-wide text-white rounded-full border-3 border-[#E14C4C] hover:bg-[#E14C4C] transition-[.1s]">
                { props.navTitle }
            </a>
        </>
    );
}

export default NavLink;