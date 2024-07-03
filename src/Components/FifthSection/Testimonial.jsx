import React from 'react'
import icon1 from '../../assets/Fifth-section-img/Ellipse 10.png'
import icon2 from '../../assets/Fifth-section-img/Ellipse 11.png'
import icon3 from '../../assets/Fifth-section-img/Ellipse 12.png'
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className='my-20 mx-20'>
      <div>
      <button className='outline outline-1 px-5 py-2 rounded-full'>Testimonial</button>
      <h1 className='text-4xl font-semibold my-6'>What they say about us</h1>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        <div className='p-10 bg-[#FFFFF5] rounded-lg'>
            <h1 className='text-2xl font-medium'>Expertise and Compassion <br /> Combined</h1>
            <p className='my-4'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
           
  <div className='flex gap-4 ' >
  <div className="w-10 rounded-full">
    <img src={icon1} />
  </div>
  <div>
  <p className='font-semibold '>Sarah D, <span className='text-neutral-800 font-thin'>IT Professional</span> </p>
  <p className='flex gap-1 '>
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  </p>
  </div>
  </div>

        </div>
        <div className='p-10 bg-[#FFFFF5] rounded-lg'>
            <h1 className='text-2xl font-medium'>Life-Saving Care, Life-Changing  <br /> Experience</h1>
            <p className='my-4'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
           
  <div className='flex gap-4 ' >
  <div className="w-10 rounded-full">
    <img src={icon2} />
  </div>
  <div>
  <p className='font-semibold'>Michael R, <span className='text-neutral-800 font-thin'>Business Executive</span> </p>
  <p className='flex gap-1'>
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />

  </p>
  </div>
  </div>

        </div>
        <div className='p-10 bg-[#FFFFF5] rounded-lg'>
            <h1 className='text-2xl font-medium'>A Partner in Health and
            <br /> Wellness</h1>
            <p className='my-4'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
           
  <div className='flex gap-4 ' >
  <div className="w-10 rounded-full">
    <img src={icon3} />
  </div>
  <div>
  <p className='font-semibold'>David S, <span className='text-neutral-800 font-thin'>Lawyer</span> </p>
  <p className='flex gap-1 '>
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  <FaStar className='text-[#FFE03D]' />
  </p>
  </div>
  </div>

        </div>
      </div>

      <div className='flex gap-2 justify-center my-6'>
        <div className='bg-[#020043] opacity-10 w-3 h-3 rounded-full'> </div>
        <div className='bg-[#FFC637] w-3 h-3 rounded-full'> </div>
        <div className='bg-[#020043] opacity-10 w-3 h-3 rounded-full'> </div>
      </div>
    </div>
  )
}

export default Testimonial
