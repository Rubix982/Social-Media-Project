// React itself
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import Menu from '../assets/img/icon/HamburgerMenu.svg';
import Notifications from '../assets/img/icon/Notifications.svg';
import Logo from '../assets/img/icon/Logo.svg';
import { RightAlign } from './FlexAlignment';
import SearchBar from './SearchBar';

// Service
import { logMeOutService } from '../services/logout.js';

// Styling
import ComponentStyling from '../style/Navbar.module.css';

const Navbar = () => {

  const history = useHistory();

  const logMeOutIsClicked = async () => {
    try {
      await logMeOutService();
      setTimeout(() => {    
        localStorage.removeItem('loggedIn');
        history.push('/login');
      }, 2000);
    } catch (error) {
      alert(`Unable to log out, due to error "${error.message}"`)
    }
  }

  return (
    <div className={ComponentStyling.navbarGrid}>
      <div className={ComponentStyling.leftContent}>
        <RightAlign>
          <div className={ComponentStyling.logo}>
            <img src={Logo} alt="" />
          </div>
        </RightAlign>
        <div className={ComponentStyling.title}>
          <Link to="/feed">
            <h1>Terrabuzz</h1>
          </Link>
        </div>
      </div>
      <SearchBar />
      <RightAlign>
        <div className={ComponentStyling.rightContent}>
          <div>
            <a className={ComponentStyling.profileDetails} href='/profile'>
              <div className={ComponentStyling.profilePicture}>
                <img
                  alt="user icon"
                  src={'/assets/img/profile_pictures/boy(3).svg'}
                />
              </div>
              <div className={ComponentStyling.username}>
                <h1>John Doe</h1>
              </div>
            </a>
          </div>
          <div className={ComponentStyling.controls}>
            <div className={ComponentStyling.controlIcon}>
              <a href='/notification'>
                <img src={Notifications} alt="" />
              </a>
            </div>
            <div className={ComponentStyling.controlIcon}>
              <div className={ComponentStyling.dropdownButton}>
                <img src={Menu} alt="" />
                <div className={ComponentStyling.dropdownContent}>

                  {/* Dropdown content starts here */}

                  {/* Profile Information */}
                  <div className={ComponentStyling.tilingStyleForGrid}>
                    <a href='/profile' className={ComponentStyling.gridStylingForDropdown}>
                      <div className={ComponentStyling.profilePicture}>
                        <img
                          alt="userIcon"
                          src={'/assets/img/profile_pictures/boy(3).svg'}
                          className={ComponentStyling.narbarImageStyling}
                        />
                      </div>
                      <div className={ComponentStyling.navbarTextStyling}>
                        <h1>John Doe | @johndoe</h1>
                      </div>
                    </a>
                  </div>

                  {/* Give Feedback */}
                  <div className={ComponentStyling.tilingStyleForGrid}>
                    <a href='#' className={ComponentStyling.gridStylingForDropdown}>
                      <div className={ComponentStyling.gridStylingForDropdownIcons}>
                        <img
                          alt='feedback'
                          src={'/assets/img/navbar/message.svg'}
                          className={ComponentStyling.narbarImageStyling}
                        />
                      </div>
                      <div className={ComponentStyling.navbarTextStyling}>
                        <h1>Give Feedback&nbsp;</h1>
                        <p className={ComponentStyling.h2Styling}> - Help us improve Terrabuzz</p>
                      </div>
                    </a>
                  </div>

                  {/* Settings And Privacy */}
                  <div className={ComponentStyling.tilingStyleForGrid}>
                    <a href='/settings' className={ComponentStyling.gridStylingForDropdown}>
                      <div className={ComponentStyling.gridStylingForDropdownIcons}>
                        <img
                          alt='settings'
                          src={'/assets/img/navbar/settings.svg'}
                          className={ComponentStyling.narbarImageStyling}
                        />
                      </div>
                      <div className={ComponentStyling.navbarTextStyling}>
                        <h1>Settings And Privacy</h1>
                      </div>
                    </a>
                  </div>

                  {/* Help And Support */}
                  <div className={ComponentStyling.tilingStyleForGrid}>
                    <a href='#' className={ComponentStyling.gridStylingForDropdown}>
                      <div className={ComponentStyling.gridStylingForDropdownIcons}>
                        <img
                          alt='helpSupport'
                          src={'/assets/img/navbar/support.svg'}
                          className={ComponentStyling.narbarImageStyling}
                        />
                      </div>
                      <div className={ComponentStyling.navbarTextStyling}>
                        <h1>Help &amp; Support</h1>
                      </div>
                    </a>
                  </div>


                  {/* Logout */}
                  <div className={ComponentStyling.tilingStyleForGrid}>
                    <div onClick={logMeOutIsClicked} className={ComponentStyling.gridStylingForDropdown}>
                      <div className={ComponentStyling.gridStylingForDropdownIcons}>
                        <img
                          alt='logOut'
                          src={'/assets/img/navbar/logout.svg'}
                          className={ComponentStyling.narbarImageStyling}
                        />
                      </div>
                      <div className={ComponentStyling.navbarTextStyling}>
                        <h1>Logout</h1>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown content ends here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RightAlign>
    </div>
  );
};

export default Navbar;
