import React from 'react'
import project1 from '../components/pics/Project-1.png'
import project2 from '../components/pics/Project-2.png'
import project3 from '../components/pics/Project-3.png'
import project4 from '../components/pics/Project-4.png'

const Projects = () => {
  return (
    <div className='space-y-5 pt-10'>
      <h1 className='font-bold text-4xl sm:text-5x1 md:text-6xl text-center'>
        <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>My Projects</span>

      </h1>
      <h3 className='font-semibold text-gray-500 text-xl text-center'>
        Here are some of the simple Projects I've made 
      </h3>
      <div className='flex flex-col items-center justify-center space-y-5'>
        <div className='sm:flex gap-5 space-y-5 sm:space-y-0'>
          <div className='flex flex-col items-baseline text-left gap-2 max-w[300px] border-b-gray-600 rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
            <img src={project1} alt="" className='w-[300px] rounded-md' />
            <h3 className='text-lg font-bold'>Project 1</h3>
          </div>
          <div className='sm:flex gap-5 space-y-5 sm:space-y-0'>
          <div className='flex flex-col items-baseline text-left gap-2 max-w[300px] border-b-gray-600 rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
            <img src={project2} alt="" className='w-[300px] rounded-md' />
            <h3 className='text-lg font-bold'>Project 2</h3>
          </div>
        </div>
        </div>
        <div className='sm:flex gap-5 space-y-5 sm:space-y-0'>
          <div className='flex flex-col items-baseline text-left gap-2 max-w[300px] border-b-gray-600 rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
            <img src={project3} alt="" className='w-[300px] rounded-md' />
            <h3 className='text-lg font-bold'>Project 3</h3>
          </div>
          <div className='sm:flex gap-5 space-y-5 sm:space-y-0'>
          <div className='flex flex-col items-baseline text-left gap-2 max-w[300px] border-b-gray-600 rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
            <img src={project4} alt="" className='w-[300px] rounded-md' />
            <h3 className='text-lg font-bold'>Project 4</h3>
          </div>
        </div>
        </div>
        
      </div>
      
     
    </div>
  )
}

export default Projects
