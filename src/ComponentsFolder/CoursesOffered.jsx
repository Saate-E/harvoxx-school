import React, {useState} from 'react';
import one from '../Images/one.png';
import img1 from '../Images/pro.png';
import img2 from '../Images/fro.png'
import img3 from '../Images/data.png'
import img4 from '../Images/cyber.png'
import img5 from '../Images/dig.png'

import { Courses } from '../utils/Data';
const CoursesOffered = () => {

    const [click, setClick] = useState(false);
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setClick1(false)
    setClick2(false)
    setClick3(false)
    setClick4(false)
}
  const handleClick1 = () => {
    setClick1(!click)
    setClick2(false)
    setClick3(false)
    setClick4(false)
    setClick(false);
};
  const handleClick2 = () => {
    setClick2(!click)
    setClick(false);
    setClick1(false)
    setClick3(false)
    setClick4(false)
}
  const handleClick3 = () => {
    setClick3(!click);
    setClick1(false)
    setClick2(false)
    setClick(false)
    setClick4(false)
}
  const handleClick4 = () => {
    setClick4(!click);
    setClick(false)
    setClick2(false)
    setClick3(false)
    setClick(false)
}


  const closeClick = () => setClick(false);
  const closeClick1 = () => setClick1(false);
  const closeClick2 = () => setClick2(false);
  const closeClick3 = () => setClick3(false);
  const closeClick4 = () => setClick4(false);

  const [activeNav, setActiveNav] = useState('/')
  return (
    <div className='courses'>
        <h1>Courses Offered</h1>

        <section>
                    <div className='course-card'>
                        <div>
                            <img src={img1} alt="" />
                            <h3>Product Design</h3>
                            <p>In Product Design, discover the art of creating user-friendly products. </p>
                            <p className='open' onClick={handleClick}>Learn more</p>

                            <b className={click ? 'learn-more' : 'moren'} >
                                <h6 onClick={closeClick}>X</h6>
                                <span>In Product Design, discover the art of creating user-friendly products. Dive into the world of user experiences, mastering the skills to design apps, websites, and physical products that people love and find easy to use.</span>
                            </b>

                        </div>
                        
                        
                    </div>

                    <div className='course-card'>
                        <div>
                            <img src={img2} alt="" />
                            <h3>Frontend Development</h3>
                            <p>Frontend Web Development is like building the face of the internet.</p>
                            <p className='open' onClick={handleClick1}>Learn more</p>

                            <b className={click1 ? 'learn-more' : 'moren'} >
                                <h6 onClick={closeClick1}>X</h6>
                                <span>Frontend Web Development is like building the face of the internet. Learn the languages that make websites look good and work smoothly. Dive into the world of coding to create responsive and visually appealing web pages.</span>
                            </b>

                        </div>
                        
                        
                    </div>

                    <div className='course-card'>
                        <div>
                            <img src={img3} alt="" />
                            <h3>Data Analysis</h3>
                            <p>Decode the language of data in Data Analytics. </p>
                            <p className='open' onClick={handleClick2}>Learn more</p>

                            <b className={click2 ? 'learn-more' : 'moren'} >
                                <h6 onClick={closeClick2} >X</h6>
                                <span>Decode the language of data in Data Analytics. Be a digital detective, uncovering valuable insights and patterns hidden within data sets. Learn to make informed decisions that drive business success and innovation.</span>
                            </b>

                        </div>
                        
                        
                    </div>

                    <div className='course-card'>
                        <div>
                            <img src={img4} alt="" />
                            <h3>CyberSecurity</h3>
                            <p>Become a digital defender in Cybersecurity.</p>
                            <p className='open' onClick={handleClick3}>Learn more</p>

                            <b className={click3 ? 'learn-more' : 'moren'} >
                                <h6 onClick={closeClick3}>X</h6>
                                <span>Become a digital defender in Cybersecurity. Explore strategies to safeguard digital spaces, ensuring data integrity and protecting against cyber threats. Be the guardian that keeps information safe from digital adversaries.</span>
                            </b>

                        </div>
                        
                        
                    </div>

                    <div className='course-card'>
                        <div>
                            <img src={img5} alt="" />
                            <h3>Digital Marketing</h3>
                            <p>Master the Art of Online Marketing, strategies, promotion and audience engagement in Digital Marketing.</p>
                            <p className='open' onClick={handleClick4}>Learn more</p>

                            <b className={click4 ? 'learn-more' : 'moren'} >
                                <h6 onClick={closeClick4}>X</h6>
                                <span>Learn to harness the power of the internet in Digital Marketing. Discover strategies to promote brands, engage audiences, and drive cinversions using tools like social media, email marketing, SEO, and analytics. Turn ideas into impactful compaigns that connect, influence, and achieve results.</span>
                            </b>

                        </div>
                        
                        
                    </div>


            

        </section>
        
    </div>
  )
}

export default CoursesOffered