import React from 'react'
import { AiFillHtml5} from 'react-icons/ai'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import Photo from '../assets/img.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {BiLogoCss3,BiLogoAngular, BiLogoReact, BiLogoTailwindCss, BiLogoPhp, BiLogoPython} from 'react-icons/bi'
import { DiSass, DiJavascript1} from 'react-icons/di'

function Home() {
  
  return (
    <div className='my-20 ' id='home'>
      <div className='flex items-center justify-center lg:flex-row flex-col'> 
        <div className='text-center mx-10 '>
        <h3 className='text font-bold text-white text-4xl'>I'm Mehmet Burak Baloglu</h3>
        <div className='flex items-center justify-center'>
          <p className='font-bold lg:text-2xl text-lg'>A</p>
          <TypeAnimation sequence={[
            'Mathematician',
            2000,
            'Front-End Developer',
            2000,
          ]}
          speed={50}
          className='ml-1 my-4 font-bold lg:text-2xl text-lg'
          wrapper='span'
          repeat={Infinity}
          />
        </div>
          <div >
            <ul className='flex items-center justify-center'>
              <Link to="portfolio" smooth={true} spy={true} offset={-150} className='flex items-center justify-center border-2 border-black px-6 py-2 group hover:bg-black hover:text-white duration-200 cursor-pointer'><p>Portfolio</p><MdOutlineKeyboardArrowRight size={25} className='ml-1 group-hover:rotate-90 duration-100' /></Link>
            </ul>
          </div>
        </div>
        <div className='flex items-center'>
          <img className='w-[300px] lg:ml-20 rounded-xl h-[400px] mt-5 lg:mt-0' src={Photo} alt="" />
        </div>
        
      </div>
      <div className='lg:flex items-center justify-center my-20 hidden '>
        <AiFillHtml5 size={40} className='mx-8 bg-white text-orange-500'/>
        <BiLogoCss3 size={40} className='mx-8 bg-white text-blue-500'/>
        <DiJavascript1 size={40} className='mx-8 text-yellow-300 '/>
        <BiLogoPython size={40} className='mx-8  text-blue-300 '/>
        <BiLogoPhp size={40} className='mx-8  text-blue-300 '/>
        <DiSass size={40} className='mx-8 bg-white text-pink-400'/>
        <BiLogoAngular size={40} className='mx-8 text-red-600'/>
        <BiLogoReact size={40} className='mx-8 bg-white text-blue-300'/>
        <BiLogoTailwindCss size={40} className='mx-8 bg-white text-blue-300'/>
      </div>

      
    </div>
  )
}

export default Home