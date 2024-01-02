import React from 'react'
import {RiPencilFill} from 'react-icons/ri'
const Exam = () => {

  const examScores = [{
    examId : 1,
    examName : "ALES",
    examScore : "82,81",
    examRank : "6,361"
  }]

  return (
    <div className='my-20 mx-20' id='exam'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center'>My <span className='border-b-8 border-black'>Exam Results</span></h3>
      <div className='my-10 lg:mx-20 '>
        {
          examScores.map((item) => (
            <div key={item.examId} className='flex items-center'>
            <RiPencilFill size={30} className='mr-4 hidden lg:flex'/>
              <div className='my-4'>
                <h5 className='font-bold md:text-2xl text-md'>{item.examName}</h5>
                <p className='text-md text-black opacity-70'>Score: {item.examScore}</p>
                <p className='text-sm text-black opacity-50'>My Rank: {item.examRank}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Exam