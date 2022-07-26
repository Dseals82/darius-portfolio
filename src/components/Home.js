import React from 'react';
import TypeAnimation from 'react-type-animation';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


            
         

const Home = ({navMenu}) => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Darius Seals
        </h1>
        {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front End Developer.
        </h2> */}
        <TypeAnimation
            cursor={true}
            sequence={[
              "I'm a Front End Developer.",
              2000,
            ]}
            wrapper="h2"
            repeat={1}
            className={navMenu ? '-z-10' : 'text-4xl sm:text-7xl font-bold text-[#8892b0]'}
           />
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a front-end developer specializing in building and architecting exceptional digital experiences. Currently, I’m focused on
          building responsive front end web applications, but I'm also familiar with Node, SQL and NoSQL databases.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
           
                <span className='group-hover:rotate-90 duration-300'>
                <Link to='work' smooth={true} duration={500}>
                <HiArrowNarrowRight className='ml-3 ' />
                </Link>
                </span>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home