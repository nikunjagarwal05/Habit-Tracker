import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

const DashboardLayout = ({ children }) => {
    return(
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-4 bg-gray-50 flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;