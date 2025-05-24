import React from "react";
import TotalUsersCard from "./Cards/Total-Users-Card.jsx";
import multipleUsersIcon from '../../../assets/group.png';

function DashboardPage() {
    const totalUsers = Number(localStorage.getItem("totalUsers"));
    const totalAdmins = Number(localStorage.getItem("totalAdmins"));
    const totalSuperAdmins = Number(localStorage.getItem("totalSuperAdmins"));
    const totalOverall = Number(localStorage.getItem("totalOverall"));
    const maroonImg = {filter: "invert(13%) sepia(90%) saturate(800%) hue-rotate(310deg)"};


    return(
        <>
            <div className="grid grid-cols-3 grid-rows-4 w-full h-full">
                <div className="grid grid-cols-6 row-start-1 row-end-3 col-start-1 col-end-4 w-full gap-5 items-center justify-center">
                    <TotalUsersCard
                        iconImg = {multipleUsersIcon}
                        imgColor = {maroonImg}
                        totalUsers = {totalUsers}
                        totalAdmins = {totalAdmins}
                        totalSuperAdmins = {totalSuperAdmins}
                        totalOverall = {totalOverall}
                    />
                </div>
            </div>
        </>
    );
}

export default DashboardPage;