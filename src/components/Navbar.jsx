import React,{useState} from 'react'
import { Link, animateScroll as scroll,} from 'react-scroll'
import { MenuIcon, XIcon} from '@heroicons/react/outline';
import { BsGithub, BsLinkedin } from "react-icons/bs";



const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)


  return (
    <nav  className='w-full mx-auto text-white py-2'>
        <div className='container mx-auto flex items-center justify-between py-4'>
            <h1 className='flex text-5xl cursor-pointer font-myname hover:scale-110 duration-700'>Davi</h1>

            <ul className='flex text-lg font-semibold   max-md:hidden'>
                <li className='px-3 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link to="About" smooth={true} offset={-105} duration={1300}>About</Link></li>
                <li className='px-3 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link to="Skills" smooth={true} offset={105}  duration={1300}>Skills</Link></li>
                <li className='px-3 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link to="Portfolio" smooth={true} offset={105}  duration={1300}>Portfolio</Link></li>
                <li className='px-3 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link to="Contact" smooth={true} offset={105}  duration={1300}>Contact</Link></li>
            </ul>

            <ul className='flex max-md:hidden'>
              <a href='https://www.linkedin.com/in/davi-parma-25b2031a8' target="_blank" rel="noopener noreferrer"><li className='cursor-pointer px-2  hover:scale-125 duration-700'><BsLinkedin size={24}/></li></a>
              <a href='https://github.com/DaviParma' target="_blank" rel="noopener noreferrer"><li className='cursor-pointer px-2  hover:scale-125 duration-700'><BsGithub size={24}/></li></a>
            </ul>



                <div className='md:hidden mr-4 text-white' onClick={handleClick}>
                  {!nav ? <MenuIcon className='w-10' /> :  <XIcon className='w-10' /> }   
                </div>

               
                   </div>   

                  <div className='md:hidden'>
                      <div className={!nav ? 'hidden' : 'mx-auto absolute   w-full px-8 pb-1 text-center '}>
                          <ul className='mb-5 text-xl font-medium'>
                            <li className='my-4 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link onClick={handleClose} to="About" smooth={true} offset={-105} duration={2000}>About</Link></li>
                            <li className='my-4 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link onClick={handleClose} to="Skills" smooth={true} offset={-150}  duration={2000}>Skills</Link></li>
                            <li className='my-4 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link onClick={handleClose} to="Portfolio" smooth={true} offset={-150} duration={2000}>Portfolio</Link></li>
                            <li className='my-4 cursor-pointer hover:scale-110 duration-700 hover:underline underline-offset-4'><Link onClick={handleClose} to="Contact" smooth={true} offset={-150}  duration={2000}>Contact</Link></li>
                          </ul>

                          <ul className='flex justify-center'>
                            <a href='https://www.linkedin.com/in/davi-parma-25b2031a8' target="_blank" rel="noopener noreferrer"><li className='cursor-pointer px-2  hover:scale-125 duration-700'><BsLinkedin size={24}/></li></a>
                            <a href='https://github.com/DaviParma' target="_blank" rel="noopener noreferrer"><li className='cursor-pointer px-2  hover:scale-125 duration-700'><BsGithub size={24}/></li></a>
                          </ul>

                          <hr className='border my-6'/>
                       
                  </div>    

        </div>
    </nav>
  )
}

export default Navbar