import React from 'react';
import img1 from '../../assets/Second-section-img/Group 12.png'
import img2 from '../../assets/Second-section-img/Group.png'
import img3 from '../../assets/Second-section-img/contract.png'
import img4 from '../../assets/Second-section-img/Group 7.png'
import img5 from '../../assets/Second-section-img/Group5.png'
import icon from '../../assets/Second-section-img/fi-sr-star.png'

const CompreshensiveCare = () => {
  return (
    <div className='my-28 mx-20'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='bg-[#bfe378] rounded-badge px-6 row-span-2 text-left flex flex-col justify-center'>
            <h1 className='font-semibold text-4xl'>90%</h1>
            <p className='my-4 '>Patient satisfaction rate, reflecting our commitment.</p>
           <div className='flex justify-center'>
           <img src={img1}  alt="" />
           </div>
        </div>
        <div className='col-span-3'>
            <h1 className='text-center font-semibold text-5xl'>Comprehensive Care <br /> for Every Patient</h1>
        </div>
        <div className='bg-[#bfe378] rounded-badge px-6 row-span-2 flex flex-col justify-center'>
        <h1 className='font-semibold text-4xl'>50+</h1>
        <p className='my-4'>Free lession video 
        for patient.</p>
        <div className='flex justify-center'>
            <img src={img2} alt="" />
        </div>
        </div>
        <div className='bg-[#bfe378] rounded-badge p-10'>
        <h1 className='font-semibold text-4xl'>500+</h1>
        <p className='my-4'>Board-certified doctors</p>
        <div className='flex justify-end'>
            <img src={img3} alt="" />
        </div>
        </div>
        <div className='bg-[#bfe378] rounded-badge p-10'>
       <div className='flex gap-4'>
       <h1 className='font-semibold text-4xl'>4.8 </h1>
       <img src={icon} className='w-10' alt="" />
       </div>
        <p className='my-4'>Over 20,000 Patient</p>
        <div>
            <img src={img4} alt="" />
        </div>
        </div>
        <div className='bg-[#bfe378] rounded-badge p-10'>
        <h1 className='font-semibold text-4xl'>$5000</h1>
        <p className='my-4'>Money spend
        for poor patient</p>
        <div className='flex justify-end'>
            <img src={img5} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default CompreshensiveCare
