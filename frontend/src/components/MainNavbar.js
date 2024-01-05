import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/authAction';

import logo from "../img/logo.png";
import herobg from "../img/hero-bg.jpg";

const MainNavbar = () => {
  const navegate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const userLogout = () =>{
    localStorage.clear()
    dispatch(logout());
    navegate("/");
  }

  return (
    <>
     <header class="header-section">
        <div class="container">
          <div class="logo">
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div class="nav-menu">
            <nav class="mainmenu mobile-menu">
              <ul>
                <li class="active">
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                <Link to={'program'}>Programs</Link>
                </li>
                <li>
                <Link to={'myaccount'}>Transformations</Link>
                </li>
                <li>
                  <Link  to={'/blog'}>Blog</Link>
                </li>
                <li>
                  <Link to={'/contactus'}>Contacts</Link>
                </li>
              </ul>
            </nav>
           
            {isAuthenticated?<><Link className='primary-btn ' to={"myaccount"}  >My Dashboard</Link><Link className='primary-btn signup-btn' onClick={userLogout}  >Log Out</Link></>:<><Link className='primary-btn signup-btn'  to={'/signup'}>Sign Up</Link> <Link className='primary-btn signup-btn'  to={'/login'}>Log In</Link></>}

          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>

      <section class="hero-section set-bg" style={{ backgroundImage: `url(${herobg})` }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="hero-text">
                <span>FITNESS ELEMENTS</span>
                <h1>PUSH YOURSELF</h1>
                <p>
                  Gutim comes packed with the user-friendly BMI Calculator
                  <br /> shortcode which lets
                </p>
                <a href="#" class="primary-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      

    {/* <div className='mainnavbar navbar'>
        <Link to={'/'} className='logo'>StayFit</Link>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/program'}>Programs</Link></li>
            <li><Link to={'/myaccount'}>Transformations</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            {isAuthenticated?<li><Link className='btn-enroll' onClick={userLogout}  >Log Out</Link></li>:<><li><Link className='btn-enroll'  to={'/signup'}>Sign Up</Link></li><li><Link className='btn-enroll'  to={'/login'}>Log In</Link></li></>}
           
            <li><Link className='btn-enroll'  to={'/admin'}>Admin</Link></li>

            

        </ul>
      
    </div> */}
    </>
  );
}

export default MainNavbar;
