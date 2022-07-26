import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import File from '../assets/DariusSeals-resume-2022.docx'

const Navbar = ({navMenu, handleNavMenu}) => {
   


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10' >
        <div>
         <h1 className='logo text-5xl font-bold'><BsCodeSlash/></h1>
        </div>
      {/* Navbar Menu */}
      <ul className='hidden md:flex'>
        <li className='pink-hover'>
          <Link to='home' smooth={true} duration={500} activeClass='pink-color' spy={true}>
            Home
          </Link>
        </li>
        <li className='pink-hover'>
          <Link to='about' smooth={true} duration={500} activeClass='pink-color' spy={true}>
            About
          </Link>
        </li>
        <li className='pink-hover'>
          <Link to='skills' smooth={true} duration={500} activeClass='pink-color' spy={true}>
            Skills
          </Link>
        </li>
        <li className='pink-hover'>
          <Link to='work' smooth={true} duration={500} activeClass='pink-color' spy={true}>
            Work
          </Link>
        </li>
        <li className='pink-hover'>
          <Link to='contact' smooth={true} duration={500} activeClass='pink-color' spy={true}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNavMenu} className='md:hidden z-10 cursor-pointer'>
        {!navMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !navMenu
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '
        }
      >
        <li className='py-6 text-4xl pink-hover'>
          <Link onClick={handleNavMenu} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl pink-hover'>
          {' '}
          <Link onClick={handleNavMenu} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl pink-hover'>
          {' '}
          <Link onClick={handleNavMenu} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl pink-hover'>
          {' '}
          <Link onClick={handleNavMenu} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl pink-hover'>
          {' '}
          <Link onClick={handleNavMenu} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/dariusseals/'
              target='_blank'
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Dseals82'
              target='_blank'
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto: tristarmediagroupinc@gmail.com'
              target='_blank'
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={File}
              download='darius-seals-resume.docx'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar