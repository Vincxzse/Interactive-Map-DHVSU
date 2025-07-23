import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationSection from "./Navigation/Navigation-Section";

function AdminPage() {
    return (
        <>
            <div className="flex flex-col w-full h-full items-start justify-start bg-[#1E232C]">
                <div className="flex flex-col w-full h-[10%]">
                    <NavigationSection />
                </div>
                <div className="flex flex-col w-full h-[90%] p-2">
                    {/* Move the div below this to a new file called "Overview.jsx" */}
                    <div className="grid grid-cols-3 grid-rows-7 w-full h-full gap-2">
                        <div className="col-span-2 row-span-3 bg-[#2B313C] rounded-lg"></div>
                        <div className="col-span-1 row-span-6 bg-[#2B313C] rounded-lg"></div>
                        <div className="col-span-2 row-span-4 bg-[#2B313C] rounded-lg"></div>
                        <div className="col-span-1 row-span-1 bg-[#2B313C] rounded-lg"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPage;