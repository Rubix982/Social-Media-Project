import React from 'react'
import {Link} from 'react-router-dom'
import UserProfilePicture from '../../public/assets/img/misc/UserProfilePicture.jpg'
import NotificationsIcon from '../../public/assets/img/icon/Notifications-icon.svg' 
import SettingsIcon from '../../public/assets/img/icon/Settings.svg'  
import '../style/Navbar.css'

/* 
   pass 2 props to navbar component
   1. Title
   2. First Name Of User
*/

const Navbar = (props) => 
{
        return (
        <div className="navbar-grid">
            <div className="navbar-items navbar-logo">
                <h1>
                    {props.title}
                </h1>
            </div>
    
            <div className="navbar-items navbar-search">
                <input type="text" name="search" placeholder="Search At Terrabuzz"></input>
            </div>
    
            <div className="navbar-items navbar-control-1">
                <Link to='/Profile'> 
                    <img className="round-img" src={UserProfilePicture} alt="" />
                </Link>
                <h3> {props.first_name} </h3>
            </div>
    
            <div className="navbar-items navbar-control-2">
                <Link to='/Settings'> 
                    <img className="round-img" src={SettingsIcon} alt="" />
                </Link>
            </div>
    
            <div className="navbar-items navbar-control-3">
                <Link to='/Notifications'> 
                    <img className="round-img" src={NotificationsIcon} alt="" />
                </Link>
            </div>
    
        </div>
        )
}
export default Navbar

