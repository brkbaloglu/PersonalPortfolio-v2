import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
function Header() {

  const [nav, setNav] = useState(false)

  const linkItems = [{
    id : 1,
    title: "home"
  }, {
    id : 2,
    title : "about"
  }, {
    id : 3,
    title : "education"
  },{
    id : 4,
    title : "exam"
  },{
    id : 5,
    title : "experience"
  },{
    id : 6,
    title : "portfolio"
  },{
    id : 7,
    title : "contact"
  },]

  return (
    <div className='flex items-center justify-between px-[100px] sm:px-20 md:px-[170px] py-5 border-b-2 border-black bg-white sticky top-0 z-50'>
      <img className='w-[60px]' src="https://i.hizliresim.com/mdv38dw.png" alt="" />        
      <div className='hidden lg:flex'>
        {
          linkItems.map((item) => (
            <Link className='cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='active' smooth={true} spy={true} offset={-150} to={item.title} key={item.id}>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</Link>

          ))
        }      
      </div>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black lg:hidden'>
            {nav ? <FaTimes size={30} className='text-white'/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <div className='flex lg:hidden flex-col justify-center items-center absolute top-0 right-0 px-10 h-screen bg-black'>
          {
            linkItems.map((item) => (
              <Link className=' my-2 cursor-pointer mx-2 hover:underline underline-offset-[10px] font-bold text-2xl text-white text' activeClass='res-active' smooth={true} spy={true} offset={-200} to={item.title} key={item.id}>{item.title.charAt(0).toUpperCase() + item.title.slice(1) }</Link>

            ))
          }
          </div>  
        )}
        
    </div>
  )
}

export default Header