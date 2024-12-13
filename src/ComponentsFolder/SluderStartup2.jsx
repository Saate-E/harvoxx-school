import React from 'react'
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
import slide1 from '../Images/eng-hub.jpeg'
import slide2 from '../Images/ogabike.jpeg'
import slide3 from '../Images/quickfarm.jpeg'
import slide4 from '../Images/farmng.png'
import slide5 from '../Images/reside.jpg'
import slide6 from '../Images/technaire.jpg'
import slide7 from '../Images/cutrate.jpeg'

const SluderStartup2 = () => {
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
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt=""  className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className='acc'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt=""/>
        </SwiperSlide>
    
      </Swiper>

    </div>
  )
}

export default SluderStartup2