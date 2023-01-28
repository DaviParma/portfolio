import React from 'react'
import frontend from "../json/frontend.json"

const FrontEnd = () => {
  return frontend.map((x) => (
    <div className='py-2 rounded-lg border border-black shadow-black shadow-lg hover:scale-105 duration-700'>
      <div>
        <img className='max-md:w-[168px] max-msm:w-[124px]' src={x.img}/>
        <p className='text-center font-semibold text-xl'>{x.name}</p>
      </div>
    </div>
  )
  )
}

export default FrontEnd