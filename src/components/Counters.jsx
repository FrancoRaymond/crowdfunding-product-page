import React from 'react'

const Counters = () => {
  return (
    <div className='bg-white rounded-md sm:px-6 flex flex-col gap-3 w-[90%] mx-auto p-4 sm:p-6 mt-5'>
        <div className='flex flex-col sm:flex-row items-center text-center sm:text-left'>
            <div className='py-5 sm:pr-10 sm:py-0 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300'>
                <h3 className='font-bold text-2xl'>$89,914</h3>
                <span className='text-gray-500 text-sm font-semibold'>of $100,00 backed</span>
            </div>
            <div className='py-5 sm:pl-10 sm:py-0 sm:pr-16 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300'>
                <h3 className='font-bold text-2xl'>5,007</h3>
                <span className='text-gray-500 text-sm font-semibold'>total backers</span>
            </div>
            <div className='py-5 sm:py-0 sm:pl-10'>
                <h3 className='font-bold text-2xl'>56</h3>
                <span className='text-gray-500 text-sm font-semibold'>days left</span>
            </div>
        </div>
        <div className='mt-5 h-2.5 overflow-clip rounded-3xl w-full bg-gray-200'>
            <div className='bg-[#3cb4ab] w-[80%] rounded-3xl h-full'></div>
        </div>
    </div>
  )
}

export default Counters;
