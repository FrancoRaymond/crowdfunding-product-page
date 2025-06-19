import React from 'react'
import iconCheck from '../assets/images/icon-check.svg'

const ConfirmationModal = () => {
  return (
    <div className='confirmModal fixed flex justify-center items-center top-0 left-0 h-screen w-full bg-black z-50 '>
      <div className='max-w-[350px] bg-white px-5 py-10 text-center rounded-md flex flex-col items-center gap-7'>
        <img src={iconCheck} alt="" className='size-16'/>
        <h2 className='text-2xl font-bold'>Thanks for your support!</h2>
        <p className='text-gray-400'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
      <button className='bg-[#3cb4ab] text-white py-3 px-5 rounded-3xl font-semibold cursor-pointer'>Got it!</button>
      </div>
    </div>
  )
}

export default ConfirmationModal;
