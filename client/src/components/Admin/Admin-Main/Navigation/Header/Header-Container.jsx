import React from "react";
import psuLogo from '../../../../../assets/logo.png';

function HeaderContainer(props) {
    const imgSize = {
        height: props.imgHeight,
        width: props.imgWidth,
    }

    return (
        <>
            <div className="flex flex-row w-full h-full items-center justify-start gap-3">
                <img src={ psuLogo } style={ imgSize } alt="PSU Logo" />
                <h2 className="font-sans tracking-wider font-bold text-xl text-white">Pampanga State University</h2>
            </div>
        </>
    );
}

export default HeaderContainer;