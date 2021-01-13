import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from './firebase';
import { logout, selectUser } from './features/userSlice';




function Header() {

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const logoutofApp = () => {
        dispatch(logout());
        auth.signOut();
    }





    return (
        <div className='header'>
            <div className='header_left'>
                <img alt='' src = "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/>
                <div className='header_search'>
                    <SearchIcon  />
                    <input placeholder="SearchUj" type="text" />
                </div>
            </div>
            <div className="header_right">
                < HeaderOption Icon={HomeIcon} title= "Home" />
                < HeaderOption Icon={SupervisorAccountIcon} title= "MyNetwork" />
                < HeaderOption Icon={AccessibilityIcon} title= "Accessibility" />
                < HeaderOption Icon={CalendarTodayIcon} title= "Calendar" />
                < HeaderOption Icon={AccountBoxIcon} title= "Profile" />
                {/* here we provide avatara as boolean value just so that
                it checks in HeaderOptions.js and gets out only when it has to */}
                <HeaderOption  onClick={logoutofApp} title= "LogOut🙋‍♂" avatar="1" />
                {/* here logoutofApp is provided as a prop 
                for the headeroption function; so powerful and efficient
                and amazing how one thibg gets connected to another */}
            </div>
        </div>
    )
}

export default Header
