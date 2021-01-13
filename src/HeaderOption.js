import React from 'react'
import './HeaderOption.css'
import Avatar from '@material-ui/core/Avatar';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


function HeaderOption({Icon, title, avatar, onClick}) {

    const user = useSelector(selectUser)

    return (
        <div onClick={onClick}  className="header_options">

            {Icon && <Icon className='header_option_icon' />}

            {avatar && < Avatar className='header_option_icon' src="/broken-image.jpg"> 
            {user?.email[0]}  </Avatar>}



            {title && (<h3 className="header_option_title" > {title} </h3>) }
            
            {/* can be read as if there is user.photourl then use that as a source 
            else use the first letter of email */}
        </div>
    )
}

export default HeaderOption;
