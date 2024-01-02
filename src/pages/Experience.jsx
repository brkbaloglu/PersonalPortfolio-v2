import React from 'react'
const Experience = () => {

  const experienceItems = [{
    experienceId : 1,
    experienceCompanyName : "Forse Reklam",
    experiencePosition : "Web Programmer",
    experienceIntern : 1,
    experienceDateRange : "July 2023 - August 2023"
  },{
    experienceId : 2,
    experienceCompanyName : "Beyhan-Rıfat Çıkılıoğlu Anadolu Lisesi",
    experiencePosition : "Math Teacher",
    experienceIntern : 1,
    experienceDateRange : "October 2023 - December 2023"
  }]

  return (
    <div className='my-20 mx-20' id='experience'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Experience</span></h3>
      <div className='my-10 lg:mx-20 flex items-center flex-col sm:flex-row'>
        
        {
          experienceItems.map((item) => (
            <div key={item.experienceId} className='sm:h-[375px] md:h-[300px] lg:h-[290px] xl:h-[220px] flex items-center flex-col my-10 border-2 mx-4 border-black sm:w-[35%] lg:w-[30%] w-[300px] p-10 rounded-xl'>
              <h5 className='font-bold text-2xl'>{item.experienceCompanyName}</h5>
              <p className='my-2 '>{item.experiencePosition}  <span className=''>{item.experienceIntern === 1 ? "| Intern" : ""}</span></p>
              <p className='text-sm  opacity-40'>({item.experienceDateRange})</p>
            </div>
          ))
        }

        
        
      </div>
    </div>
  )
}

export default Experience