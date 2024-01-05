import React from "react";
import {NavbarDashboard} from "./NavbarDashboard";
import {SidebarUser} from "./Sidebar";
import { Outlet } from "react-router";



const Student = () => {
  return(
    <div className="mycontainer">
      <NavbarDashboard />
      <div className="page-container  dflex">
        <SidebarUser/>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Student;
