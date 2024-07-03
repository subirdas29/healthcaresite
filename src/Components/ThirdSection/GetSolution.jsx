import React from 'react';
import img1 from '../../assets/third-section-img/Rectangle 24.png'
import arrow from '../../assets/logo/Arrow-1.png';

const GetSolution = () => {
  return (
    <div className='flex flex-col lg:flex-row mx-20 justify-between'>
     <div className='w-1/2 '>
     <button className='outline outline-1 px-5 py-2 rounded rounded-full'>Who we are</button>
     <h1 className='my-6 text-4xl font-bold'>We Help To Get <p>
     Solutions</p></h1>
     <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
     </p>
     <button className='my-8 px-5 py-2 rounded-lg bg-[#FFC637] flex items-center
'><span className='mr-2'>Learn more</span> <img src={arrow} className='w-3 h-3' alt="" /></button>
     </div>
     <div className=' relative'>
        <img src={img1} alt="" />
        <div className='bg-[#343268] text-white rounded-xl py-10 px-8 absolute top-60 -left-20 right-60 '>
            <h1 className='font-medium text-2xl mb-3'>Our mission is simple</h1>
            <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
        </div>
     </div>
    </div>
  )
}

export default GetSolution
