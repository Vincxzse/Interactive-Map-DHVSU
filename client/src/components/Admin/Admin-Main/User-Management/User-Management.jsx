import React from "react";

function UserManagement() {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-1 w-full h-full gap-2">
                <div className="col-span-1 p-2 rounded-lg bg-[#2B313C]">

                </div>
                <div className="flex flex-col w-full h-full col-span-2 py-2 px-5 rounded-lg bg-[#2B313C]">
                    <div className="grid grid-cols-4 w-full h-[10%] gap-2">
                        <h2 className="col-span-1 flex items-center justify-start text-white text-2xl font-bold tracking-wider font-sans">User Management</h2>
                        <div className="col-span-2">
                            
                        </div>
                        <button className="col-span-1 flex flex-row items-center justify-center w-full h-[calc(100%-10px)] text-white rounded-full border-3 border-[#4CA7E1] text-lg">+ Create User</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserManagement;