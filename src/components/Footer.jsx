import React from 'react'
import {AiOutlineArrowRight, AiOutlinePhone, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsEnvelopeAt} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { Link } from 'react-scroll'
function Footer() {

  const linkItems = [{
    id : 1,
    title: "home",
  },{
    id : 2,
    title: "about",
  },{
    id : 3,
    title: "education",
  },{
    id : 4,
    title: "exam",
  },{
    id : 5,
    title: "experience",
  },{
    id : 6,
    title: "portfolio",
  },{
    id : 7,
    title: "contact",
  }]

  const contactItems = [{
    id:1,
    child : (
      <>
        <BsEnvelopeAt size={25} className='mr-4'/>mehmetburakbaloglu@gmail.com
      </>
    )
  },{
    id:2,
    child : (
      <>
        <AiOutlinePhone size={25} className='mr-4'/>+90 538 763 52 25
      </>
    )
  },{
    id:3,
    child : (
      <>
        <HiOutlineLocationMarker size={25} className='mr-4'/>Bozuyuk, Bilecik, Turkey
      </>
    )
  }]

  return (
    <div>
      <div className='grid xl:grid-cols-3 mx-20 my-10 flex items-center justify-center'>
      <img className='w-[200px] mx-20 my-8' src="https://i.hizliresim.com/mdv38dw.png" alt="" />
      <div>
        <ul className='flex mx-[50px] ml-[70px] lg:ml-0 flex-col lg:p-10 p-4  justify-center border-y-2 xl:border-y-0 xl:border-x-2 border-black '>
          {
            contactItems.map(({child, id}) => (
              <li className='flex items-center' key={id}>{child}</li>
            ))
          }
        </ul>
      </div>
      <div>
      <ul className='flex mx-40 my-20 flex-col'>
        {
          linkItems.map((item) => (
            <li className='flex items-center hover:translate-x-4 duration-300 cursor-pointer' key={item.id}><AiOutlineArrowRight/><Link to={item.title} smooth={true}  offset={-180} className='mx-2 hover:underline underline-offset-4  font-bold text-xl '>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</Link></li>
          ))
        }        
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