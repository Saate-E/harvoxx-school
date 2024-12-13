import React from 'react';
import { Faq_300 } from '../utils/Data';

const Faq300 = () => {
  return (
    <div>
        <section className='faq-heading'>
            <h1>You have got questions?</h1> <h1>we have got answers!</h1>
            {/* <p>AltSchool Africa helps you learn the skills you need to buildand grow the career you want.</p> */}
        </section>

        <section className='questions'>
            {
                Faq_300 && Faq_300.map(item =>(
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.para}</p>
                    </div>
                ))
            }
            
        </section>

        
    </div>
  )
}

export default Faq300