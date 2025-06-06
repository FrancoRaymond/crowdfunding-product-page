import React from 'react'

const Counters = () => {
  return (
    <div className='bg-white rounded-md mt-5 py-7'>
        <div className='flex gap-10'>
            <div>
                <h3 className='font-bold text-2xl'>$89,914</h3>
                <span className='text-gray-500 text-sm font-semibold'>of $100,00 backed</span>
            </div>
            <div>
                <h3 className='font-bold text-2xl'>5,007</h3>
                <span className='text-gray-500 text-sm font-semibold'>total backers</span>
            </div>
            <div>
                <h3 className='font-bold text-2xl'>56</h3>
                <span className='text-gray-500 text-sm font-semibold'>days left</span>
            </div>
        </div>
        <div>
            <div></div>
        </div>
        
    </div>
  )
}

export default Counters;
