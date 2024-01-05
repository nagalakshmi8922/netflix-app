import React,{useEffect} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    const unsub_loaded = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        navigate("/")
        // User is signed out
        // ...
      }
    });
    //unsubscribe/unmount once component loading completed.
    return ()=>unsub_loaded();
    
  },[])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row' >
    <img className='w-52' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix"/>
  
    </div>
   
  )

}

export default Header