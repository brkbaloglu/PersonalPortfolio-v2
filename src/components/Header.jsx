import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
function Header() {

  const [nav, setNav] = useState(false)

  return (
    <div className='flex items-center justify-between px-20 py-5 border-b-2 border-black bg-white sticky top-0 z-50'>
      <img className='w-[60px]' src="https://i.hizliresim.com/mdv38dw.png" alt="" />        
      <div className='hidden lg:flex'>
      <Link className='cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='active' smooth={true} spy={true} offset={-200} to="home">Home</Link>
      <Link className='cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='active' smooth={true} spy={true} offset={-150} to="about">About</Link>
      <Link className='cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='active' smooth={true} spy={true} offset={-100} to="education">Education</Link>
      <Link className='cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='active' smooth={true} spy={true} offset={-100} to="experience">Experience</Link>
      <Link className='cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='active' smooth={true} spy={true} offset={-150} to="portfolio">Portfolio</Link>
      <Link className='cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='active' smooth={true} spy={true} offset={-100} to="contact">Contact</Link>
      </div>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black lg:hidden'>
            {nav ? <FaTimes size={30} className='text-white'/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <div className='flex lg:hidden flex-col justify-center items-center absolute top-0 right-0 w-[30%] h-screen bg-black'>
          <Link className=' my-2 cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='res-active' smooth={true} spy={true} offset={-200} to="home">Home</Link>
          <Link className=' my-2 cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='res-active' smooth={true} spy={true} offset={-150} to="about">About</Link>
          <Link className=' my-2 cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='res-active' smooth={true} spy={true} offset={-100} to="education">Education</Link>          
          <Link className=' my-2 cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='res-active' smooth={true} spy={true} offset={-100} to="experience">Experience</Link>          
          <Link className=' my-2 cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='res-active' smooth={true} spy={true} offset={-150} to="portfolio">Portfolio</Link>
          <Link className=' my-2 cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='res-active' smooth={true} spy={true} offset={-50} to="contact">Contact</Link>          
        </div>  
        )}
        
    </div>
  )
}

export default Header