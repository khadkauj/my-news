import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login'
import React, { useEffect } from 'react'
import { auth } from './firebase';

// a lot of fucntion we use here  especially related to
// firebase are already provided in firebase codelab
// go check it; it's kinda easy after you have implemented it few 
// times



function App() {

  // this is how we access our user in redux

  // Allows you to extract data from the Redux store state, using a selector function.
  const user = useSelector(selectUser); 
  
  const dispatch = useDispatch()

// here we first implemented register function
// where we registered with necessary(after enabling email/password)
// function in firebase. when we saved it, it got saved in firebase user
// authentication page. Later, we created  useEfffect function in App.js
// through which we update the state of our page when we had change in
// authentication state
  useEffect(() => {
      auth.onAuthStateChanged((userAuth) =>{
        if (userAuth) {
          // unlike in logut case, here we also had 
          // to provide payload for it to trasnfer/dispatch 
          // necessary datas
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
            // here when it sees you are already loggedin, it 
            // keeps you logged in as you are in that particular state
          }))
        } else {
          // simply use dispath logout function
          dispatch(logout())
        }
      })
  }, []) 



  return (
    <div className="App">
        <Header />

          {/* if there is no user(no user state ie null) 
          then render a login page else render the
          respective app body of user */}
          {!user ? 
            (<Login />) :   (<div className="App_body">
                              <Sidebar />
                              <Feed />
                              <Widget />
                            </div>)}
        
    </div>
  );

}

export default App;
