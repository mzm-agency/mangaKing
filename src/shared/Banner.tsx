import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { url } from 'inspector';


const Banner = () => {
  return (
    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className={`banner relative after:absolute after:z-10 after:bottom-0 after:w-full after:h-[170px]`}>
      <SwiperSlide style={{backgroundColor: '#371117'}}>
        <div className={`container mx-auto`}>
          <img className={`w-full object-cover object-center`} src='./banner/02.webp' />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{backgroundColor: '#110131'}}>
        <div className={`container mx-auto`}>
          <img className={`w-full object-cover object-center`} src='./banner/02.webp' />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{backgroundColor: '#103828'}}>
        <div className={`container mx-auto`}>
          <img className={`w-full object-cover object-center`} src='./banner/04.webp' />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner
