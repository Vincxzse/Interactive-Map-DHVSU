import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

function TotalUsersCard(props) {
    const data01 = [
        { name: "Super Admin", value: props.totalSuperAdmins },
        { name: "Admin", value: props.totalAdmins },
        { name: "Customer", value: props.totalUsers },
    ];
    
    const formatPercentage = (value) => {
        return isNaN(value) || !isFinite(value) ? 0 : Number(value.toFixed(1));
    };
    
    const dataPercentage = {
        superAdmin: formatPercentage((props.totalSuperAdmins / props.totalOverall) * 100),
        admin: formatPercentage((props.totalAdmins / props.totalOverall) * 100),
        user: formatPercentage((props.totalUsers / props.totalOverall) * 100),
    };
    
    const COLORS = ["#4C9AFF", "#B388FF", "#5EEAD4"];
    
    // Custom label for mobile to show just the value
    const renderCustomLabel = (entry) => {
        return entry.value > 0 ? entry.value : '';
    };
    
    return (
        <div className="flex flex-col w-full h-full p-4 sm:p-5">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-white text-lg sm:text-xl font-bold mb-1">User Distribution</h2>
                <p className="text-[#A0A7B4] text-sm">Total Users: <span className="text-white font-semibold">{props.totalOverall}</span></p>
            </div>
            
            {/* Mobile Layout: Stack */}
            <div className="flex flex-col md:hidden gap-4 flex-1">
                {/* Chart */}
                <div className="flex items-center justify-center h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                fill="#8884d8"
                                label={renderCustomLabel}
                                labelLine={false}
                            >
                                {data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#2B313C', 
                                    border: '1px solid #3F464F',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Legend - Mobile */}
                <div className="flex flex-col gap-3 bg-[#353B45] rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#4C9AFF]"></div>
                            <span className="text-white text-sm">Super Admin</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-semibold text-sm">{props.totalSuperAdmins}</span>
                            <span className="text-[#A0A7B4] text-xs">({dataPercentage.superAdmin}%)</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#B388FF]"></div>
                            <span className="text-white text-sm">Admin</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-semibold text-sm">{props.totalAdmins}</span>
                            <span className="text-[#A0A7B4] text-xs">({dataPercentage.admin}%)</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#5EEAD4]"></div>
                            <span className="text-white text-sm">Customer</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-semibold text-sm">{props.totalUsers}</span>
                            <span className="text-[#A0A7B4] text-xs">({dataPercentage.user}%)</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Tablet/Desktop Layout: Side by Side */}
            <div className="hidden md:grid grid-cols-2 gap-4 flex-1">
                {/* Chart */}
                <div className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#2B313C', 
                                    border: '1px solid #3F464F',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Legend - Desktop */}
                <div className="flex flex-col justify-center gap-4 px-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[#4C9AFF]">
                            <span className="text-2xl">•</span>
                            <span className="text-sm font-medium">Super Admin:</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-white text-lg font-semibold">{props.totalSuperAdmins}</span>
                            <span className="text-[#A0A7B4] text-sm ml-2">({dataPercentage.superAdmin}%)</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[#B388FF]">
                            <span className="text-2xl">•</span>
                            <span className="text-sm font-medium">Admin:</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-white text-lg font-semibold">{props.totalAdmins}</span>
                            <span className="text-[#A0A7B4] text-sm ml-2">({dataPercentage.admin}%)</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[#5EEAD4]">
                            <span className="text-2xl">•</span>
                            <span className="text-sm font-medium">Customers:</span>
                        </div>
                        <div className="ml-6">
                            <span className="text-white text-lg font-semibold">{props.totalUsers}</span>
                            <span className="text-[#A0A7B4] text-sm ml-2">({dataPercentage.user}%)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalUsersCard;