import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Zoom } from 'react-awesome-reveal'

const Footer = () => {
  return (
    
    <footer className='mx-auto py-5'>
        <Zoom  triggerOnce={true}>
          <div className='text-lg text-center text-[#5C6574] font-semibold'>
            <p>©{(new Date().getFullYear())} Davi Parma All rights reserved</p>
          </div>

          <div className='flex justify-center items-center py-4 text-white'>
            <a href='https://www.linkedin.com/in/davi-parma-25b2031a8' target="_blank" rel="noopener noreferrer"><BsLinkedin size={26} className='cursor-pointer mx-2 hover:scale-125 duration-700'/></a>
            <a href='https://github.com/DaviParma' target="_blank" rel="noopener noreferrer"><BsGithub size={26} className='cursor-pointer mx-2 hover:scale-125 duration-700'/></a>
          </div>
        </Zoom>
    </footer>
  )
}

export default Footer