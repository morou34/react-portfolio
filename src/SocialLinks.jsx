import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutLineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { MdInfoOutline } from 'react-icons/md'

const SocialLinks = () => {
    const socialmedia = [
        {
            id: 1,
            link:'LinkedIn',
            child: ( <> <FaLinkedin size={30}/> </> ),
            href: 'https://www.linkedin.com/in/mouaad-rouane-66a181180/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            link:'FaceBook',
            child: ( <> <FaFacebook size={30}/> </> ),
            href: 'https://fb.com/',
        },
        {
            id: 3,
            link:'Github',
            child: ( <> <FaGithub size={30}/> </> ),
            href: 'https://github.com/iMouaad',
        },
        {
            id: 4,
            link:'Mail',
            child: ( <> <BsFillPersonLinesFill size={30}/> </> ),
            href: 'rouanemouaad1@gmail.com',
            style: 'rounded-br-md'
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
        <ul>
            {socialmedia.map(({id, link, child, href, style}) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>

                    <a href={href} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
                        {link} {child}
                    </a>
                    </li> 
            ))}
        </ul>

    </div>
  )
}

export default SocialLinks