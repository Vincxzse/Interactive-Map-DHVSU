import React, { useState } from "react";
import TableData from "./Table-Data/Table-Data";
import addUserIcon from '../../../assets/add-user.png';
import searchIcon from '../../../assets/search.png';
import deleteIcon from '../../../assets/delete.png';
import editIcon from '../../../assets/edit.png';

function ManageUsersPage() {
    const [category, setCategory] = useState('All Users');
    const handleChange = (e) => {
        setCategory(e.target.value);
        console.log(category);
    }

    const users = JSON.parse(localStorage.getItem("overallUsers")) || [];
    const superAdmins = users.filter(user => user.role.toLowerCase() === 'super admin');
    const admins = users.filter(user => user.role.toLowerCase() === 'admin');
    const customers = users.filter(user => user.role.toLowerCase() === 'user');

    return (
        <>
            <div className="grid grid-cols-1 grid-rows-[1fr_0fr_1fr_0fr_8fr] w-full h-full gap-0 border-1 border-[rgba(0,0,0,0.2)] rounded-md shadow-[0_0_10px_1px_rgba(0,0,0,0.3)] overflow-hidden">
                
                {/* Header */}
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

                {/* Divider */}
                <hr className="border-2 rounded-full border-[rgba(0,0,0,0.1)] w-[95%] mx-auto" />

                {/* Search & Filter */}
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
                            <select
                                id="category"
                                value={category}
                                onChange={handleChange}
                                className="flex items-center justify-center text-center cursor-pointer w-full h-full rounded-full border-1 border-[rgba(0,0,0,0.5)] focus:ring-[rgba(0,0,0,0.7)]"
                            >
                                <option value="All Users">All Users</option>
                                <option value="Customers">Customers</option>
                                <option value="Admins">Admins</option>
                                <option value="Super Admins">Super Admins</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-2 rounded-full border-[rgba(0,0,0,0.1)] w-[95%] mx-auto" />

                {/* Table Header + Scrollable Data */}
                <div className="grid grid-cols-1 grid-rows-[1fr_7fr] h-full w-full overflow-hidden">
                    
                    {/* Column Labels */}
                    <div className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-3 px-5">
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Username</p>
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Email</p>
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Access Level</p>
                        <p className="flex items-center justify-center w-full h-full text-xl tracking-wider font-mono font-normal text-[#8B3A3A]">Controls</p>
                    </div>

                    {/* Scrollable Table Rows */}
                    <div className="grid grid-cols-1 w-full h-full gap-2 px-5 place-items-center items-start overflow-y-auto overflow-x-hidden max-h-[400px]">
                        {category === 'Super Admins' ? (
                            <TableData catArray={superAdmins} title='Super Admins' />
                        ) : category === "Admins" ? (
                            <TableData catArray={admins} title='Admins' />
                        ) : category === 'Customers' ? (
                            <TableData catArray={customers} title='Customers' />
                        ) : category === 'All Users' ? (
                            <TableData catArray={users} title='Users' />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageUsersPage;
