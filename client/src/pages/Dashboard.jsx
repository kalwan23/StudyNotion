import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";

function Dashboard(){
    const {loading:authLoading}=useSelector((state)=>state.auth)
    const {loading:profileLoading}=useSelector((state)=>state.auth)

    if(authLoading||profileLoading){
        return (<div className="mt-10">Loading...</div>)
    }


    return (<div className="relative flex  min-h-[calc(100vh-3.5rem)]">
        <Sidebar/>
        <div className="h-[calc(100vh-3.5rem)] overflow-auto w-full">
            <div className="mx-auto w-10/12 max-w-[1000px]">
                <Outlet/>
            </div>
        </div>
    </div>)
}

export default Dashboard;