import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Fade, Slide } from 'react-awesome-reveal'
import { BsGithub, BsLinkedin} from "react-icons/bs";
import { MdSend } from "react-icons/md";

const Contact = () => {


  const validationForm = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    text: yup.string().required()
  })

 

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(validationForm)  
  })


  
  const datapost = data => axios.post(`https://getform.io/f/b5462eda-a2ad-482e-a020-dee16bf92a1c`, data)
  .then(() =>{
    window.open('https://getform.io/thank-you', '_blank');
  })
  .catch(() =>{
    console.log("Something went wrong")
  })




  return (
    <div name='Contact' className='py-32 container mx-auto text-white max-msm:w-[280px]'>
      <Fade triggerOnce={true} delay={350}>
        <h1 className='text-6xl text-center font-bold max-md:text-5xl'>Contact</h1>
        <hr className='w-[220px] mx-auto my-2 border border-slate-400 max-md:w-[176px]'/>
      </Fade>
      
      <div  className='py-14 grid grid-cols-2  place-items-center max-sm:grid-cols-1 max-sm:flex max-sm:flex-col-reverse'>
     
        <Slide direction='left' delay={350} triggerOnce={true}>
        <div className=''>
          <p className='flex items-center font-medium text-2xl '><span className='px-4 py-4'><BsLinkedin className='hover:scale-125 duration-700' size={55}/></span><a  href='https://www.linkedin.com/in/davi-parma-25b2031a8' target="_blank" rel="noopener noreferrer">Davi Parma</a></p>
          <p className='flex items-center font-medium text-2xl '><span className='px-4 py-4'><BsGithub className='hover:scale-125 duration-700' size={55}/></span><a  href='https://github.com/DaviParma' target="_blank" rel="noopener noreferrer">DaviParma</a></p>
        </div>
        </Slide>


        <Slide direction='right' delay={350} triggerOnce={true}>
          <div className='max-sm:pb-20'>

            <form  method='POST' onSubmit={handleSubmit(datapost)} noValidate className='p-10 bg-slate-700 border border-black shadow-black shadow-md rounded-xl max-msm:p-7'>
              <div className='mb-6 '>
                <label for='name' className='block mb-2 text-lg font-semibold '>Name</label>
                <input name='name' {...register("name")} type='text' placeholder='Name' id='name' className='text-black block px-3 p-2.5 w-full  rounded-lg border border-black  hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-1 hover:scale-105 duration-1000' />
                <p className=' text-red-500 font-semibold'>{errors.name?.message}</p>
              </div>

              <div className='mb-6'> 
                <label for='email' className='block mb-2 text-lg font-semibold'>Email</label>
                <input name='email' {...register("email")} type='email' placeholder='Email' id='email' className='text-black block px-3  p-2.5 w-full  rounded-lg border border-black  hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-1 hover:scale-105 duration-1000' />
                <p className=' text-red-500 font-semibold'>{errors.email?.message}</p>
              </div>
        
              <div className='mb-6'>
                <label for='text' className='block mb-2 text-lg font-semibold'>Text</label>
                <textarea rows="5" cols="1" name='text' {...register("text")} placeholder='Text' id='text' className='text-black block px-3   p-2.5 w-full  rounded-lg border border-black hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-1 hover:scale-105 duration-1000' />
                <p className=' text-red-500 font-semibold'>{errors.text?.message}</p>
              </div>

              <div className='mt-12'>
              <button className='flex mx-auto bg-green-600 px-3 py-3 text-xl  font-bold border border-black rounded-lg shadow-black shadow-md hover:scale-105 duration-700 '>Send Message <span className='my-auto mx-2'><MdSend size={24}/></span></button>
              </div>
            </form>
          
          </div>
        </Slide>
       
      </div>
      
    </div>
  )
}

export default Contact