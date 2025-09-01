import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import Enroll from '../ComponentsFolder/Enroll';
// import CountDown from '../ComponentsFolder/CountDown';
import AboutDsp from '../ComponentsFolder/AboutDsp';
import pix from '../Images/shine-young-people-discussing-work-issues-1 1.png';
import CoursesOffered from '../ComponentsFolder/CoursesOffered';
import Memories from '../ComponentsFolder/Memories';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';
import Faq300 from '../ComponentsFolder/Faq300';
import Contact from '../ComponentsFolder/Contact';
import HowItWorks from '../ComponentsFolder/HowItWorks';


const Dsp300 = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto'; // Enable scrolling

  }, [pathname]);

  



  return (
    <div>
      <Navbar/>
      <Enroll class='enroll enroll2'  reg='/status' btn='Enroll' title='Digital SkillUp Project-300 (DSP-300)' subtitle='Be A Part Of The Next Tech Force' src='shine-young-people-discussing-work-issues-1 1.png' para='Your passcode to unlocking endless horizons through digital skills.'/>
      {/* <CountDown cohort='300' message='If you are willing, and can be dedicated then we can help you kick start your tech career.'  start='DSP-300 training starts in'/> */}
      <AboutDsp cohort='300' info='It is a pioneering initiative under the stewardship of Harvoxx Tech Hub, dedicated to empowering the youth of Rivers State, Nigeria, through comprehensive technology training. It represents a resolute commitment to bridging the digital divide, fostering innovation, and equipping the next generation with the skills needed to thrive in an ever-evolving technological landscape.

        It is driven by a clear and compelling mission: to nurture and empower the youth of Rivers State by providing them with invaluable digital skills, free of charge. We believe in the transformative power of education, especially in the field of technology, to create a brighter future for the youth of our region.'/>
      <CoursesOffered/>
      <HowItWorks/>
      <Memories type="dsp300"/>
      <Faq300/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Dsp300
