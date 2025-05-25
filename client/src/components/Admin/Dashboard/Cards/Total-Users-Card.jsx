import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

function TotalUsersCard(props) {
    const data01 = [
        { name: "Admin", value: props.totalAdmins },
        { name: "Super Admin", value: props.totalSuperAdmins },
        { name: "Customer", value: props.totalUsers },
    ];

    const getSecondDecimalDigit = (value) => {
        const str = value.toString();
        const decimal = str.split(".")[1];
        return decimal && decimal.length > 1 ? Number(decimal[1]) : 0;
    };

    const dataPercentage = {
        superAdmin: getSecondDecimalDigit((props.totalSuperAdmins / props.totalOverall) * 100),
        admin: getSecondDecimalDigit((props.totalAdmins / props.totalOverall) * 100),
        user: getSecondDecimalDigit((props.totalUsers / props.totalOverall) * 100),
    }

  const COLORS = ["#8B3A3A", "#F4A261", "#2A9D8F"];

  return (
    <div className="flex flex-col w-full h-full shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] col-start-1 col-end-4 rounded-xl items-center justify-center">
        <div className="grid grid-rows-[1fr_7fr] grid-cols-1 h-[calc(100%-50px)] w-[calc(100%-50px)] items-center justify-start">
            <div className="flex flex-row items-center justify-center gap-0 w-full">
                <h2 className="text-2xl text-[#8B3A3A] font-bold font-mono tracking-wide w-[30%]">Total Users</h2>
                <hr className="w-[70%] border-2 border-[#8B3A3A] rounded-full" />
            </div>
            <div className="grid grid-cols-2 w-full h-full">
                <div className="flex w-full h-full items-center justify-center">
                    <ResponsiveContainer className="w-full h-full">
                        <PieChart>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
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
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col w-full h-full items-center justify-center gap-2">
                    <div className="grid grid-cols-2 text-[#FFBB28] w-[90%] gap-2">
                        <p>• Super Admin:</p>
                        <p>{dataPercentage.superAdmin} %</p>
                    </div>
                    <div className="grid grid-cols-2 text-[#8B3A3A] w-[90%] gap-2">
                        <p>• Admin:</p>
                        <p>{dataPercentage.admin} %</p>
                    </div>
                    <div className="grid grid-cols-2 text-[#2A9D8F] w-[90%] gap-2">
                        <p>• Customers:</p>
                        <p>{dataPercentage.user} %</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TotalUsersCard;
