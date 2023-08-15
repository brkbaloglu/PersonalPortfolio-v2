import React from 'react'
import {AiOutlineArrowRight, AiOutlinePhone, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsEnvelopeAt} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { Link } from 'react-scroll'
function Footer() {
  return (
    <div>
      <div className='grid xl:grid-cols-3 mx-20 my-10 flex items-center justify-center'>
      <img className='w-[200px] mx-20 my-8' src="https://i.hizliresim.com/mdv38dw.png" alt="" />
      <div>
        <ul className='flex mx-[50px] ml-[70px] lg:ml-0 flex-col lg:p-10 p-4  justify-center border-y-2 xl:border-y-0 xl:border-x-2 border-black '>
          <li className='flex items-center'><BsEnvelopeAt size={25} className='mr-4'/>mehmetburakbaloglu@gmail.com</li>
          <li className='flex items-center'><AiOutlinePhone size={25} className='mr-4'/>+90 538 763 52 25</li>
          <li className='flex items-center'><HiOutlineLocationMarker size={25} className='mr-4'/>Bozuyuk, Bilecik, Turkey</li>
        </ul>
      </div>
      <div>
      <ul className='flex mx-40 my-20 flex-col'>
          <li className='flex items-center hover:translate-x-4 duration-300 cursor-pointer'><AiOutlineArrowRight/><Link to="home" smooth={true}  offset={-200} className='mx-2 hover:underline underline-offset-4  font-bold text-xl '>Home</Link></li>
          <li className='flex items-center hover:translate-x-4 duration-300 cursor-pointer'><AiOutlineArrowRight/><Link to="about" smooth={true}  offset={-150} className='mx-2 hover:underline underline-offset-4  font-bold text-xl '>About</Link></li>
          <li className='flex items-center hover:translate-x-4 duration-300 cursor-pointer'><AiOutlineArrowRight/><Link to="education" smooth={true}  offset={-100} className='mx-2 hover:underline underline-offset-4  font-bold text-xl '>Education</Link></li>
          <li className='flex items-center hover:translate-x-4 duration-300 cursor-pointer'><AiOutlineArrowRight/><Link to="experience" smooth={true}  offset={-100} className='mx-2 hover:underline underline-offset-4  font-bold text-xl '>Experience</Link></li>
          <li className='flex items-center hover:translate-x-4 duration-300 cursor-pointer'><AiOutlineArrowRight/><Link to="portfolio" smooth={true}  offset={-150} className='mx-2 hover:underline underline-offset-4  font-bold text-xl '>Portfolio</Link></li>
          <li className='flex items-center hover:translate-x-4 duration-300 cursor-pointer'><AiOutlineArrowRight/><Link to="contact" smooth={true}  offset={-100} className='mx-2 hover:underline underline-offset-4  font-bold text-xl'>Contact</Link></li>
        </ul>
      </div>
      </div>
      <div className='flex items-center lg:px-[150px] py-4 my-4 bg-black text-white'>
      <AiOutlineCopyrightCircle size={25} className='mr-2'/>
      <p className='font-bold lg:text-xl text-sm text'>Copyright 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer