import { Avatar } from '@material-ui/core'
import { ThumbUpAltOutlined } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


const Post = forwardRef( ({name, description, message, photoUrl}, ref) => {

  

    return (
        <div ref={ref} className="post ">
            <div className="post_header">
                <Avatar src={photoUrl} > {name[0]} </Avatar>
            {/*  src={photoUrl} inside avatar */}
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>
            </div>
            <div className='post_buttons'>
                <InputOptions Icon ={ThumbUpAltOutlined} title='Like'
                color='gray'/>
                 <InputOptions Icon ={CommentIcon} title='Comment'
                color='gray'/>
                 <InputOptions Icon ={ShareIcon} title='Share'
                color='gray'/>
                 <InputOptions Icon ={SendIcon} title='Send'
                color='gray'/>
            </div>
        </div>
    )
})

export default Post
