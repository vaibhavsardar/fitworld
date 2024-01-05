import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

import { Redirect, Route } from "react-router-dom";
import store from '../store';

const PrivateComp = () => {

  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    
    console.log("im isAuthenticated =",isAuthenticated);
    const auth = localStorage.getItem("user");
  return isAuthenticated ?<Outlet/>:<Navigate to={"/signup"}/> 
}

export default PrivateComp;
