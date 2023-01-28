import React from 'react'
import {Fade} from 'react-awesome-reveal'
import {MdDownload} from "react-icons/md"



const davi_about = "davi-about.png"

const About = () => {
  return (
    <div name='About' className='container mx-auto w-[779px] text-white max-msm:w-[280px]'>
      
      <div className='py-32 grid grid-cols-2 gap-32  place-items-center max-md:gap-28 max-sm:grid-cols-1 max-sm:py-44'>
        <Fade delay={350} triggerOnce={true}>
          <div>
            <img className='w-[400px] rounded-lg border border-black shadow-black shadow-lg hover:scale-105 duration-700 max-sm:hidden' src={davi_about} />
            <h1 className='text-6xl font-bold max-md:text-5xl sm:hidden'>About Me</h1>
            <hr className='w-[265px] my-2 border border-slate-400 max-md:w-[214px] sm:hidden '/>
          </div>
      


      
          <div>
            <h1  className='text-6xl font-bold max-md:text-5xl max-sm:hidden'>About Me</h1>
            <hr className='w-[265px] my-2 border border-slate-400 max-md:w-[214px] max-sm:hidden'/>
            <img className='w-[250px] rounded-lg border border-black shadow-black shadow-lg hover:scale-105 duration-700 sm:hidden max-sm:mx-auto' src={davi_about} />
            <p className='text-lg pt-8 pb-6 max-sm:text-center'>I am a highly motivated, trustworthy, and diligent individual who excels in both collaborative and individual settings. I possess strong communication and problem-solving skills and am able to adapt to challenging situations with ease. I am fully dedicated to achieving success in all tasks assigned to me.</p>
            <a href="Davi_Parma_CV.pdf" download><button className='flex bg-slate-700 px-3 py-3 text-xl  font-bold border border-black rounded-lg shadow-black shadow-md hover:scale-105 duration-700 max-sm:mx-auto'>Download CV <span className='my-auto mx-2'><MdDownload size={24}/></span></button></a>
          </div>

        </Fade> 
      </div>
      
    </div>
  )
}

export default About