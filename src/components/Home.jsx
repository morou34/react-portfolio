import React from 'react';
import heroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';


const Home = () => {
  return (
    <div 
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div
            className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Developer.</h2>
                <p className='text-gray-500 max-w-md py-6'>
                    I have a decent experience in web developement, and I have worked before as a freelancer on a few projects. I really admire making web applications, and i love learning new technologies.

                </p>
                <div>
                    <Link to="portfolio" duration={500} smooth
                    className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer group'
                        >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 '>
                            <MdOutlineKeyboardArrowRight size={25} className=' ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img 
                    src={heroImage} 
                    alt="myHeroImage"
                    className='rounded-2xl mx-auto w-2/3 md:w-full border-white'
                />
            </div>
        </div>
    </div>
  )
}

export default Home
