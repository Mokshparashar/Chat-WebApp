import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogOutButton = () => {
  const {loading, logout} =useLogout();
  return (
    <div className='my-auto '>
      {!loading ? (<BiLogOutCircle  className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>) :(
        <span className='loading loading-spinner'></span>
      )}
      </div>
  )
}

export default LogOutButton;