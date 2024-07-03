import React from 'react'
import img1 from '../../assets/fourth-section-img/Rectangle 27-2.png';
import img2 from '../../assets/fourth-section-img/Rectangle 27-1.png';
import img3 from '../../assets/fourth-section-img/Rectangle 27.png';
import arrow from '../../assets/logo/Arrow-1.png';

const EmpoweringHealth = () => {
  return (
    <div className='my-20'>
      <section className='mx-20 rounded-lg p-20 bg-[#FFFFF5]
'>
	{/* <div className="container flex flex-col "> */}
		<div className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2 sm:grid-cols-2 ">
			<div className='w-10/12'>
            <button className='outline outline-1 px-5 py-2 rounded rounded-full'>Service</button>
            <h1 className='my-6 text-4xl font-bold'>Empowering Health,  <p>
            Enriching Lives</p></h1>
            <p>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
            <button className='my-8 px-5 py-2 rounded-lg bg-[#FFC637] flex items-center
'><span className='mr-2 font-semibold'>Appointment</span> <img src={arrow} className='w-3 h-3' alt="" /></button>
            </div>
			
            <div className='relative'>
           <div >
           <img className="w-full rounded-lg dark:bg-gray-500 " src={img1} />
           </div>
            <div className='bg-[#343268] text-white rounded-xl py-10 px-8 absolute top-60 -left-20 right-60 '>
            <h1 className='font-medium text-2xl mb-3'>Advanced Technology</h1>
            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
            <img src={arrow} alt="" />
            
        </div>
            </div>
           
			
        <div>
        <img className="w-full rounded-lg dark:bg-gray-500 " src={img2} />
        </div>
        
    
		
           <div>
           <img className="w-full rounded-lg dark:bg-gray-500 " src={img3} />
           </div>
            
		</div>
	{/* </div> */}
</section>
    </div>
  )
}

export default EmpoweringHealth
