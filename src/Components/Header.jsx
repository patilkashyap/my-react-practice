import React from 'react';
import logo from '../assets/logo.png';
import profile from '../assets/profile.jpg';

function Header() {
  return (
       <div className='bg-gray-300 text-center p-8 mb-2'>
                <div className='flex justify-between'>
                    <img className='h-12' src={logo} alt='logo' />
                    <div>Header</div>
                    <img className='h-12 rounded-full border-black border-2 ' src={profile} alt='profile' />
                </div>
        </div>
  )
}

export default Header