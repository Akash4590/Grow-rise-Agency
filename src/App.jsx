import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProblemSection from './Components/ProblemSection';
import ServicesSection from './Components/Servicessection';
import ResultsSection from './Components/Resultssection';
const App = () => {
  return (
    <div className="min-h-screen font-sans">
    <Navbar/>
  <Hero/>
  <ProblemSection/>
   <ServicesSection />
      <ResultsSection />
    </div>
  )
}

export default App
