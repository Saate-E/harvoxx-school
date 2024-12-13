import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';import pix1 from '../Images/homi 1.png';
import one from '../Images/phy.jpg'
import two from '../Images/hands.jpg'
import three from '../Images/tech-bootcamp-article-1-1.gif'
import four from '../Images/Community+Tech+Final+Web.jpg';
import Slider from '../ComponentsFolder/Slider';
import SliderStartup from '../ComponentsFolder/SliderStartup';
import MultiCarousel from '../ComponentsFolder/MultiCarousel';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';
import { Link } from 'react-router-dom';
import Contact from '../ComponentsFolder/Contact';
import SluderStartup2 from '../ComponentsFolder/SluderStartup2';
import dsp100 from '../Images/dsp100.jpg'
import train from '../Images/train.jpg';




const Homepage = () => {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto'; // Enable scrolling

  }, [pathname]);


    return (
        <div>
            <Navbar />

            <div className="hero">

            
                <div className='emp'>
                    <button type="button">Empowering the next tech force</button>

                    <h1>Unlock Opportunities with Digital Skills</h1>
                    <p><b>Cultivating Tommorrow's Tech Innovators:</b> We empower you with the skills you need to forge and nurture the career of your dreams.</p>
                    <a href="#programs"><button type='button' className='explore'>Explore programmes</button></a>

                    
                </div>
            </div>
            {/* <div className='emp'>

                 <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }} >
                    <div style={{ flex: 1, backgroundColor: " ",paddingLeft:40 }} >
                        <button type="button">Empowering the next tech force</button>
                        <h1>Unlock Opportunities with Digital Skills</h1>
                        <p><b>Cultivating Tommorrow's Tech Innovators:</b> We empower you with the skills you need to forge and nurture the career of your dreams.</p>
                        <a href="#programs"><button type='button' className='explore'>Explore programmes</button></a>
                    </div>
                    <div style={{ flex: 0.8, backgroundColor: "  ",padding:20 }} className='hero-image'  >
                        
                        <img src={dsp100} alt="" style={{width:"80%"}} />

                        
                    </div>
                </div> 


                <h2>Tools</h2><br />
                <Slider />
            </div> */}

                    <div className="why">

                    <h1>Why Harvoxx School</h1>

                    <div className='why-flex'>

                        <div className='left'>
                            <h3>Where Aspirations Takes <span style={{ color: '#2D378E' }}>Flight</span>. <br /> Unleash your potentials with our well designed learning <span style={{ color: '#E05476' }}>experiences</span> in <span style={{ color: '#DEA729' }}>Harvoxx School.</span></h3>
                            <div className='list'>
                                <div>
                                    <h6>2000+</h6>
                                    <p>Students</p>

                                </div>

                                <div>
                                    <h6>15+</h6>
                                    <p>Instructors</p>
                                </div>

                                <div>
                                    <h6>10+</h6>
                                    <p>Packages</p>
                                </div>

                            </div>

                        </div>


                        <div className='right'>

                            <div className='why-card' style={{ background: '#DDDDDD1A' }}>
                                <img src={one} alt="" />
                                <h5>Physical classes</h5>
                                <p>Engage in dynamic learning environments with our on-site classes, fostering collaboration and hands-on experience for an immersive educational journey.</p>

                            </div>

                            <div className='why-card' style={{ background: '#D6A95F1A' }}>
                                <img src={two} alt="" />
                                <h5>Hands-on practical</h5>
                                <p>Experience learning through doing. Our hands-on approach ensures practical mastery, empowering you to confidently apply skills in real-world scenarios.</p>


                            </div>

                            <div className='why-card' style={{ background: '#B2B0F71A' }}>
                                <img src={three} alt="" />
                                <h5>Custom BootCamps</h5>
                                <p>Tailor your learning journey with personalized bootcamps, designed to meet your unique goals, offering flexibility and targeted skill development for accelerated growth.</p>


                            </div>

                            <div className='why-card' style={{ background: '#FFA9DC1A' }}>
                                <img src={four} alt="" />
                                <h5>Community Support</h5>
                                <p>Join a thriving community of learners. Our support network ensures you're never alone, fostering collaboration, mentorship, and shared success within the Harvoxx School family.</p>


                            </div>


                        </div>

                    </div>


                    </div>


                    <div className='emp'>
                        <h2>Tools We Train On</h2><br />
                        <Slider/>
                    </div>

             <div className="prog" id='programs'>
                <h3>Our Program</h3>
                <p>We equip you with tech skills to forge the career of your dreams.</p>

                <div className='prog-cards'>

                    <div className='prog-card'>
                        <img src={pix1} alt="" />
                        <div className='prog-text'>
                            <h4>Digital SkillUp Project-300(DSP-300)</h4>
                            <p>It is a pioneering initiative under the stewardship of Harvoxx Tech Hub, dedicated to empowering the youth of Rivers State, Nigeria through comprehensive technology training.</p>
                            <Link to='/dsp300'><a href='#enrol'>Learn More</a></Link>

                        </div>


                    </div>

                    <div className='prog-card'>
                        <img src={dsp100} alt="" />
                        <div className='prog-text'>
                            <h4>Digital SkillUp Project-100(DSP-100)</h4>
                            <p>Specially designed to empower and uplift young female talents in Rivers State, Nigeria. It is a movement to elevate and empower young women in Rivers State.</p>
                            <Link to='/dsp100'> <a href='#enrol'>Learn More</a></Link>

                        </div>


                    </div>



                    <div className='prog-card'>
                        <img src={train} alt="" />
                        <div className='prog-text'>
                            <h4>Paid Program</h4>
                            <p>We take pride in offering exclusive, premium, in-depth courses designed specially for you. Our paid training stands as a testament to our commitment to delivering cutting-edge, industry-relevant education.</p>
                            <a href='https://harvoxx.com' target='_blank'>Learn More</a>

                        </div>

                    </div>


                </div>
            </div>


            <div className="where">
                <h2>Emerging Startups From Our Training</h2><br />

                <SliderStartup />
                <SluderStartup2 />
            </div>

            

            <div className="learners">
                <div className='learners-flex'>
                    <div className='l-left'>
                        <h2>Excellence is not just a claim; it's our students showcasing what they've learned and conquered. Dive into their success stories!</h2>
                        <p>Harvoxx School learners speak for themselves.</p>
                    </div>
                    <div className='l-right'>
                        <MultiCarousel />
                    </div>

                </div>
            </div>


            


            

            

            <Contact />


            <Footer />

        </div>

    )
}

export default Homepage