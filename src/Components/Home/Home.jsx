import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import GetSolution from '../ThirdSection/GetSolution'
import EmpoweringHealth from '../FourthSection/EmpoweringHealth'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <GetSolution></GetSolution>
      <EmpoweringHealth></EmpoweringHealth>
    </div>
  )
}

export default Home
