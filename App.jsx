import React from 'react'
import './App.css'
import Header from './Header'
import Herosection from './Herosection'
import Cardsection from './Cardsection'
import About from './About'
import Service from './Service'
import DoctorSection from './DoctorSection'
import DentistPatientImage from './DentistPatientImage'
import Testimonials from './Testimonials'



function App() {

  return (

    <div className=''>
  <Header></Header>

  <Herosection></Herosection>

  <Cardsection></Cardsection>
  <About />
  <Service />
  <DoctorSection></DoctorSection>
  <DentistPatientImage></DentistPatientImage>
  <Testimonials></Testimonials>
  

  </div>
  

  )
}

export default App
