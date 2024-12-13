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
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../Images/html.png'
import slide2 from '../Images/css.png'
import slide3 from '../Images/python.png'
import slide4 from '../Images/git.png'
import slide5 from '../Images/ts.png'
import slide6 from '../Images/python1.png'
import slide7 from '../Images/c.png'
import slide8 from '../Images/jsp.svg'
import slide9 from '../Images/sql.png'
import slide10 from '../Images/swift.png'
import slide11 from '../Images/figma.png'
import slide12 from '../Images/CorelDRAW-1324888710643439513.svg'
import slide13 from '../Images/excel.png'









const Slider = () => {
  return (
    <div className='slide'>
        <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
       
        // pagination={{ clickable: true }}
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 1 }}
      >
        <SwiperSlide>
          <img src={slide1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt=""  className='acc'/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt=""  className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide9} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide12} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide13} alt="" />
        </SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default Slider