import { useState, useEffect } from "react";
import TotalUsersCard from "./Cards/Total-Users-Card";
import FourthDiv from "./Cards/4th-div/Fourth-div";

function Overview(props) {
    const [users, setUsers] = useState([]);
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    
    useEffect(() => {
        fetch(`${BACKEND_URL}/get-users`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching data: ", err));
    }, []);
    
    const totalUsers = users.filter(user => user.role === "user").length;
    const totalAdmins = users.filter(user => user.role === "admin").length;
    const totalSuperAdmins = users.filter(user => user.role === "super admin").length;
    const totalOverall = users.length;
    
    return (
        <>
            {/* Mobile Layout: Single Column Stack */}
            <div className="flex flex-col lg:hidden w-full h-full gap-3 p-2 overflow-y-auto">
                {/* Total Users Card - Mobile */}
                <div className="w-full bg-[#2B313C] rounded-lg min-h-[200px]">
                    <TotalUsersCard
                        totalUsers={totalUsers}
                        totalAdmins={totalAdmins}
                        totalSuperAdmins={totalSuperAdmins}
                        totalOverall={totalOverall}
                    />
                </div>
                
                {/* Fourth Div - Mobile */}
                <div className="w-full bg-[#2B313C] rounded-lg p-4 min-h-[150px]">
                    <FourthDiv onSendData={props.onSendData} />
                </div>
                
                {/* First Empty Div - Mobile */}
                <div className="w-full hidden bg-[#2B313C] rounded-lg min-h-[200px]">
                    {/* Placeholder content */}
                </div>
                
                {/* Second Empty Div - Mobile */}
                <div className="w-full hidden bg-[#2B313C] rounded-lg min-h-[300px]">
                    {/* Placeholder content */}
                </div>
            </div>

            {/* Tablet Layout: 2 Columns */}
            <div className="hidden lg:flex xl:hidden flex-col w-full h-full gap-3 p-3 overflow-y-auto">
                <div className="grid grid-cols-2 gap-3 w-full">
                    {/* Total Users Card - Tablet */}
                    <div className="col-span-1 bg-[#2B313C] rounded-lg min-h-[250px]">
                        <TotalUsersCard
                            totalUsers={totalUsers}
                            totalAdmins={totalAdmins}
                            totalSuperAdmins={totalSuperAdmins}
                            totalOverall={totalOverall}
                        />
                    </div>
                    
                    {/* Fourth Div - Tablet */}
                    <div className="col-span-1 bg-[#2B313C] rounded-lg p-5">
                        <FourthDiv onSendData={props.onSendData} />
                    </div>
                </div>
                
                {/* First Empty Div - Tablet */}
                <div className="w-full bg-[#2B313C] rounded-lg min-h-[200px]">
                    {/* Placeholder content */}
                </div>
                
                {/* Second Empty Div - Tablet */}
                <div className="w-full bg-[#2B313C] rounded-lg min-h-[300px]">
                    {/* Placeholder content */}
                </div>
            </div>

            {/* Desktop Layout: Original Grid */}
            <div className="hidden xl:grid grid-cols-3 grid-rows-7 w-full h-full gap-2">
                <div className="col-span-2 row-span-2 bg-[#2B313C] rounded-lg">
                    {/* Placeholder content */}
                </div>
                <div className="col-span-1 row-span-3 bg-[#2B313C] rounded-lg">
                    {/* Placeholder content */}
                </div>
                <div className=" col-span-2 row-span-5 bg-[#2B313C] rounded-lg">
                    <TotalUsersCard
                        totalUsers={totalUsers}
                        totalAdmins={totalAdmins}
                        totalSuperAdmins={totalSuperAdmins}
                        totalOverall={totalOverall}
                    />
                </div>
                <div className="col-span-1 row-span-4 bg-[#2B313C] rounded-lg p-5">
                    <FourthDiv onSendData={props.onSendData} />
                </div>
            </div>
        </>
    );
}

export default Overview;