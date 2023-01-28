import React from 'react'
import { Link, animateScroll as scroll,} from 'react-scroll'
import { BsFillArrowDownCircleFill } from "react-icons/bs"


const Home = () => {
  return (
  <div name='Home' className='container mx-auto w-[400px] max-msm:w-[280px]'>
    <div className='place-items-center my-64 text-white '> 
      <div className='text-center'>
        <h1 className='text-7xl max-sm:text-6xl max-msm:text-5xl'>Hi, I'm <span className='font-myname'>Davi</span></h1>
        <p className='text-lg font-semibold max-msm:text-base'>Web Developer</p>
        <br/>
        <p className='text-xl max-msm:text-lg'>Experience in web design and development knowledge, producing quality work.</p>
        <br/>
        <Link to="Contact" smooth={true} offset={120} duration={2000}><button className='flex mx-auto bg-slate-700 px-3 py-3 text-xl font-bold border border-black rounded-lg shadow-black shadow-md hover:scale-110 duration-700 max-sm:mx-auto'>Contact Me<span className='my-auto mx-2'><BsFillArrowDownCircleFill className='animate-bounce'/></span></button></Link>
      </div>
    </div>
  </div>
  )
}

export default Home