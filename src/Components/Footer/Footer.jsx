import React from 'react'
import logo from '../../assets/Seventh-section-img/Group 1.png';
import { FaFacebook,FaInstagram  } from "react-icons/fa6";

const Footer = () => {
  return (
   <div className='bg-[#020043] p-20 text-white'>
     <img src={logo} alt="" />
    <div className='grid grid-cols-4 '>
      <div>
        
        <p><p className='my-6'>123 Main Street Anytown, USA <br/> Postal Code: 12345</p>Support: support@oyolloo.com <br />
(Available : 10:00am to 07:00pm)</p>
      </div>
      <div className='my-6 '>
        <p>Home</p>
        <p className='my-4'>About Us</p>
        <p className='mb-4'>Success Page</p>
        <p>Terms And Condition</p>
      </div>
      <div className='my-6 '>
        <p>Services</p>
        <p className='my-4'>Scheduling</p>
        <p className='mb-4'>Contact Use</p>
        <p>Patient Portal</p>
      </div>
      <div className='my-6 '>
        
        <p className='my-4'>Follow Us</p>
        <div>
        <FaFacebook />
        <FaInstagram />
        </div>
        <p className='mt-4'>@Docplus 2024</p>
      </div>
    </div>
   </div>
  )
}

export default Footer
