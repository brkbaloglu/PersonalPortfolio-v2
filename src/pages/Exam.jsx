import React from 'react'
import {RiPencilFill} from 'react-icons/ri'
const Exam = () => {
  return (
    <div className='my-20 mx-20' id='education'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Exam Results</span></h3>
      <div className='my-10 lg:mx-20 '>
        <div className='flex items-center'>
            <RiPencilFill size={30} className='mr-4 hidden lg:flex'/>
            <div className='my-4'>
                <h5 className='font-bold md:text-2xl text-md'>ALES</h5>
                <p className='text-md text-black opacity-70'>Score: 82,81</p>
                <p className='text-sm text-black opacity-50'>My Rank: 6,361</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Exam