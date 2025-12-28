import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Enroll from "../ComponentsFolder/Enroll";
// import CountDown from '../ComponentsFolder/CountDown';
import AboutDsp from "../ComponentsFolder/AboutDsp";
import CoursesOffered from "../ComponentsFolder/CoursesOffered";
import Memories from "../ComponentsFolder/Memories";
import Footer from "../ComponentsFolder/Footer";
import Navbar from "../ComponentsFolder/Navbar";
import Faq100 from "../ComponentsFolder/Faq100";
import Contact from "../ComponentsFolder/Contact";

const Dsp100 = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto"; // Enable scrolling
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <Enroll
        noLink="/form"
        class="enroll"
        type="dsp100"
        reg="/dsp100"
        btnClassName="hidden"
        btn="Enroll"
        title="Digital SkillUp Project-100 (DSP-100)"
        subtitle="Building The Next Generation Of Female Techies"
        para="Join millions of other ladies around the world breaking biases with their Tech Skills"
      />
      {/* <CountDowndsp100
        cohort="100"
        message=" Your key to unlocking endless opportunities through digital skill pathways."
        start="DSP-100 training starts in"
      /> */}
      <AboutDsp
        type="dsp100"
        cohort="100"
        info="The Digital Skill Project 100 (DSP-100) is an impactful initiative under the umbrella of Harvoxx Tech Hub, specially designed to empower and uplift young female talents in Rivers State, Nigeria. Our mission with DSP-100 is to provide dedicated training, support, and mentorship to 100 promising young women, equipping them with essential digital skills and entrepreneurial opportunities. DSP-100 is more than just a training program; it is a movement to empower and elevate young women in Rivers State. We recognize the tremendous potential of our female youth, and we are committed to creating an inclusive and enabling environment for them to thrive in the technology sector."
      />
      <CoursesOffered />
      <Memories type="dsp100" />
      <Faq100 />
      <Contact />
      <Footer />
    </div>
  );
};

export default Dsp100;
