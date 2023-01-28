import React from 'react'
import projects from "../json/projects.json"

const Projects = () => {
  return projects.map((x) => (
    <div className='py-2 rounded-lg border border-black shadow-black shadow-lg hover:scale-105 duration-700'>
      <div>
        <p className='text-center text-3xl font-semibold py-3'>{x.name}</p>
        <img src={x.img}/>
        <div className='flex py-4 justify-around items-center'>
          <a href={x.demo} target="_blank" rel="noopener noreferrer"><button className=' bg-slate-700 px-3 py-3 text-2xl  font-bold border border-black rounded-lg shadow-black shadow-md hover:scale-110 duration-700 max-sm:mx-auto'>Demo</button></a>
          <a href={x.code} target="_blank" rel="noopener noreferrer"><button className=' bg-slate-700 px-3 py-3 text-2xl  font-bold border border-black rounded-lg shadow-black shadow-md hover:scale-110 duration-700 max-sm:mx-auto'>Code</button></a>
        </div>
      </div>
    </div>
  )
  )
}

export default Projects