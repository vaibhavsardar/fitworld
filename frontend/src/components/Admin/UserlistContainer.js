import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import UserlistItem from '../Item/UserlistItem';

const UserlistContainer = () => {

  

  return (
    <div>
        <nav>
        <div className="traing-navbar-wrapper">
          <ul className="dflex">
            <li>
              <Link className="active"  to={'newuserlist'}>New Users</Link>
            </li>
            <li>
              <Link to={'olduserlist'}>User</Link>
            </li>
          </ul>
        </div>
      </nav>

      

      <Outlet/>
      
    </div>
  );
}

export default UserlistContainer;
