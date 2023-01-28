import React,{useState} from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Tools from './Tools';



const Skills = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleButton = (index) => {
    setToggleState(index);
  }


  return (
    <div name='Skills' className='container mx-auto text-white py-32'>
        <Fade triggerOnce={true} delay={350}>
          <h1 className='text-center font-bold text-6xl max-md:text-5xl'>Skills</h1>
          <hr className='mx-auto w-[153px] my-2 border border-slate-400 max-md:w-[124px]'/>

          <div className=' flex  justify-center items-center text-center py-10 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto'>


            <div className='text-xl mx-4 font-medium hover:scale-110 duration-500 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto max-sm:py-2'>
              <button onClick={() => toggleButton(1)} className={toggleState === 1 ? 'flex bg-slate-700 px-3 py-3 text-xl  font-bold border border-black rounded-2xl shadow-black shadow-md hover:scale-105 duration-700 max-sm:mx-auto' : 'block'}>Front-End</button>
            </div>


            <div className='text-xl mx-4 font-medium hover:scale-110 duration-500 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto max-sm:py-2'>
              <button onClick={() => toggleButton(2)} className={toggleState === 2 ? 'flex bg-slate-700 px-3 py-3 text-xl  font-bold border border-black rounded-2xl shadow-black shadow-md hover:scale-105 duration-700 max-sm:mx-auto' : 'block'}>Back-End</button>
            </div>

            <div className='text-xl mx-4 font-medium hover:scale-110 duration-500 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto max-sm:py-2'>
              <button onClick={() => toggleButton(3)} className={toggleState === 3 ? 'flex bg-slate-700 px-3 py-3 text-xl  font-bold border border-black rounded-2xl shadow-black shadow-md hover:scale-105 duration-700 max-sm:mx-auto' : 'block'}>Tools</button>
            </div>


          </div>
        </Fade>


        <div className='py-14'>

          <Zoom triggerOnce={true} delay={350}>
      
            <div className={toggleState === 1 ? "grid grid-cols-4 gap-20 place-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-msm:grid-cols-1" : "hidden"}>
              <FrontEnd/>
            </div>

          </Zoom>

            <div className={toggleState === 2 ? "grid grid-cols-4 gap-20 place-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-msm:grid-cols-1" : "hidden"}>
              <BackEnd/>
            </div>

            <div className={toggleState === 3 ? "grid grid-cols-4 gap-20 place-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-msm:grid-cols-1" : "hidden"}>
              <Tools/>
            </div>


       
        </div>
      
      
    </div>
  )
}

export default Skills