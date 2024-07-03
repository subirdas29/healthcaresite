import React from 'react';
import logo from '../../assets/Seventh-section-img/Group 1.png';
import arrow2 from '../../assets/logo/Arrow-1.png';
import arrow from '../../assets/fourth-section-img/Arrow 2.png';

const Discount = () => {
  return (
    <div className='mx-20 my-28'>
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url(https://i.ibb.co/vk5T9rQ/Rectangle-32.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020043] to-[#020043]/30"></div>
        <div className="relative z-10 text-neutral-content text-left p-14 flex justify-left items-center top-20">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Get Your
              <p className='my-4'>First Appointment</p>
              <p>at 50% Off!</p>
            </h1>
          
            <div className='flex gap-4 mt-8'>
              <button className='px-5 py-3 rounded-lg bg-[#FFC637] flex items-center'>
                <span className='mr-2 font-semibold text-black'>Appointment</span> 
                <img src={arrow2} className='w-3 h-3' alt="" />
              </button>
              <button className="outline outline-1 outline-offset-2 px-5 py-1 rounded mr-20 flex items-center">
                <p className='mr-2'>Learn More</p>
                <img src={arrow} className='w-3 h-3' alt="" />
              </button>
            </div>
          </div>
          <div className='absolute right-20 top-0'>
            <img src={logo} alt="" className='ml-20' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
