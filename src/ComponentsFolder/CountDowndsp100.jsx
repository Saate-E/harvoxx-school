import React, { useState, useEffect } from 'react';

const CountDowndsp100 = (props) => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-07-01") - +new Date();
        
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const { days, hours, minutes, seconds } = timeLeft;


  return (
    <div className='count'>
        <h3>Countdown to DSP-{props.cohort}</h3>
        <p>{props.message} <b>{props.start}</b></p>
        <div className='counting'>

        {days > 0 && (
            <div className='count-c'>


                <div>
                    <h2>{days} </h2>
                    <h3>:</h3>
                    
                </div>
                <p>Days</p>
                
            </div>
             )}

            <div className='count-c'>
                <div>
                    <h2>{hours.toString().padStart(2, '0')} </h2>
                    <h3>:</h3>
                </div>
                <p>Hours</p>
                
            </div>

            <div className='count-c'>
                <div>
                    <h2>{minutes.toString().padStart(2, '0')}</h2>
                    <h3>:</h3>
                </div>
                <p>Minutes</p>
                
            </div>
                
            <div className='count-c count-l'>
                <div>
                    <h2>{seconds.toString().padStart(2, '0')}</h2>
                </div>
                <p>Seconds</p>
                
            </div>
        </div>
        
    </div>
    
  )
}
export default CountDowndsp100