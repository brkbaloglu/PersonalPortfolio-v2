import React from 'react'
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai'
import { BiLogoCss3, BiLogoPhp, BiLogoReact, BiLogoTailwindCss} from 'react-icons/bi'
import { DiJavascript1} from 'react-icons/di'
import { SiMysql} from 'react-icons/si'
import {Link} from 'react-router-dom'
import restaurant from '../assets/restaurant.png'
import education from '../assets/education.png'
import cryptocurrency from '../assets/cryptocurrency.png'
import countrylist from '../assets/countrylist.png'


function Portfolio() {

 

  return (
    <div className='md:mx-20 my-10' id='portfolio'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Portfolio</span></h3>
      <div className='grid xl:grid-cols-2 sm:grid-cols-1 md:w-full'>

        <div className='flex items-center justify-center flex-col mt-20 '>
        <img className='lg:w-[500px] w-[200px]' src={restaurant} alt="" />
          <div className=' text-center flex items-center justify-center flex-col'>
            <h3 className=' text-2xl font-bold text-black my-5'>Restaurant Website</h3>
            <p className='w-[200px] md:w-full'>Responsive restaurant website using HTML, CSS, Javascript, PHP and MySQL</p>
            <div className='flex items-center justify-between md:w-[500px] flex-col md:flex-row'>
              <div className='flex items-center justify-center text-black w-[150px] md:p-2 '>
                <p>Code here:</p>
                <Link to="https://github.com/brkbaloglu/RestaurantWebsite-v2"><AiFillGithub size={30} className='ml-4'/></Link>
              </div>

              <div className='flex items-center justify-center my-4 pt-2 '>
                <AiFillHtml5 size={20} className='mx-2 bg-white text-orange-500'/>
                <BiLogoCss3 size={20} className='mx-2 bg-white text-blue-500'/>
                <DiJavascript1 size={20} className='mx-2 text-yellow-300 '/>
                <BiLogoPhp size={20} className='mx-2  text-blue-300 '/>
                <SiMysql size={20} className='mx-2  text-blue-300 '/>
              </div>
            
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center flex-col  mt-20'>
          <img className='lg:w-[500px] w-[200px]' src={education} alt="" />
          <div className=' text-center flex items-center justify-center flex-col'>
            <h3 className=' text-2xl font-bold text-black my-5'>Education Website</h3>
            <p className='w-[300px] md:w-full'>Responsive education website using React, TailwindCss</p>
            <div className='flex items-center justify-between md:w-[500px] flex-col md:flex-row'>

              <div className='flex items-center text-black w-[150px] p-2 '>
                <p>Code here:</p>
                <Link to="https://github.com/brkbaloglu/EducationWebsite" ><AiFillGithub size={30} className='ml-4'/></Link>
              </div>
              <div className='flex items-center justify-center my-4 pt-2 '>
                <BiLogoReact size={20} className='mx-2 bg-white text-blue-300'/>
                <BiLogoTailwindCss size={20} className='mx-2 bg-white text-blue-300'/>
              </div>
             
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center flex-col  mt-20'>
        <img className='lg:w-[500px] w-[200px]' src={cryptocurrency} alt="" />
          <div className=' text-center flex items-center justify-center flex-col'>
            <h3 className=' text-2xl font-bold text-black  my-5'>Cryptocurrency Website</h3>
            <p className='w-[300px] md:w-full'>Responsive Cryptocurrency website using React, TailwindCss</p>
            <div className='flex items-center justify-between md:w-[500px] flex-col md:flex-row'>
              <div className='flex items-center text-black w-[150px] p-2 '>
                <p>Code here:</p>
                <Link to="https://github.com/brkbaloglu/CryptocurrencyWebsite" ><AiFillGithub size={30} className='ml-4'/></Link>
              </div>
              
              <div className='flex items-center justify-center my-4 pt-2 '>
                <BiLogoReact size={20} className='mx-2 bg-white text-blue-300'/>
                <BiLogoTailwindCss size={20} className='mx-2 bg-white text-blue-300'/>
              </div>
              
            </div>
          </div>
        </div>

        

        <div className='flex items-center justify-center flex-col mt-20'>
        <img className='lg:w-[500px] w-[200px]' src={countrylist} alt="" />
          <div className=' text-center flex items-center justify-center flex-col'>
            <h3 className=' text-2xl font-bold text-black  my-5'>Country List</h3>
            <p className='w-[300px] md:w-full'>Country List using React, TailwindCss</p>
            <div className='flex items-center justify-between md:w-[500px] flex-col md:flex-row'>
              <div className='flex items-center text-black w-[150px] p-2 '>
                <p>Code here:</p>
                <Link to="https://github.com/brkbaloglu/CountryList" ><AiFillGithub size={30} className='ml-4'/></Link>
              </div>

              <div className='flex items-center justify-center my-4 pt-2 '>
                <BiLogoReact size={20} className='mx-2 bg-white text-blue-300'/>
                <BiLogoTailwindCss size={20} className='mx-2 bg-white text-blue-300'/>
              </div>
              
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Portfolio