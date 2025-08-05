import { useState, useEffect } from "react";
import TotalUsersCard from "./Cards/Total-Users-Card";
import FourthDiv from "./Cards/4th-div/Fourth-div";

function Overview(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/get-users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching data: ", err));
    });

    const totalUsers = users.filter(user => user.role === "user").length;
    const totalAdmins = users.filter(user => user.role === "admin").length;
    const totalSuperAdmins = users.filter(user => user.role === "super admin").length;
    const totalOverall = users.length;

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-7 w-full h-full gap-2">
                <div className="col-span-2 row-span-2 bg-[#2B313C] rounded-lg">
                    
                </div>
                <div className="col-span-1 row-span-3 bg-[#2B313C] rounded-lg">
                    <TotalUsersCard
                        totalUsers = {totalUsers}
                        totalAdmins = {totalAdmins}
                        totalSuperAdmins = {totalSuperAdmins}
                        totalOverall = {totalOverall}
                    />
                </div>
                <div className="col-span-2 row-span-5 bg-[#2B313C] rounded-lg">
                    
                </div>
                <div className="col-span-1 row-span-4 bg-[#2B313C] rounded-lg p-5">
                    <FourthDiv onSendData = { props.onSendData } />
                </div>
            </div>
        </>
    );
}

export default Overview;