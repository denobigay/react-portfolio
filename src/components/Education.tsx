import React from 'react'
import edulogo from '../components/pics/education-1.png'

const Education = () => {
  return (
    <div className='space-y-3'>
      <h2 className='text-xl font-bold'>Education</h2>
      <div className='flex items-center gap-5'>
        <img src={edulogo} alt="" className='w-14 border-s-white  rounded-full'/>
        <div className='flex items-center justify-between flex-1'>
          <div className='flex flex-col'>
            <h3 className='font-semibold'>Filamer Christian University</h3>
            <span className='font-medium text-gray-500'>BSIT</span>

          </div>
          <div className=' font-medium text-gray-400'> 2022 - Present

          </div>

        </div>
      </div>
      </div>
  )
}

export default Education
