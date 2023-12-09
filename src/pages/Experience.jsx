import React from 'react'
const Experience = () => {
  return (
    <div className='my-20 mx-20' id='experience'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Experience</span></h3>
      <div className='my-10 lg:mx-20 flex items-center flex-col sm:flex-row'>
        
        <div className='sm:h-[375px] md:h-[300px] lg:h-[290px] xl:h-[220px] flex items-center flex-col my-10 border-2 mx-4 border-black sm:w-[35%] lg:w-[30%] w-[300px] p-10 rounded-xl'>
            <h5 className='font-bold text-2xl'>Forse Reklam</h5>
            <p className='my-2 '>Web Programmer | <span className=' font-bold'>Intern</span></p>
            <p className='text-sm  opacity-40'>(July 2023 - August 2023)</p>
        </div>

        <div className='sm:h-[375px] md:h-[300px] lg:h-[290px] xl:h-[220px] flex items-center flex-col my-10 border-2 mx-4 border-black sm:w-[35%] lg:w-[30%] w-[300px] p-10 rounded-xl'>
            <h5 className='font-bold text-2xl'>Beyhan-Rıfat Çıkılıoğlu Anadolu Lisesi</h5>
            <p className='my-2 '>Math Teacher | <span className=' font-bold'>Intern</span> </p>
            <p className='text-sm  opacity-40'>(October 2023 - December 2023)</p>
        </div>
        
      </div>
    </div>
  )
}

export default Experience