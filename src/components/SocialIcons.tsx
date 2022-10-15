import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const SocialIcons = () => {
  return (
  <>
      {/* Social icons */}
      <div className=' lg:flex fixed flex-col top-[20%] left-0 z-50'>
        <ul>
          <li className='w-[160px] h-[60px] flex pr-2 pl-4 justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/adem-erbas'
              target='_blank' rel="noreferrer"
            >
              Linkedin <FaLinkedin size={40} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex pr-2 pl-4 justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Adem54?tab=repositories'
              target='_blank' rel="noreferrer"
            >
              Github <FaGithub size={40} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex pr-2 pl-4 justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:adem5434e@gmail.com'
              target='_blank' rel="noreferrer"

            >
              Email <HiOutlineMail size={40} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between pr-2 pl-4 items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1S9Ve9tEE2AAN3MZioxZyiz_qI5y8OpWR/view?usp=sharing'
              target='_blank' rel="noreferrer"

            >
              Resume <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>
  </>
  )
}

export default SocialIcons
