import React, { useState } from 'react';
import { pledges } from '../assets/data/data.js';
import close from '../assets/images/icon-close-modal.svg';

const BackProjects = ({ setBackProject }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handlePledgeClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className='backProjectModal fixed top-0 left-0 h-screen w-full overflow-y-scroll z-50 flex items-start justify-center pt-24'>
      <div className='bg-white p-5 rounded-md max-w-[700px] w-full'>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-lg'>Back this project</h2>
          <button onClick={() => setBackProject(false)}>
            <img src={close} alt="Close modal" className='cursor-pointer' />
          </button>
        </div>
        <p className='text-gray-400 mt-4'>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
        <form className='mt-7'>
          {pledges.map((pledge) => (
            <div
              key={pledge.id}
              onClick={() => handlePledgeClick(pledge.id)}
              className={`p-5 cursor-pointer rounded-md border-2 mt-5 ${
                selectedId === pledge.id
                  ? 'border-[#3cb4ab] bg-[#f0fdfa]'
                  : 'border-gray-300 bg-white'
              }`}
            >
              <div className='flex gap-5 items-start'>
                <input
                  type="radio"
                  className="sm:mt-2"
                  name="pledge"
                  checked={selectedId === pledge.id}
                  readOnly
                />
                <div className="flex flex-col sm:flex-row sm:gap-5 -mt-2 sm:mt-0">
                  <h3 className="text-lg font-semibold">{pledge.title}</h3>
                  {pledge.minPledge && (
                    <button className="text-[#3cb4ab] text-left font-semibold sm:grow">
                      Pledge {pledge.minPledge}
                    </button>
                  )}
                  {pledge.left !== null && (
                    <span className="hidden sm:flex sm:ml-auto items-center gap-2">
                      <h3 className="text-xl font-bold">{pledge.left}</h3>
                      <span className="text-gray-400">left</span>
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mt-2">{pledge.description}</p>
                {pledge.left !== null && (
                  <span className="flex sm:hidden items-center gap-2 mt-2">
                    <h3 className="text-xl font-bold">{pledge.left}</h3>
                    <span className="text-gray-400">left</span>
                  </span>
                )}
                {
                  selectedId === pledge.id && 
                  <div className='grid grid-cols-2 mt-5 sm:grid-cols-4 gap-5 border-t-2 border-gray-300 pt-3 items-center'>
                    <input type="text" placeholder='Enter your pledge' className='border-0 mt-2 col-span-2 p-2 text-center outline-0 text-sm'/>
                    <button className={`${pledge.minPledge === null ? 'hidden' : ''} py-3 px-5 rounded-3xl font-semibold cursor-pointer border-2 border-gray-400`}><span className='text-gray-400 font-semibold mr-1'>{pledge.minPledge !== null ? '$' : ''}</span><span>{pledge.minPledge !== null ? pledge.minPledge.slice(1, 4) : ''}</span></button>
                    <button className='bg-[#3cb4ab] hover:bg-[#157a74] text-white py-3 px-5 rounded-3xl font-semibold cursor-pointer'>Continue</button>
                  </div>
                } 
            </div>
          ))}
          {/* Disabled pledge option (0 left) */}
          <div className='relative p-5 rounded-md border-2 border-gray-300 flex gap-5 items-start mt-5'>
            <input type="radio" className='sm:mt-2' disabled />
            <div className='invalidOverlay absolute top-0 left-0 h-full w-full'></div>
            <div>
              <div className='flex gap-5'>
                <h3 className='text-lg font-semibold'>Mahogany Special Edition</h3>
                <button className='text-[#3cb4ab] font-semibold'>Pledge $200 or more</button>
                <span className='flex ml-auto items-center gap-2'>
                  <h3 className='text-xl font-bold'>0</h3>
                  <span className='text-gray-400'>left</span>
                </span>
              </div>
              <p className='text-gray-400 mt-2'>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                You'll be added to our Backer member list. Shipping is included.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BackProjects;
