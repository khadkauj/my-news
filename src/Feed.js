import React, { useState, useEffect } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOptions from './InputOptions'
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post.js';
import { db, auth } from './firebase.js';
import firebase from 'firebase';
import {  selectUser } from './features/userSlice';
import {  useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';




function Feed() {

    const [input, setinput] = useState([])
    const [posts, setposts] = useState([])

    const user = useSelector(selectUser)


    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapShot) =>
            setposts(snapShot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data()
                })
            ))
        )
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName  ,
            description: user.email,
            message: input,
            photoUrl:  '', //the logical or here is interesting
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            // this syncs for diff usersin diff time as per sever time
        })

        setinput([]);
    }






    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form >
                        {/* the line below is imp especailly how {input } is used */}
                        <input value ={input} type='text'
                         onChange={e => setinput(e.target.value)} placeholder='Start a post...'  />
                         {/* onChange={e => setinput(e.target.value) because of this code 
                            we were able to type in search bar otherwise
                            the useState ficntion will just set it to blank */}
                        <button type='submit' onClick={sendPost} >Post</button>
                    </form>
                </div>
            </div>

            <div className='feed_inputoptions'>
                <InputOptions className='inputoptions_icon' Icon={PhotoIcon}  title='Photo' color='#70B5F9'/>
                <InputOptions Icon={SubscriptionsIcon}  title='Video' color='#70B5F9'/>
                <InputOptions Icon={EventNoteIcon}  title='Event' color='#70B5F9'/>
                <InputOptions Icon={CalendarViewDayIcon}  title='Text' color='#70B5F9'/>
            </div>

            <div>
                <FlipMove>

                    {/* THIS IS WHERE WE HAVE COMPONENT TO WRITE A POST */}
                {posts.map(({id, data:{name, description, message,photoUrl}}) =>
                //    key is very very important, so that we can identify and its very
                // imp to provde eveyrtime as it is how react will identify it
                   (
                     <Post key={id} name={name}  description={description} message={message} photoUrl={photoUrl} />
                    ) )}
                    {/* this fix was given by e20 in discord */}


                {/* <Post name='Ujjwal Khadka' description='just a test'
                message='Namaskar, k xa???' /> */}
                </FlipMove>
                
            </div>
        </div>
    )
}

export default Feed
