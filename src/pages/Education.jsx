import React from 'react'
import {MdSchool} from 'react-icons/md'
const Education = () => {
  return (
    <div className='my-20 mx-20' id='education'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Education</span></h3>
      <div className='my-10 lg:mx-20'>
        <div className='flex items-center'>
            <MdSchool size={30} className='mr-4 hidden lg:flex'/>
            <div className='my-4'>
                <h5 className='font-bold md:text-2xl text-md'>Bozüyük Kumral Abdal Anatolian High School</h5>
                <p className='text-sm text-black opacity-40'>(2015 - 2019)</p>
            </div>
        </div>
        <div className='flex items-center'>
            <MdSchool size={30} className='mr-4 hidden lg:flex'/>
            <div className='my-4'>
                <h5 className='font-bold md:text-2xl text-md'>Eskisehir Osmangazi University</h5>
                <p className='text-sm text-black opacity-40'>(2019 - 2023)</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education