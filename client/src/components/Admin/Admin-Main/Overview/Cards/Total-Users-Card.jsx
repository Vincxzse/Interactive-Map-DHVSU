import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

function TotalUsersCard(props) {
    const data01 = [
        { name: "Admin", value: props.totalAdmins },
        { name: "Super Admin", value: props.totalSuperAdmins },
        { name: "Customer", value: props.totalUsers },
    ];

    const formatPercentage = (value) => {
        return isNaN(value) || !isFinite(value) ? 0 : Number(value.toFixed(1));
    };

    const dataPercentage = {
        superAdmin: formatPercentage((props.totalSuperAdmins / props.totalOverall) * 100),
        admin: formatPercentage((props.totalAdmins / props.totalOverall) * 100),
        user: formatPercentage((props.totalUsers / props.totalOverall) * 100),
    }

  const COLORS = ["#B388FF", "#4C9AFF", "#5EEAD4"];

  return (
    <div className="grid grid-cols-2 row-span-4 col-span-6 w-full h-full">
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
            <div className="grid grid-cols-2 text-[#4C9AFF] w-[90%] gap-2">
                <p>• Super Admin:</p>
                <p>{dataPercentage.superAdmin} %</p>
            </div>
            <div className="grid grid-cols-2 text-[#B388FF] w-[90%] gap-2">
                <p>• Admin:</p>
                <p>{dataPercentage.admin} %</p>
            </div>
            <div className="grid grid-cols-2 text-[#5EEAD4] w-[90%] gap-2">
                <p>• Customers:</p>
                <p>{dataPercentage.user} %</p>
            </div>
        </div>
    </div>
  );
}

export default TotalUsersCard;
