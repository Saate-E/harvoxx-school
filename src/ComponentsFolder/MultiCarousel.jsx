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
import { MultiCards } from '../utils/Data';
import prof from '../Images/pexels-pixabay-220453.jpeg'

const MultiCarousel = () => {

  return (
    <div className='slide-m'>
        <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 1 }}
      >
       {
        MultiCards && MultiCards.map(item => (
            <SwiperSlide className='one' key={item.id}>
                <div>
                    <h4>{item.text}</h4>
                    <img src={item.image} alt="" />
                    <h2>{item.name}</h2>
                    <p>{item.title}</p>
                    <a href="">({item.phone})</a>
                </div>
            
            </SwiperSlide >

        ))
       }
        
        {/* <SwiperSlide className='one'>
            <div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='one'>
            <div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='one'>
            <div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='one'>
        <   div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='one'>
            <div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='one'> 
            <div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='one'>
            <div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='one'>
            <div>
                <h4>ALX showed me the depth and scope of the tech field and what it would take to work for a global tech company</h4>
                <h2>Segun Agbenro</h2>
                <p>Flutter Enginner</p>
            </div>
        </SwiperSlide> */}
      </Swiper>

    </div>
  )
}

export default MultiCarousel