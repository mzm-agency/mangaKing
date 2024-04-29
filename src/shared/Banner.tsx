import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[400px] ">
                <SwiperSlide>
                    <img className='h-[400px] w-full object-cover bg-center bg-cover' src='./banner/banner1.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[400px] w-full object-cover bg-center bg-cover' src='./banner/banner2.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[400px] w-full object-cover bg-center bg-cover' src='./banner/banner3.jpeg' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
