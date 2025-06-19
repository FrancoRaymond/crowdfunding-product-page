import React from 'react'

const About = () => {
  return (
    <div className='bg-white rounded-md sm:px-6 flex flex-col gap-3 w-[90%] mx-auto p-4 sm:p-6 mt-5'>
        <h2 className='font-semibold text-xl'>About this project</h2>
        <p className='text-gray-400'>The mastercraft Bamboo Monitor Riser is a sturdy and stylish plaftform that elevates your screen to a more comfortable viewing height. Placing your monitor at eve level has
            he potential to improve your posture and make you more comfortable while at work,
            elping you stay focused on the task at hand. <br/><br/>
            eaturing artisan craftsmanship, the simplicity of design creates extra desk space below
            our com uterto allow note ads, ens,and USB sticks to be stored under the stand.
        </p>
        <div className='py-7 px-5 border-2 border-gray-300 rounded-md flex flex-col gap-5'>
            <div className='flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
                <h3 className='font-bold'>Bamboo Stand</h3>
                <button className='text-[#3cb4ab] font-semibold'>Pledge $25 or more</button>
            </div>
            <p className='text-gray-400'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
            <div className='flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
                <span className='flex items-center gap-2'><h3 className='text-xl font-bold'>101</h3><span className='text-gray-400'>left</span></span>
                <button className='bg-[#3cb4ab] text-white py-3 mt-3 sm:mt-0 px-5 rounded-3xl font-semibold cursor-pointer'>Select Reward</button>
            </div>
        </div>
        <div className='py-7 px-5 border-2 border-gray-300 rounded-md flex flex-col gap-5'>
            <div className='flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
                <h3 className='font-bold'>Black edition Stand</h3>
                <button className='text-[#3cb4ab] font-semibold'>Pledge $75 or more</button>
            </div>
            <p className='text-gray-400'>You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
            <div className='flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
                <span className='flex items-center gap-2'><h3 className='text-xl font-bold'>64</h3><span className='text-gray-400'>left</span></span>
                <button className='bg-[#3cb4ab] text-white mt-3 sm:mt-0 py-3 px-5 rounded-3xl font-semibold cursor-pointer'>Select Reward</button>
            </div>
        </div>
        <div className='py-7 px-5 border-2 border-gray-300 rounded-md flex flex-col gap-5 relative'>
            <div className='invalidOverlay absolute top-0 left-0 h-full w-full'></div>
            <div className='flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
                <h3 className='font-bold'>Mahogany Special Edition</h3>
                <button className='text-[#3cb4ab] font-semibold'>Pledge $200 or more</button>
            </div>
            <p className='text-gray-400'>You get two Special Edition Mahogany stands. a Backer T-Shirt, and a personal thank vou. You'll be added to our Backer member list. Shipping is included.</p>
            <div className='flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
                <span className='flex items-center gap-2'><h3 className='text-xl font-bold'>0</h3><span className='text-gray-400'>left</span></span>
                <button className='bg-black text-white py-3 px-5 mt-3 sm:mt-0 rounded-3xl font-semibold cursor-pointer'>Select Reward</button>
            </div>
        </div>
    </div>
  )
}

export default About;
