import React from 'react'
import img1 from '../../assets/fourth-section-img/Rectangle 27-2.png';
import img2 from '../../assets/fourth-section-img/Rectangle 27-1.png';
import img3 from '../../assets/fourth-section-img/Rectangle 27.png';
import arrow from '../../assets/fourth-section-img/Arrow 2.png';
import arrow2 from '../../assets/logo/Arrow-1.png';

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
'><span className='mr-2 font-semibold'>Appointment</span> <img src={arrow2} className='w-3 h-3' alt="" /></button>
            </div>
			
            <div className='relative'>
           <div >
           <img className="w-full rounded-lg dark:bg-gray-500 " src={img1} />
           </div>
            <div className='bg-[#343268] text-white rounded-xl py-10 px-8 absolute bottom-10 left-10 right-40 opacity-85'>
           <div >
           <h1 className='font-medium text-2xl mb- '>Advanced Technology</h1>
            <div className='flex items-end '>
                <div>
            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
            </div>
            
           
            <img className='bg-[#FFC637] ml-2 rounded-full p-4' src={arrow} alt="" />
           
           </div>
           </div>
            
        </div>
            </div>
           
			
        <div>
        <div className='relative'>
           <div >
           <img className="w-full rounded-lg dark:bg-gray-500 " src={img2} />
           </div>
            <div className='bg-[#343268] text-white rounded-xl py-10 px-8 absolute bottom-10 left-10 right-40 opacity-85'>
           <div >
           <h1 className='font-medium text-2xl mb- '>Online Doctor Meet</h1>
            <div className='flex items-end '>
                <div>
            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
            </div>
            
           
            <img className='bg-[#FFC637] ml-2 rounded-full p-4' src={arrow} alt="" />
           
           </div>
           </div>
            
        </div>
            </div>
        </div>
        
    
		
           <div>
           <div className='relative'>
           <div >
           <img className="w-full rounded-lg dark:bg-gray-500 " src={img3} />
           </div>
            <div className='bg-[#343268] text-white rounded-xl py-10 px-8 absolute bottom-10 left-10 right-40 opacity-85'>
           <div >
           <h1 className='font-medium text-2xl mb- '>Consultancy your health</h1>
            <div className='flex items-end '>
                <div>
            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
            </div>
            
           
            <img className='bg-[#FFC637] ml-2 rounded-full p-4' src={arrow} alt="" />
           
           </div>
           </div>
            
        </div>
            </div>
           </div>
            
		</div>
	{/* </div> */}
</section>
    </div>
  )
}

export default EmpoweringHealth
