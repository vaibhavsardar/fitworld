import React, { useEffect } from 'react'
import { NavbarDashboardAdmin } from '../NavbarDashboard';
import { Outlet, useLocation } from 'react-router';
import { SidebarAdminUser } from '../Sidebar';
// import {useParams,useSearchParams } from "react-router-dom";
import { useParams } from "react-router";
import store from '../../store';
import { getUserDetails } from '../../actions/authAction';
import { useSelector } from 'react-redux';
const UserDetail = () => {
  const user = useSelector((state) => state.userDetails);
  useEffect(() => {
    store.dispatch(getUserDetails(id));
    console.log("geting user=",user);
  }, []);

  


  // const {parms} = new URLSearchParams(useLocation().search);
  let { id } = useParams();
  return (
    <div className="">
      <NavbarDashboardAdmin/>
      <div className="page-container  dflex">
        <SidebarAdminUser/>
        <div className="content">
          <Outlet userid={id}/>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
