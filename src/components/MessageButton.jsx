import React from 'react'
import { BiSolidMessageRoundedDetail } from 'react-icons/bi'
import { Link } from 'react-scroll'

const MessageButton = () => {
  return (
    <div>
        <Link to='contact' smooth={true} spy={true} offset={-200}>
        <div className="fixed bottom-5 sm:right-8 hidden right-4 z-[999] cursor-pointer hover:bg-blue-700 hover:border-white hover:text-white duration-200 text-blue-700 text-4xl bg-white border-4 border-blue-700 w-16 h-16 lg:flex items-center justify-center rounded-full animate-bounce">
          <BiSolidMessageRoundedDetail/>
        </div>
      </Link>
    </div>
  )
}

export default MessageButton