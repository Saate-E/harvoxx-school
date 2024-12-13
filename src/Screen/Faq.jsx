import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';import { Faqs } from '../utils/Data';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';


const Faq = () => {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto'; // Enable scrolling

  }, [pathname]);
  
  return (
    <div>
        <Navbar/>
        <section className='faq-heading'>
            <h1>You have got questions?</h1> <h1>we have got answers!</h1>
            <p>AltSchool Africa helps you learn the skills you need to build and grow the career you want.</p>
        </section>

        <section className='questions'>
            {
                Faqs && Faqs.map(item =>(
                    <div key={item.id}>
                        <h3>{item.text}</h3>
                        <p>{item.paragraph}</p>
                    </div>
                ))
            }
            
        </section>

        <Footer/>
        
    </div>
  )
}

export default Faq