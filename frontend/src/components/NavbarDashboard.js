import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImg from "../images/profile-removebg-preview (1).png";
import DropdoenImg from "../images/dropdown.png";
import logo from "../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import { logout } from "../actions/authAction";
const NavbarDashboard = () => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
       <h4 style={{marginRight:"40px"}}>{user.username} &#x25bc;  </h4>
     
    </a>
  ));

  const userLogout = () =>{
    localStorage.clear()
    dispatch(logout());
    navegate("/");
  }

  return (
    <>
      <div className="navbar " style={{ paddingInline: "50px" }}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        
            <Link className="primary-btn " to={"addweekly"}>
              Add Week Track
            </Link>
         
            <Link className="primary-btn" to={"adddaily"}>
              Add Daily Track
            </Link>
         
        <div className="dflex">
          <img className="profile-img" src={ProfileImg} alt="profile" />
          
        
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
             
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item onClick={userLogout}>Logout</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

const NavbarDashboardAdmin = () => {


  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
       <h4 style={{marginRight:"40px"}}>Vaibhav Sardar &#x25bc;  </h4>
     
    </a>
  ));

  return (
    <div className="navbar" style={{ paddingInline: "50px" }} >
      <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      
        <div className="dflex">
          <img className="profile-img" src={ProfileImg} alt="profile" />
          
        
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
             
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item >Logout</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </div>
  );
};

export { NavbarDashboard, NavbarDashboardAdmin };
