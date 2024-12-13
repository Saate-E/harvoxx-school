import React from 'react';
import img1 from '../Images/m20.jpeg'
import img2 from '../Images/g12.jpeg'


const AboutDsp = (props) => {
  return (
    <div>
        <section className='about-dsp'>
            <div className='txt'>
                <h3>About DSP-{props.cohort}</h3>
                <p>{props.info}</p>
            </div>
            <div className='img'>
              {props.type === "dsp100" ?
               <>
              <img src={img2} alt="" />
              </> :
              <>
              <img src={img1} alt="" />
              </> }
                
            </div>
        </section>
    </div>
  )
}

export default AboutDsp