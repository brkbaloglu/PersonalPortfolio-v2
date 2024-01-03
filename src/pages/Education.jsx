import React from 'react'
import {MdSchool} from 'react-icons/md'
const Education = () => {

  const educationItems = [{
    id : 1,
    schoolName : "Bozüyük Kumral Abdal Anatolian High School",
    branch : "",
    dateRange : "2015 - 2019"
  },{
    id : 2,
    schoolName : "Eskisehir Osmangazi University",
    branch : "Math and Computer Science",
    dateRange : "2019 - 2024"
  }]

  return (
    <div className='my-20 mx-20' id='education'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Education</span></h3>
      <div className='my-10 lg:mx-20'>
        
        {
          educationItems.map((item) => (
            <div key={item.id} className='flex items-center'>
              <MdSchool size={30} className='mr-4 hidden lg:flex'/>
              <div className='my-3'>
                <h5 className='font-bold md:text-2xl text-md'>{item.schoolName}</h5>
                <p className='text-md text-black opacity-70'>{item.branch}</p>
                <p className='text-sm text-black opacity-40'>({item.dateRange})</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Education