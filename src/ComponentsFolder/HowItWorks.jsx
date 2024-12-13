import React from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const HowItWorks = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 710 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 710, min: 0 },
          items: 1
        }
      };



  return (
    
    

    <div className='slide-m how'>

        <h2>How It Works</h2>
      
      <Carousel className='one'
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={ true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
      <div>
        <p>1</p>
        <h3>Structured Training Duration:</h3>
        <h4>Selected participants undergo a rigorous 3-month physical training program, conducted 2-3 times weekly, focused on their chosen tech skills.</h4>
                    
     </div>

     <div>
        <p>2</p>
        <h3>Comprehensive Learning:</h3>
        <h4>Participants not only gain technical proficiency but also acquire business acumen. They learn to monetize their skills, understand the business of tech, collaborate effectively, build high-performance teams, and discover co-founder opportunities.</h4>
                    
     </div>

     <div>
        <p>3</p>
        <h3>Team Formation:</h3>
        <h4>After 10 weeks, participants are strategically grouped into teams of 5-7 individuals from diverse categories, ensuring a dynamic mix of skills and perspectives.</h4>
                    
     </div>

     <div>
        <p>4</p>
        <h3>Expert Guidance:</h3>
        <h4>Each team receives dedicated support with a Product Manager, Backend Developer, and an experienced mentor. This guidance is instrumental in developing a successful Minimum Viable Product (MVP).</h4>
                    
     </div>
     <div>
        <p>5</p>
        <h3>Access to Techlauncher:</h3>
        <h4>Teams and their products gain access to Techlauncher's incubation/acceleration program where they will gain business development training, product development support, pre-launch marketing strategies and potential funding opportunities.</h4>
                    
     </div>

     <div>
        <p>6</p>
        <h3>Funding for Excellence:</h3>
        <h4>The teams exhibiting outstanding market validation, traction, and teamwork stand a chance to receive instant NGN1,000,000 funding after a 6-month pilot. They continue to benefit from business mentorship and connections to Angel Investors and VC's through Techlauncher.</h4>
                    
     </div>


     <div>
        <p>7</p>
        <h3>Pathways to Employment:</h3>
        <h4>Successful participants with a desire for employment can explore internship opportunities with our partnering companies upon completing their team projects, ensuring a seamless transition from training to practical industry experience.</h4>
                    
     </div>
        
      </Carousel>

    </div>
  )
}

export default HowItWorks