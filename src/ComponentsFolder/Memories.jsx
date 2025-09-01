import React, {useState} from 'react';
import f2 from '../Images/g1.jpeg'
import f3 from '../Images/g3.jpeg'
import f4 from '../Images/g4.jpeg'
import f5 from '../Images/g5.jpeg'
import f6 from '../Images/g2.jpeg'
import f7 from '../Images/g6.jpeg'
import f8 from '../Images/g7.jpeg'
import f9 from '../Images/g9.jpeg'
import f10 from '../Images/g10.jpeg'
import f11 from '../Images/g8.jpeg'
import f12 from '../Images/g12.jpeg'
import f13 from '../Images/f12.jpeg'
import m1 from '../Images/m1.jpeg'
import m2 from '../Images/m2.jpeg'

import m6 from '../Images/m6.jpeg'
import m8 from '../Images/homi 1.png'
import m12 from '../Images/m12.jpeg'
import m13 from '../Images/m13.jpeg'
import m14 from '../Images/m14.jpeg'
import m15 from '../Images/m15.jpeg'
import m16 from '../Images/m16.jpeg'
import m17 from '../Images/m17.jpeg'
import m18 from '../Images/m18.jpeg'
import m19 from '../Images/m19.jpeg'
import m20 from '../Images/m20.jpeg'
import m21 from '../Images/m21.jpeg'
import m22 from '../Images/m22.jpeg'
import m23 from '../Images/m24.jpeg'
import a1 from '../Images/a1.jpeg'
import a2 from '../Images/a2.jpeg'
import a4 from '../Images/a4.jpeg'
import a5 from '../Images/a5.jpeg'
import a6 from '../Images/a6.jpeg'
import a7 from '../Images/a7.jpeg'
import a8 from '../Images/a8.jpeg'
import a9 from '../Images/a9.jpeg'
import a10 from '../Images/a10.jpeg'
import a11 from '../Images/a11.jpeg'
import a12 from '../Images/a12.jpeg'
import {useNavigate, Link } from 'react-router-dom';
import Modal from "react-modal";



const Memories = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [pop, setPop] = useState(false);

  const handlePop = () =>{
    setPop(true)
  }

  const handleClose = () =>{
    setPop(false)
  }

  const openModal = () =>{
    setIsOpen(true);
  }

  const openModal2 = () =>{
    setIsOpen(false);
  }

  const navigate = useNavigate();
  const apply = () => {
    navigate("/form");
  };


  const [complete, setComplete] = useState(false);
  const [see, setSee] = useState(true)

  const handleClick = () => {
    setComplete(true);
    setSee(false)
  }

  return (
    <div className='memories'>
        <h1>Memories from Previous Program </h1>     
        
        {props.type === "dsp100" ? <>
        <div className='gallery'>
          
            
            <img src={f8} alt="" />
            <img src={f7} alt="" />
            <img src={f10} alt="" />
            <img src={f3} alt="" /> 
            <img src={f4} alt="" />
            <img src={f5} alt="" />

            {
          see ? (
            <p onClick={handleClick}>See more</p>
          ) : null
        }


            {complete ?
              (
              <>
              <img src={f6} alt="" />
              <img src={f2} alt="" />
              <img src={f9} alt="" />
              <img src={f11} alt="" />
              <img src={f12} alt="" />
              <img src={f13} alt="" />
              {/* <img src={f1} alt="" /> */}
              </>
              ) : null
              
            }  
            
         

        </div>
        </> :
        <>
        <>
        <div className='gallery'>
          
            <img src={a1} alt="" />
            <img src={a2} alt="" />
            <img src={a4} alt="" />
            <img src={a5} alt="" />
            <img src={a6} alt="" />
            <img src={a7} alt="" />


            {
          see ? (
            <p onClick={handleClick}>See more</p>
          ) : null
        }


            {complete ?
              (
              <>
              <img src={a8} alt="" />
              <img src={a9} alt="" />
              <img src={a10} alt="" />
              <img src={a11} alt="" />
              <img src={a12} alt="" />
              <img src={m13} alt="" />
              
              <img src={m8} alt="" />
              <img src={m12} alt="" />
              <img src={m14} alt="" />
              <img src={m15} alt="" />
              <img src={m16} alt="" />
              <img src={m17} alt="" />
              <img src={m18} alt="" />
              <img src={m19} alt="" />
              <img src={m20} alt="" />
              <img src={m21} alt="" />
              <img src={m22} alt="" />
              <img src={m23} alt="" />
              

              </>
              ) : null
              
            }  
            
         

        </div>
        </> 
        </> }


        {props.type === "dsp100" ? <>
                <Link to={props.noLink} >
                  <button type="button" className='enrollment enroll2' onClick={handlePop}>Enroll</button>
                  </Link>
                </>
                :
                <>
                {/* <Link 
                to='/form'
                 > */}
                  <button type="button" className='enrollment enroll2' onClick={openModal} >Enroll</button>
                  {/* </Link> */}
                  
                </>
                }


                {props.type === "dsp100" ? <>
                    <div className={pop ?  'pop' : 'moren'}>
                      
                    <p>Registration for cohort 4 is yet to commence.</p>
                     <button onClick={handleClose}>OK</button>
        
                      
                    </div>
              
              </> :
              null
              }

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 12,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {/* <div className="confirm">
          <h3>Hold on!!!</h3>
          <h4>Before you proceed, kindly note the following:</h4>
          
          <ol>
            <li> You must have a LAPTOP or have access to one.</li>
            <li> It is a 100% PHYSICAL training. Not online.</li>
            <li> Training will hold at least TWICE EVERY WEEK for 4 hours daily.</li>
          </ol>
          <p>Do You Still Want To Be Part Of This?</p>
          <button type="button" onClick={apply}>
            Proceed
          </button>
        </div> */}




          <div className="confirm">
          <h4>DSP-300 Registration is yet to commence.</h4>
          {/* <h4>Check back next year</h4> */}
          
          <button type="button" onClick={openModal2}>
            OK
          </button>
        </div>
      </Modal>




    </div>
  )
}

export default Memories
