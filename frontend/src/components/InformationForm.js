import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FitnessForm } from './Form';

const InformationForm = () => {
  return (
    <div>
        {/* <nav>
        <div className="traing-navbar-wrapper">
          <ul className="dflex">
            <li>
              <Link className="active"  to={'personal_detail'}>Personal Details</Link>
            </li>
            <li>
              <Link to={'fitness_detail'}>Fitness Details</Link>
            </li>
           
          </ul>
        </div>
      </nav> */}

      {/* <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <FitnessForm/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        
      </Tab>
    </Tabs> */}

      <div>
        {/* <Outlet/> */}
      </div>

      <FitnessForm/>
        
    </div>
  );
}

export default InformationForm;
