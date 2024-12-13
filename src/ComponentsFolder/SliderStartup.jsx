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
import slide1 from '../Images/GoSaveMe.jpeg'
import slide2 from '../Images/alanda.jpg'
import slide3 from '../Images/unboxit.jpeg'
import slide4 from '../Images/databyters.jpeg'
import slide5 from '../Images/dokita.jpeg'
import slide6 from '../Images/homigon.jpeg'
import slide7 from '../Images/quickpower.jpeg'
import slide8 from '../Images/bagify.jpeg'
import slide9 from '../Images/build.jpeg'





const SliderStartup = () => {
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

        <SwiperSlide>
          <img src={slide8} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide9} alt=""/>
        </SwiperSlide>
    
      </Swiper>

    </div>
  )
}

export default SliderStartup