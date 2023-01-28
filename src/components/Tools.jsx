import React from 'react'
import tools from "../json/tools.json"

const Tools = () => {
  return tools.map((x) => (
    <div className='py-2 rounded-lg border border-black shadow-black shadow-lg hover:scale-105 duration-700'>
      <div>
        <img className='max-md:w-[168px] max-msm:w-[135px]' src={x.img}/>
        <p className='text-center break-all font-semibold text-xl max-msm:text-sm'>{x.name}</p>
      </div>
    </div>
  )
  )
}

export default Tools