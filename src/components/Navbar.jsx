import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
         <h1 className=' logo text-5xl font-bold'><BsCodeSlash/></h1>
        </div>
        {/* Navbar Menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* Hamburger */}
        <div className='hidden'><FaBars /></div>
        {/* Mobile Menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Social Icons */}
    </div>
  )
}

export default Navbar