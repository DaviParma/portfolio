import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import Projects from './Projects'

const Portfolio = () => {
  return (
    <div name='Portfolio' className='container mx-auto text-white py-32'>
        <Fade triggerOnce={true} delay={350}>
          <h1 className='text-center font-bold text-6xl max-md:text-5xl'>Portfolio</h1>
          <hr className='mx-auto w-[245px] my-2 border border-slate-400 max-md:w-[200px]'/>
        </Fade>


      <div className='py-14'>

        <Slide direction='up' triggerOnce={true} delay={200}>
      
          <div className="grid grid-cols-2 gap-10 place-items-center max-lg:grid-cols-1">
            <Projects/>
          </div>

        </Slide>

      </div>
      
      
    </div>
  )
}

export default Portfolio