import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';



function Sidebar() {

    const user = useSelector(selectUser)
    // every user details that we see inside the redux-dev tools
    // is only now accessible through this



    // displayName and email used below are the original dataname
    // provided by firebase



    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src="https://images.all-free-download.com/images/templates_large/blue_sky_template_1514.jpg" alt="" />
                <Avatar className="sidebar_avatar" >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebarstats_css">
                    <p className='sidebar_stat'>How many people viewed your profile ?  </p>
                    <p className='sidebar_statnumber' >2000</p>
                </div>
                <div className="sidebarstats_css" >
                    <p className='sidebar_stat'>Total views on your posts. </p>
                    <p className='sidebar_statnumber'>5789</p> 
                </div>              
            </div>

            <div className='sidebar_bottom'>
                <p className="recent"> Recent</p>
                <div className='rest_center'>
                    <p>...</p>
                    <p>..</p>
                    <p>.</p>
                </div>
               
            </div>
        </div>
    )
}

export default Sidebar
