import React from 'react'
import {SidebarAdmin} from "../Sidebar";
import { NavbarDashboardAdmin } from '../NavbarDashboard';
import { Outlet } from 'react-router';

const Admin = () => {
  return (
    <div className="">
      <NavbarDashboardAdmin/>
      <div className="page-container  dflex">
        <SidebarAdmin/>
        <div className="content">
          <Outlet/>
          
        </div>
      </div>
    </div>
  );
}
// addEventListener
export default Admin;
