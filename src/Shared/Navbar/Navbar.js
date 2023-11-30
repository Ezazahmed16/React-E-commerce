import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from 'react-icons/bs';
import app from '../../firebase/firebase.config';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

const Navbar = () => {
  const [userNaame, setUserName] = useState('')
  const [user, setUser] = useState('')
  
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userName = user.displayName;
      setUser(user)
      setUserName(userName)
    } else {

    }
  });

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Logout')
      }).catch((error) => {

      });
  }

  console.log(user)

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
              <li><Link to='/home' className='bg-base-content text-white mx-1'>Home</Link></li>
              <li><Link to='/products' className='bg-base-content text-white mx-1'>Products</Link></li>
              <li><Link to='/contact' className='bg-base-content text-white mx-1'>Contact</Link></li>
            </ul>

          </div>

          <a className="normal-case text-sm md:text-2xl sm:w-32 md:w-44 font-semibold mx-5">E-Commerce</a>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/home' className='bg-base-content text-white mx-1'>Home</Link></li>
            <li><Link to='/products' className='bg-base-content text-white mx-1'>Products</Link></li>
            <li><Link to='/contact' className='bg-base-content text-white mx-1'>Contact</Link></li>
          </ul>
        </div>


        <div className="navbar-end  mx-5">

          <div className=" border-2 border-black  rounded-2xl p-3">
            <BsFillCartCheckFill className='h-6 w-6 mx-5' />
          </div>

          <div className="">
            Hi, {userNaame}
          </div>

          {
            user ? <>
              <button onClick={handleLogOut} className="btn bg-base-content text-white">Logout</button>
            </> : <>
              <Link to='/login' className="btn bg-base-content text-white">Login</Link>
            </>
          }


        </div>


      </div>
    </div>
  )
}

export default Navbar