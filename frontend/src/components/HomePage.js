import React from 'react'
import MainNavbar from './MainNavbar'
import aboutpic from "../img/about-pic.jpg";
import servicepic from "../img/services/service-pic.jpg";
import Footer from './Footer';
import bannerperson from "../img/banner-person.png";
import bannerbg from "../img/banner-bg.jpg";
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
    <MainNavbar/>

      {/* <!-- About Section Begin --> */}
      <section class="about-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-pic">
                        <img src={aboutpic} alt=""/>
                        <a href="https://www.youtube.com/watch?v=SlPhMPnQ58k" class="play-btn video-popup">
                            <img src="img/play.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-text">
                        <h2>Story About Us</h2>
                        <p class="first-para">Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
                            sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate
                            cursus a amet.</p>
                        <p class="second-para">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
                            quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                            rhoncus, gravida quam semper libero sit amet.</p>
                        <a href="#" class="primary-btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Section End --> */}

    {/* <!-- Services Section Begin --> */}
    <section class="services-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="services-pic">
                        <img src={servicepic} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="service-items">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="services-item bg-gray">
                                    <img src="img/services/service-icon-1.png" alt=""/>
                                    <h4>Strategies</h4>
                                    <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                                        montes.</p>
                                </div>
                                <div class="services-item bg-gray pd-b">
                                    <img src="img/services/service-icon-3.png" alt=""/>
                                    <h4>Workout</h4>
                                    <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                                        montes.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="services-item">
                                    <img src="img/services/service-icon-2.png" alt=""/>
                                    <h4>Yoga</h4>
                                    <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                                        montes.</p>
                                </div>
                                <div class="services-item pd-b">
                                    <img src="img/services/service-icon-4.png" alt=""/>
                                    <h4>Weight Loss</h4>
                                    <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                                        montes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Services Section End --> */}




    {/* <!-- Membership Section Begin --> */}
    <section class="membership-section spad" style={{paddingBottom:"100px"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>MEMBERSHIP PLANS</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="membership-item" >
                        <div class="mi-title">
                            <h4>1 Month</h4>
                            <div class="triangle"></div>
                        </div>
                        <h2 class="mi-price">₹8,260<span>/01 mo</span></h2>
                        <ul>
                            <li style={{marginInline:"30px"}}>
                                <p>A good choice if you want to experiment with online coaching and see if it works for you</p>
                            </li>
                            
                        </ul>
                        <Link to={'enroll'} class="primary-btn membership-btn">Enroll Now</Link>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="membership-item"style={{paddingBottom:"77px"}}>
                        <div class="mi-title">
                            <h4>3 Months</h4>
                            <div class="triangle"></div>
                        </div>
                        <h2 class="mi-price">₹5,933<span>/01 mo</span></h2>
                        <ul>
                            <li style={{marginInline:"30px"}}>
                                <p>A great choice to get visible results and make meaningful progress</p>
                            </li>
                            
                        </ul>
                        <a href="#" class="primary-btn membership-btn">Enroll Now</a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="membership-item"style={{paddingBottom:"77px"}}>
                        <div class="mi-title">
                            <h4>6 Months</h4>
                            <div class="triangle"></div>
                        </div>
                        <h2 class="mi-price">₹4,900<span>/01 mo</span></h2>
                        <ul>
                            <li style={{marginInline:"30px",marginBottom:"55px"}}>
                                <p>The best choice for complete body transformation</p>
                            </li>
                            
                        </ul>
                        <a href="#" class="primary-btn membership-btn">Enroll Now</a>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="membership-item"style={{paddingBottom:"77px"}} >
                        <div class="mi-title">
                            <h4>12 Months</h4>
                            <div class="triangle"></div>
                        </div>
                        <h2 class="mi-price">₹4,133<span>/01 mo</span></h2>
                        <ul>
                            <li style={{marginInline:"30px"}}>
                                <p>The best choice for complete body transformation and continued growth</p>
                            </li>
                            
                        </ul>
                        <a href="#" class="primary-btn membership-btn">Enroll Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Membership Section End --> */}
{/* 
    <!-- Banner Section Begin --> */}
    <section class="banner-section set-bg" style={{ backgroundImage: `url(${bannerbg})` }}>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="banner-text">
                        <h2>Get training today</h2>
                        <p>Gimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry’s standard.</p>
                        <a href="#" class="primary-btn banner-btn">Contact Now</a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <img src={bannerperson} alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}

    <Footer/>
      
    </>
  )
}

export default HomePage
