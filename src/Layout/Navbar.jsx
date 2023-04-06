import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import User from '../assets/User_icon_2.svg.png'
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/' className='text-4xl font-bold text-red-600 cursor-pointer hover:text-gray-400 active:opacity-95'>
        NETFLIX
      </Link>
      {user?.email ? (
        <div className='flex items-center justify-between'>
          <Link to='/account' className='pr-4 font-normal text-gray-100 hover:text-red-600 active:opacity-95'>
            Account
          </Link>
          <button
            onClick={handleLogout}
            className='px-6 py-2 text-gray-100 bg-red-600 rounded cursor-pointer hover:opacity-90 active:opacity-95'
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='pr-4 text-gray-100 hover:text-red-700 active:opacity-95'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='px-6 py-2 text-gray-100 bg-red-600 rounded cursor-pointer hover:bg-gray-400 hover:text-red-600 active:opacity-95'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;