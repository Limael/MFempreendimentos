import { useRef } from 'react';
import './App.css'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Projects from './components/Projects'
import ValuesMissionVision from './components/ValuesMissionVision'
import HouseProjects from './components/HouseProjects';

function App() {
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const houseProjectsRef = useRef(null);
  return (
    <>
      <Header aboutUsRef={aboutUsRef} projectsRef={projectsRef} />
      <HeroBanner />
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <ValuesMissionVision />
      <div ref={houseProjectsRef}>
        <HouseProjects />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
