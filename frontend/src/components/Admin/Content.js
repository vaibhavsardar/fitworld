import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Content = (parms) => {
  return (
    <div>
      <nav>
        <div className="traing-navbar-wrapper">
          <ul className="dflex">
            <li>
              <Link className="active"  to={'workout'}>Workout</Link>
            </li>
            <li>
              <Link to={'Diet'}>Diet</Link>
            </li>
            <li>
              <Link to={'workoutvideo'}>Workout Videos</Link>
            </li>
            <li >
              <Link href="">item4</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Content;
