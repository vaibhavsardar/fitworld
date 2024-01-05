import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const  SidebarUser = () =>{
  return (
    <div className='sidbar-container '>
        <ul className='mainMenu'>
            <li className='sidebar-item  '><Link  to={'dashboard'}><div className='dflex'><HomeIcon/> Profile </div></Link></li>
            <li className='sidebar-item '><Link  to={'form'}><div className='dflex'><HomeIcon/> My Inteck Form </div></Link></li>
            <li className='sidebar-item '><Link  to={'mycourse'}><div className='dflex'><HomeIcon/> My Plans </div></Link></li>
            <li className='sidebar-item '><Link  to={'tracking'}><div className='dflex'><HomeIcon/>My Tracking</div></Link></li>
            <li className='sidebar-item'><Link  to={'/a'}><div className='dflex'><HomeIcon/>Video Content</div></Link></li>
            <li className='sidebar-item'><Link  to={'/a'}><div className='dflex'><HomeIcon/> Recipe Videos </div></Link></li>
            <li className='sidebar-item'><Link  to={'supplement'}><div className='dflex'><HomeIcon/> Supplement Store</div></Link></li>
            <li className='sidebar-item'><Link  to={'/'}><div className='dflex'><HomeIcon/> Setting </div></Link></li>
            <li className='sidebar-item'><Link  to={'help'}><div className='dflex'><HomeIcon/> Help </div></Link></li>
        </ul>
      
    </div>
  );
}



 const SidebarAdmin = () => {
  return (
    <div className='sidbar-container '>
        <ul className='mainMenu'>
            <li className='sidebar-item '><Link  to={'/a'}><div className='dflex'><HomeIcon/> Dashboard </div></Link></li>
            <li className='sidebar-item '><Link  to={'userlist'}><div className='dflex'><HomeIcon/>User list </div></Link></li>
            <li className='sidebar-item '><Link  to={'admincontent'}><div className='dflex'><HomeIcon/>Admin Content </div></Link></li>
            <li className='sidebar-item'><Link  to={'/a'}><div className='dflex'><HomeIcon/>Video Content</div></Link></li>
            <li className='sidebar-item'><Link  to={'/a'}><div className='dflex'><HomeIcon/> Recipe Videos </div></Link></li>
            <li className='sidebar-item'><Link  to={'supplement'}><div className='dflex'><HomeIcon/> Supplement </div></Link></li>
            <li className='sidebar-item'><Link  to={'/'}><div className='dflex'><HomeIcon/> Setting </div></Link></li>
            <li className='sidebar-item'><Link  to={'/'}><div className='dflex'><HomeIcon/> Help </div></Link></li>
        </ul>
      
    </div>
  );
}


const SidebarAdminUser = () => {
  return (
    <div className='sidbar-container '>
        <ul className='mainMenu'>
            <li className='sidebar-item '><Link  to={'/a'}><div className='dflex'><HomeIcon/>User Dashboard </div></Link></li>
            <li className='sidebar-item '><Link  to={'clientform'}><div className='dflex'><HomeIcon/>InformationForm</div></Link></li>
            <li className='sidebar-item '><Link  to={'content'}><div className=' dflex'><HomeIcon/>Content</div></Link></li>
            <li className='sidebar-item'><Link  to={'/a'}><div className='dflex'><HomeIcon/>Payment</div></Link></li>
            <li className='sidebar-item'><Link  to={'/'}><div className='dflex'><HomeIcon/> Help </div></Link></li>
        </ul>
      
    </div>
  );
}

export  {SidebarUser, SidebarAdmin,SidebarAdminUser};



