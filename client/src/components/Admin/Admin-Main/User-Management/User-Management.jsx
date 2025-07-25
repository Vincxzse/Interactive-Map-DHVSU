import React, { useState } from "react";
import UserData from "./User-Data";
import searchIcon from "../../../../assets/search.png";

function UserManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('All Users');
    const handleChange = (e) => {
        setCategory(e.target.value);
        console.log(category);
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }
    const users = JSON.parse(localStorage.getItem("overallUsers")) || [];
    let filteredUsers = users;
    category === 'Super Admins'
    ? (filteredUsers = users.filter(user => user.role.toLowerCase() === 'super admin'))
    : category === 'Admins'
    ? (filteredUsers = users.filter(user => user.role.toLowerCase() === 'admin'))
    : category === 'Customers'
    ? (filteredUsers = users.filter(user => user.role.toLowerCase() === 'user'))
    : null;
    const finalFilteredUsers = filteredUsers.filter(user => user.username?.toLowerCase().includes(searchQuery.toLowerCase()) || user.email?.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-1 w-full h-full gap-2">
                <div className="col-span-1 p-5 rounded-lg bg-[#2B313C]">
                    <select
                        id="category"
                        value={category}
                        onChange={handleChange}
                        className="flex items-center justify-center w-full h-auto text-start text-white cursor-pointer bg-[#353B45] focus:outline-0"
                    >
                        <option value="All Users">All Users</option>
                        <option value="Customers">Customers</option>
                        <option value="Admins">Admins</option>
                        <option value="Super Admins">Super Admins</option>
                    </select>
                </div>
                <div className="flex flex-col w-full h-full col-span-2 py-2 px-5 rounded-lg bg-[#2B313C] gap-5">
                    <div className="grid grid-cols-4 w-full h-[10%] gap-2 items-center">
                        <h2 className="col-span-1 flex items-center justify-start text-white text-2xl font-bold tracking-wider font-sans">User Management</h2>
                        <div className="col-span-2 flex flex-row items-center justify-center w-full h-full">
                            <div className="flex flex-row w-[calc(100%-10px)] h-[calc(100%-10px)] bg-[#353B45] border border-[#3F464F] rounded-full">
                                <div className="flex items-center justify-center h-full w-[15%]">
                                    <img src={ searchIcon } className="object-cover h-8 w-auto invert-50" />
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Search by Username or Email"
                                    value={ searchQuery }
                                    onChange={ handleSearchChange }
                                    className="w-[85%] h-full text-lg placeholder-[#A0A7B4] text-white focus:outline-0"
                                />
                            </div>
                        </div>
                        <button className="col-span-1 flex flex-row items-center justify-center w-full h-[calc(100%-10px)] text-white rounded-full border-3 border-[#4CA7E1] bg-[#4CA7E1] text-lg">+ Create User</button>
                    </div>
                    {/* User tables */}
                    <div className="flex flex-col w-full h-[90%] overflow-hidden">
                        <div className="grid grid-rows-1 grid-cols-6 w-full h-[10%] bg-[#353B45] border-b-2 border-t-2 border-[#3F464F] items-center px-2 pr-6 gap-2">
                            <p className="col-span-2 font-bold text-lg text-[#A0A7B4]">Username</p>
                            <p className="col-span-2 font-bold text-lg text-[#A0A7B4]">Email</p>
                            <p className="col-span-1 font-bold text-lg text-[#A0A7B4]">Role</p>
                        </div>
                        <div className="flex flex-col w-full h-full overflow-y-scroll scroll-overlay">
                            {category === 'Super Admins' ? (
                                    <UserData categoryArray = { finalFilteredUsers } title = 'Super Admins' />
                                ) : category === 'Admins' ? (
                                    <UserData categoryArray = { finalFilteredUsers } title = 'Admins' />
                                ) : category === 'Customers' ? (
                                    <UserData categoryArray = { finalFilteredUsers } title = 'Customers' />
                                ) : category === 'All Users' ? (
                                    <UserData categoryArray = { finalFilteredUsers } title = 'Users' />
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserManagement;