import React from 'react'
import mcLogo from '../assets/images/logo-mastercraft.svg'
import bookmark from '../assets/images/icon-bookmark.svg'

const BodyHeader = () => {
  return (
    <div>
        <div className='bg-white rounded-md px-3 sm:px-6 flex flex-col gap-3 w-[90%] mx-auto pb-7'>
            <img src={mcLogo} alt="" className='size-12 mx-auto -mt-7'/>
            <h1 className='text-center font-semibold text-2xl'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-center text-gray-500'>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='flex items-center justify-between mt-6'>
                <button className='bg-[#3cb4ab] text-white py-3 px-5 rounded-3xl font-semibold cursor-pointer'>Back this project</button>
                <div className='flex items-center bg-gray-200 rounded-4xl'>
                  <button><img src={bookmark} alt="" className='size-12 cursor-pointer'/></button>
                  <span className='mr-5 font-semibold text-gray-600 ml-2 hidden sm:block'>bookmark</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BodyHeader;