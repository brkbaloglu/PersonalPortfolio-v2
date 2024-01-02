import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(
                <>
                    Linkedin<FaLinkedin size={30}/>
                </>
                ),
                href:'https://www.linkedin.com/in/mehmet-burak-baloglu/',
                style:'rounded-br-md bg-blue-700',
                
        },
        {
            id:2,
            child:(
                <>
                    GitHub<FaGithub size={30}/>
                </>
                ),
                href:'https://github.com/brkbaloglu',
                style:'rounded-tr-md bg-black'
        }
    ]


  return (
    <div className='hidden lg:flex flex-col top-[45%] left-0 fixed '>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  hover:rounded-md duration-300 my-1 hover:ml-[-10px]  cursor-pointer ' + ' ' + style}>
                <a href={href} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white '>
                    {child}
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks