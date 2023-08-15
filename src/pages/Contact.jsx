import React from 'react'

function Contact() {
  return (
    <div className='px-20 py-10 bg-black text-white' id='contact'>
      <h3 className='text text-white font-bold lg:text-6xl text-4xl text-center my-10'>Contact <span className='border-b-8 border-white'>Me</span></h3>
      
      <form action="https://getform.io/f/ab5d0f54-d35d-41ea-b82d-314bddf6991d" method='POST' className='flex items-center justify-center flex-col'>
        <input type="text" placeholder='Enter your name' className='lg:w-[500px] w-[200px] border-2 p-2 border-black mb-4 rounded-xl text-black placeholder:text-black' name="name" id="" />
        <input type="email" placeholder='Enter your email' className='lg:w-[500px] w-[200px] border-2 p-2 border-black mb-4 rounded-xl text-black placeholder:text-black' name="email" id="" />
        <input type="number" placeholder='Enter your number' className='lg:w-[500px] w-[200px] border-2 p-2 border-black mb-4 rounded-xl text-black placeholder:text-black' name="number" id="" />
        <textarea name="message" id="" placeholder='Enter your message' className='lg:w-[500px] w-[200px] border-2 p-2 border-black mb-4 rounded-xl text-black placeholder:text-black resize-none' cols="30" rows="10"></textarea>
        <button type="submit" className='text-white border-2 border-white py-2 px-6 rounded-xl hover:bg-white hover:text-black'>Submit</button>
      </form>
    </div>
  )
}

export default Contact