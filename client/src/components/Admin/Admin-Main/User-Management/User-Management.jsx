import { useState, useEffect } from "react";
import UserData from "./User-Data";
import AccountManagement from "./Account-Management";
import searchIcon from "../../../../assets/search.png";

function UserManagement(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('All Users');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    
    const handleChange = (e) => {
        setCategory(e.target.value);
        console.log(category);
    }
    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }
    
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch(`${BACKEND_URL}/get-users`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching data: ", err));
    }, []);
    
    let filteredUsers = users;
    category === 'Super Admins'
    ? (filteredUsers = users.filter(user => user.role.toLowerCase() === 'super admin'))
    : category === 'Admins'
    ? (filteredUsers = users.filter(user => user.role.toLowerCase() === 'admin'))
    : category === 'Customers'
    ? (filteredUsers = users.filter(user => user.role.toLowerCase() === 'user'))
    : null;
    
    const finalFilteredUsers = filteredUsers.filter(user => 
        user.username?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        user.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sendData = () => {
        const data = true;
        props.onSendData(data);
        fetchUsers();
    }

    const fetchUsers = () => {
        fetch(`${BACKEND_URL}/get-users`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching data: ", err));
    }

    return (
        <>
            <div className="flex flex-col lg:grid lg:grid-cols-3 w-full h-full gap-2 sm:gap-3 overflow-y-auto p-2 sm:p-0">
                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden flex items-center justify-between w-full p-4 rounded-lg bg-[#2B313C] text-white font-semibold"
                >
                    <span>Account & Filters</span>
                    <svg 
                        className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Sidebar - Hidden on mobile unless toggled */}
                <div className={`
                    ${isMobileMenuOpen ? 'flex' : 'hidden'} 
                    lg:flex flex-col col-span-1 gap-2 sm:gap-3 
                    transition-all duration-300 ease-in-out
                `}>
                    {/* Account Management Section */}
                    <div className="rounded-lg bg-[#2B313C] p-4 sm:p-5">
                        <AccountManagement 
                            onSendData={props.logOut} 
                            onSendData2={props.changePassword} 
                        />
                    </div>
                    
                    {/* Category Filter */}
                    <div className="rounded-lg bg-[#2B313C] p-4 sm:p-5">
                        <label className="block text-[#A0A7B4] text-sm font-semibold mb-2">
                            Filter by Role
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-white cursor-pointer bg-[#353B45] rounded-lg border border-[#3F464F] focus:outline-none focus:ring-2 focus:ring-[#4CA7E1] transition-all"
                        >
                            <option value="All Users">All Users</option>
                            <option value="Customers">Customers</option>
                            <option value="Admins">Admins</option>
                            <option value="Super Admins">Super Admins</option>
                        </select>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col w-full h-full lg:col-span-2 p-4 sm:p-5 rounded-lg bg-[#2B313C] gap-4 sm:gap-5">
                    {/* Header Section */}
                    <div className="flex flex-col sm:grid sm:grid-cols-4 w-full gap-3 sm:gap-2">
                        {/* Title */}
                        <h2 className="sm:col-span-1 text-white text-xl sm:text-2xl font-bold tracking-wider">
                            User Management
                        </h2>
                        
                        {/* Search Bar */}
                        <div className="sm:col-span-2 flex items-center">
                            <div className="flex flex-row w-full h-10 sm:h-12 bg-[#353B45] border border-[#3F464F] rounded-full overflow-hidden">
                                <div className="flex items-center justify-center px-3 sm:px-4">
                                    <img 
                                        src={searchIcon} 
                                        className="h-4 w-4 sm:h-5 sm:w-5 invert opacity-50" 
                                        alt="Search"
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Search username or email"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="flex-1 h-full px-2 text-sm sm:text-base placeholder-[#A0A7B4] text-white bg-transparent focus:outline-none"
                                />
                            </div>
                        </div>
                        
                        {/* Create User Button */}
                        <button 
                            className="sm:col-span-1 flex items-center justify-center w-full h-10 sm:h-12 text-white rounded-full bg-[#4CA7E1] hover:bg-[#3B96D0] text-sm sm:text-base font-semibold cursor-pointer transition-all active:scale-95"
                            onClick={sendData}
                        >
                            <span className="hidden sm:inline">+ Create User</span>
                            <span className="sm:hidden">+ New User</span>
                        </button>
                    </div>

                    {/* User Count Badge - Mobile */}
                    <div className="lg:hidden flex items-center gap-2 text-[#A0A7B4] text-sm">
                        <span className="font-semibold">{finalFilteredUsers.length}</span>
                        <span>user{finalFilteredUsers.length !== 1 ? 's' : ''} found</span>
                    </div>

                    {/* User Table */}
                    <div className="flex flex-col w-full flex-1 overflow-hidden">
                        {/* Desktop Table Header */}
                        <div className="hidden sm:grid grid-cols-6 w-full h-12 bg-[#353B45] border-b-2 border-t-2 border-[#3F464F] items-center px-4 gap-2">
                            <p className="col-span-2 font-bold text-base lg:text-lg text-[#A0A7B4]">Username</p>
                            <p className="col-span-2 font-bold text-base lg:text-lg text-[#A0A7B4]">Email</p>
                            <p className="col-span-1 font-bold text-base lg:text-lg text-[#A0A7B4]">Role</p>
                            <p className="col-span-1 font-bold text-base lg:text-lg text-[#A0A7B4] text-center">Actions</p>
                        </div>
                        
                        {/* User Data - Scrollable */}
                        <div className="flex flex-col w-full flex-1 overflow-y-auto">
                            {finalFilteredUsers.length > 0 ? (
                                <UserData 
                                    categoryArray={finalFilteredUsers} 
                                    title={category === 'All Users' ? 'Users' : category}
                                    onSendData={props.onSendData2} 
                                    userInfo={props.userInfo}
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-[#A0A7B4] py-10">
                                    <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                    <p className="text-lg font-semibold">No users found</p>
                                    <p className="text-sm mt-1">Try adjusting your search or filters</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .scroll-overlay::-webkit-scrollbar {
                    width: 8px;
                }
                .scroll-overlay::-webkit-scrollbar-track {
                    background: #353B45;
                    border-radius: 10px;
                }
                .scroll-overlay::-webkit-scrollbar-thumb {
                    background: #4CA7E1;
                    border-radius: 10px;
                }
                .scroll-overlay::-webkit-scrollbar-thumb:hover {
                    background: #3B96D0;
                }
            `}</style>
        </>
    );
}

export default UserManagement;