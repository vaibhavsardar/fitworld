import React from "react";
import { Link, Outlet } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const Training = () => {
  return (
    <div className="training-container">
      {/* <iframe src="https://www.africau.edu/images/default/sample.pdf" width="100%" height="630"></iframe> */}

      {/* <nav>
        <div className="traing-navbar-wrapper">
          <ul className="dflex">
            <li>
              <Link className="active"  to={'workout'}>Workout</Link>
            </li>
            <li>
              <Link to={'Diet'}>Diet</Link>
            </li>
            <li>
              <Link to={'workoutvideos'}>Workout Videos</Link>
            </li>
            <li >
              <Link href="">item4</Link>
            </li>
          </ul>
        </div>
      </nav> */}

      <Tabs
        defaultActiveKey="workoutvideo"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="diet" title={<Link className="active"  to={'workout'}>Diet Plan</Link>}>
          
        </Tab>
        <Tab eventKey="workout" title={<Link to={'Diet'}>Workout Plan</Link>}>
          
        </Tab>
        <Tab eventKey="workoutvideo" title={<Link to={'workoutvideos'}>Workout Videos Plan</Link>}>
          
        </Tab>
      
      </Tabs>

      <Outlet/>
      
    </div>
  );
};

export default Training;
