import React, { useState } from "react";
import addUserIcon from '../../../assets/add-user.png';
import searchIcon from '../../../assets/search.png';

function ManageUsersPage() {
    
    const [category, setCategory] = useState('All Users');
    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const users = JSON.parse(localStorage.getItem("overallUsers")) || [];
    const superAdmins = users.filter(user => user.role.toLowerCase() === 'super admin');

    return(
        <>
            <div className="grid grid-cols-1 grid-rows-[1fr_0fr_1fr_0fr_8fr] w-full h-full gap-0 border-1 border-[rgba(0,0,0,0.2)] rounded-md shadow-[0_0_10px_1px_rgba(0,0,0,0.3)]">
                <div className="grid grid-cols-2 h-full w-full">
                    <div className="flex items-center px-10 justify-start border-b-[rgba(0,0,0,0.6)]">
                        <h2 className="text-xl font-mono text-[#8B3A3A] font-bold">Add Users Manually</h2>
                    </div>
                    <div className="flex items-center px-10 justify-end h-full w-full">
                        <button className="flex flex-row items-center justify-center gap-1 cursor-pointer bg-blue-400 h-[50%] px-5 text-white rounded-lg">
                            <img src={addUserIcon} className="invert-100 h-5 w-auto" />
                            Create User
                        </button>
                    </div>
                </div>
                <hr className="border-2 rounded-full border-[rgba(0,0,0,0.1)] w-[95%] mx-auto" />
                <div className="grid grid-cols-2 h-full w-full">
                    <div className="flex items-center px-10 justify-start">
                        <h2 className="text-xl font-mono text-[#8B3A3A] font-bold">Search and Filter</h2>
                    </div>
                    <div className="grid grid-cols-2 items-center px-10 justify-end gap-3">
                        <div className="flex flex-row items-center justify-center gap-2 h-[70%] bg-gray-300 rounded-full">
                            <img src={searchIcon} className="invert-10 h-5 w-auto opacity-30" />
                            <input type="text" placeholder="Search User" className="h-full focus:outline-none active:ring-0 text-white invert-90" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2 h-[70%]">
                            <select id="category" value={category} onChange={handleChange} className="flex items-center justify-center text-center cursor-pointer w-full h-full rounded-full border-1 border-[rgba(0,0,0,0.5)] focus:ring-[rgba(0,0,0,0.7)]">
                                <option value="All Users">All Users</option>
                                <option value="Customers">Customers</option>
                                <option value="Admins">Admins</option>
                                <option value="Super Admins">Super Admins</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr className="border-2 rounded-full border-[rgba(0,0,0,0.1)] w-[95%] mx-auto" />
                <div className="grid grid-cols-1 grid-rows-[1fr_7fr] h-full w-full">
                    <div className="grid grid-cols-[1fr_1fr_1fr_2fr]">
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Username</p>
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Email</p>
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Access Level</p>
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Controls</p>
                    </div>
                    <div className="grid grid-cols-1 w-full h-full">
                        {superAdmins.length === 0 ? (
                            <p>No admins found.</p>
                            ) : (
                            superAdmins.map((user, index) => (
                                <div key={index} className="grid grid-cols-[1fr_1fr_1fr_2fr]">
                                    <p>{user.username}</p>
                                    <p>{user.email}</p>
                                    <p>{user.role}</p>
                                    <div>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            ))
                        )}
                        {/* Continue Category, Edit and delete should be only for the specific row */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageUsersPage;