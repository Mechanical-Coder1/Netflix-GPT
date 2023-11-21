
import React from 'react'
import {USER_URL} from "../utils/data"
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleSignOut = () =>{
   
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    })
  }
  return (
    <div className='flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-40  w-screen'>
        <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt='logo'  />
        <div className='flex w-10 h-10 my-4 mx-20'>
          <img className='' alt="userIcon" src={USER_URL} />
          <button className='text-white font-bold p-2' onClick={handleSignOut}>SignOut</button>
        </div>
            

    </div>
  )
}

export default Header
