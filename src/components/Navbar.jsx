import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';


const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false);
    const handleNavMenu = () => setNavMenu(!navMenu);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
         <h1 className='logo text-5xl font-bold'><BsCodeSlash/></h1>
        </div>
        {/* Navbar Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleNavMenu} className='md:hidden z-10'>{ !navMenu ? <FaBars /> : <FaTimes/>}</div>
        {/* Mobile Menu */}
        <ul className={!navMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar