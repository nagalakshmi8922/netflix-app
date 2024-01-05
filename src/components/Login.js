import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidData} from '../utils/validate';
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [isSignInForm,setisSignInForm] =useState(true);
  const dispatch = useDispatch();
  const email= useRef(null);
  const password= useRef(null);
  const name= useRef(null);
  const [errorMessage,setErrorMessage]= useState(null);


    const toggleSignForm= () => {
      setisSignInForm(!isSignInForm)
      }
    const handleValidation =() => {
      const message = checkValidData(null,email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
        navigate("/browse")
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
        navigate("/browse")
    }
  }
  const authenticateuser=(auth,email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (  
    {isSignInForm} && <div>
        <Header/>
        <div className='absolute bg-gradient-to-b from-black'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='absolute text-center bg-gray-900 p-12 w-4/12 my-36 mx-auto right-0 left-0 bg-opacity-85'>
           
            <h1 className='text-white text-3xl font-bold py-4 '>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type="text"  ref={name} className=" p-2 m-2  text-white bg-stone-800 w-3/4 h-16 rounded-lg" placeholder='First Name'></input>}
            <input type="text" ref={email} className=" p-2 m-2  text-white bg-stone-800 w-3/4 h-16 rounded-lg" placeholder='Email or phone number'></input>
            <input type="password" ref={password} className="p-2 m-2  text-white bg-stone-800 w-3/4 h-16 rounded-lg" placeholder='Password'></input>
            <p className='text-red-600 text-lg'>{errorMessage}</p>
            <button className="p-2 my-6 text-white bg-red-600 w-3/4 h-16 rounded-lg" onClick={handleValidation}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <div className='flex justify-between'>
           <span className="text-gray-50"><input type="checkbox" defaultChecked/>RememberMe</span> 
            <span className="text-gray-50">Need Help?</span>
            </div>
            <p className='cursor-pointer text-white py-4' onClick={toggleSignForm}>{!isSignInForm?"Already Registered,Sign In here":"New to Netflix? Sign Up here"}</p>
        </form>
    </div>
   
  )
}

export default Login