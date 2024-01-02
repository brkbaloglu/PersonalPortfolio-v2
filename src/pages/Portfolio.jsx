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

  const portfolioItems = [{
    portfolioItemId : 1,
    portfolioItemImageSource : restaurant,
    portfolioItemProjectName : "Restaurant Website",
    portfolioItemProjectDescription : "Responsive restaurant website using HTML, CSS, Javascript, PHP and MySQL",
    portfolioItemLink : "https://github.com/brkbaloglu/RestaurantWebsite-v2",
    portfolioItemGithubIcon : (
      <>
        <AiFillGithub size={30} className='ml-4'/>
      </>
    ),
    portfolioItemUsingTechnologies : (
      <>
        <AiFillHtml5 size={20} className='mx-2 bg-white text-orange-500'/>
        <BiLogoCss3 size={20} className='mx-2 bg-white text-blue-500'/>
        <DiJavascript1 size={20} className='mx-2 text-yellow-300 '/>
        <BiLogoPhp size={20} className='mx-2  text-blue-300 '/>
        <SiMysql size={20} className='mx-2  text-blue-300 '/>
      </>
    )

  },{
    portfolioItemId : 2,
    portfolioItemImageSource : education,
    portfolioItemProjectName : "Education Website",
    portfolioItemProjectDescription : "Education website using React, TailwindCss",
    portfolioItemLink : "https://github.com/brkbaloglu/EducationWebsite",
    portfolioItemGithubIcon : (
      <>
        <AiFillGithub size={30} className='ml-4'/>
      </>
    ),
    portfolioItemUsingTechnologies : (
      <>
        <BiLogoReact size={20} className='mx-2 bg-white text-blue-300'/>
        <BiLogoTailwindCss size={20} className='mx-2 bg-white text-blue-300'/>
      </>
    )

  },{
    portfolioItemId : 3,
    portfolioItemImageSource : cryptocurrency,
    portfolioItemProjectName : "Cryptocurrency Website",
    portfolioItemProjectDescription : "Cryptocurrency website using React, TailwindCss",
    portfolioItemLink : "https://github.com/brkbaloglu/CryptocurrencyWebsite",
    portfolioItemGithubIcon : (
      <>
        <AiFillGithub size={30} className='ml-4'/>
      </>
    ),
    portfolioItemUsingTechnologies : (
      <>
        <BiLogoReact size={20} className='mx-2 bg-white text-blue-300'/>
        <BiLogoTailwindCss size={20} className='mx-2 bg-white text-blue-300'/>
      </>
    )

  },{
    portfolioItemId : 4,
    portfolioItemImageSource : countrylist,
    portfolioItemProjectName : "Country List",
    portfolioItemProjectDescription : "Country List using React, TailwindCss",
    portfolioItemLink : "https://github.com/brkbaloglu/CountryList",
    portfolioItemGithubIcon : (
      <>
        <AiFillGithub size={30} className='ml-4'/>
      </>
    ),
    portfolioItemUsingTechnologies : (
      <>
        <BiLogoReact size={20} className='mx-2 bg-white text-blue-300'/>
        <BiLogoTailwindCss size={20} className='mx-2 bg-white text-blue-300'/>
      </>
    )

  }]
 

  return (
    <div className='md:mx-20 my-10' id='portfolio'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Portfolio</span></h3>
      <div className='grid xl:grid-cols-2 sm:grid-cols-1 md:w-full'>

        {
          portfolioItems.map((item) => (
            <div key={item.portfolioItemId} className='flex items-center justify-center flex-col mt-20 border-2 py-5 mx-10 rounded-3xl'>
              <img className='lg:w-[500px] w-[200px]' src={item.portfolioItemImageSource} alt="" />
              <div className=' text-center flex items-center justify-center flex-col'>
                <h3 className=' text-2xl font-bold text-black my-5'>{item.portfolioItemProjectName}</h3>
                <p className='w-[200px] md:w-full'>{item.portfolioItemProjectDescription}</p>
                <div className='flex items-center justify-between md:w-[500px] flex-col-reverse md:flex-row mt-5'>
                  <div className='flex items-center justify-center text-black w-[150px] p-2 border-2 rounded-xl shadow-lg border-black'>
                    <p>Code here:</p>
                    <Link to={item.portfolioItemLink}>{item.portfolioItemGithubIcon}</Link>
                  </div>

                  <div className='flex items-center justify-center my-4 '>
                    {item.portfolioItemUsingTechnologies}
                  </div>
            
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio