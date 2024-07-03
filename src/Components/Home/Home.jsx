import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import GetSolution from '../ThirdSection/GetSolution'
import EmpoweringHealth from '../FourthSection/EmpoweringHealth'
import Faq from '../SixthSection/Faq'
import Discount from '../SeventhSection/Discount'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <GetSolution></GetSolution>
      <EmpoweringHealth></EmpoweringHealth>
      <Faq></Faq>
      <Discount></Discount>
    </div>
  )
}

export default Home
