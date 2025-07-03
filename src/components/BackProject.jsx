import React from 'react'
import close from '../assets/images/icon-close-modal.svg'

const BackProjects = ({setBackProject}) => {
  return (
    <div className='backProjectModal fixed top-0 left-0 h-screen w-full overflow-y-scroll  z-50 flex items-center justify-center'>
      <div className='bg-white p-5 rounded-md max-w-[700px] w-full mt-24'>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-lg'>Back this project</h2>
          <button onClick={() => setBackProject(false)}><img src={close} alt="" className='cursor-pointer'/></button>
        </div>
        <p className='text-gray-400 mt-4'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <form action="" className='mt-7'>
          <div className='p-5 rounded-md border-2 border-gray-300 flex gap-5 items-start'>
            <input type="radio" className='sm:mt-2'/>
            <div>
              <div>
                <h3 className='text-lg font-semibold'>Pledge with no reward</h3>
              </div>
              <p className='text-gray-400 mt-2'>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
            </div>
          </div>
          <div className='p-5 rounded-md border-2 border-gray-300 flex gap-5 items-start mt-5'>
            <input type="radio" className='sm:mt-2'/>
            <div>
              <div className='flex gap-5'>
                <h3 className='text-lg font-semibold'>Bamboo stand</h3>
                <button className='text-[#3cb4ab] font-semibold'>Pledge $25 or more</button>
                <span className='flex  ml-auto items-center gap-2'><h3 className='text-xl font-bold'>101</h3><span className='text-gray-400'>left</span></span>
              </div>
              <p className='text-gray-400 mt-2'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
            </div>
          </div>
          <div className='p-5 rounded-md border-2 border-gray-300 flex gap-5 items-start mt-5'>
            <input type="radio" className='sm:mt-2'/>
            <div>
              <div className='flex gap-5'>
                <h3 className='text-lg font-semibold'>Black edition stand</h3>
                <button className='text-[#3cb4ab] font-semibold'>Pledge $75 or more</button>
                <span className='flex  ml-auto items-center gap-2'><h3 className='text-xl font-bold'>64</h3><span className='text-gray-400'>left</span></span>
              </div>
              <p className='text-gray-400 mt-2'>You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
            </div>
          </div>
          <div className='relative p-5 rounded-md border-2 border-gray-300 flex gap-5 items-start mt-5'>
            <input type="radio" className='sm:mt-2'/>
            <div className='invalidOverlay absolute top-0 left-0 h-full w-full'></div>
            <div>
              <div className='flex gap-5'>
                <h3 className='text-lg font-semibold'>Bamboo stand</h3>
                <button className='text-[#3cb4ab] font-semibold'>Pledge $200 or more</button>
                <span className='flex  ml-auto items-center gap-2'><h3 className='text-xl font-bold'>0</h3><span className='text-gray-400'>left</span></span>
              </div>
              <p className='text-gray-400 mt-2'>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BackProjects;
