import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase'
import { useDispatch,  } from 'react-redux'
import {login,  } from './features/userSlice'

function Login() {

    // What is a Hook? A Hook is a special function that lets
    // you “hook into” React features. For example, useState is a
    // Hook that lets you add React state to function components 
    // This JavaScript syntax is called “array destructuring”.
    //  It means that we’re making two new variables name and setname,
    //  where name is set to the first value returned by useState,
    //  and setname is the second. 


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [profilePic, setprofilePic] = useState('')
    
    // This hook returns a reference to the dispatch function from the 
    // Redux store. You may use it to dispatch actions as needed.
    const dispatch = useDispatch() 





    const loginToApp = (e) => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth)=> {
            dispatch(login=>({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }



    
    const register = () => {
        if (!name) {
            return alert('No value supplied')
        }
            auth.createUserWithEmailAndPassword(email, password) //here we create a user
            .then((userAuth) =>{
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic || '',
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name, 
                        photoURL: profilePic
                    }))
                })
            }).catch(error => alert(error))
        }




    return (
        <div className='login'>
            {/* this page is rendered only when you haven't been logged in */}
            <img src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg' alt='' />
            <form className='formcontainer'>
                <input value={name} onChange={e => setname(e.target.value)} placeholder='FullName' type='text'/>
                <input value={profilePic} onChange={e => setprofilePic(e.target.value)} placeholder='Profile pic url(optional)' type='text'/>
                <input value={email} onChange={e => setemail(e.target.value)} placeholder='Email' type='text'/>
                <input value={password} onChange={e => setpassword(e.target.value)} placeholder='Password' type='password'/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
                

            </form>
            <p>Not a member?   
                    <span className='login_register'
                    onClick={register}>
                        
                      Register Now
                    </span> 
            </p>
        </div>
    )
}

export default Login
