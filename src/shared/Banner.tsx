import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


const Banner = () => {
  return (
    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className={`banner relative after:absolute after:z-10 after:bottom-0 after:w-full after:h-[170px]`}>
      <SwiperSlide style={{backgroundColor: '#4d0202'}}>
        <div className={`max-w-banner w-full mx-auto px-4 relative`}>
          <Link to={`#`}>
            <picture>
              <source srcSet="./banner/banner-01.webp" media="(min-width: 768px)" />
              <img src="./banner/banner-02.webp" alt="" />
            </picture>
            <div className={`w-full h-full absolute z-10 bottom-0 top-0 flex items-center`}>
              <div className={`max-w-container w-full mx-auto`}>
                <div className={`inline-flex h-5 text-xs font-bold rounded-md px-1 mb-2 leading-[18px]`} style={{backgroundColor: '#ff80bd'}}>
                  Хайр дурлал
                </div>
                <div className={`text-white text-sm font-medium text-shadow line-clamp-3 mb-4 w-96`}>
                  Хэсон амьдралынхаа туршид өөрийгөө удамшлын сугалаанд хожиж альфа хэмээн бодож амьдарсан. 
                  Гэвч тэр өөрийгөө альфа биш доод гаралтай омега гэдгээ мэдэх үед амьдрал нь орвонгоороо эргэв. 
                  Энэ нөхцөл байдал нь омега нартай байж чаддаггүй альфа болох Дужинтай байнга учирснаар хязгаартаа хүрэх аж. 
                  Омегаверсийн ертөнцөд хөл тавьж юу тэдний судасны цохилтыг хурдасгаж, бие нь өөрийн мэдрэлгүй болгож буйг олж мэдээрэй.
                </div>  
                <div className={`bg-primary-400 hover:bg-primary-600 transition-default rounded-full inline-flex h-9 px-4 leading-[34px]`}>
                  <span className={`font-bold text-base`}>Цааш унших</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{backgroundColor: '#371117'}}>
        <div className={`max-w-banner w-full mx-auto px-4 relative`}>
          <Link to={`#`}>
            <picture>
              <source srcSet="./banner/banner-03.webp" media="(min-width: 768px)" />
              <img src="./banner/banner-05.webp" alt="" />
            </picture>
            <div className={`w-full h-full absolute z-10 bottom-0 top-0 flex items-center`}>
              <div className={`max-w-container w-full mx-auto`}>
                <div className={`inline-flex h-5 text-xs font-bold rounded-md px-1 mb-2 leading-[18px]`} style={{backgroundColor: '#ffc68c'}}>
                  Романтик
                </div>
                <div className={`text-white text-sm font-medium text-shadow line-clamp-3 mb-4 w-96`}>
                  Хэсон амьдралынхаа туршид өөрийгөө удамшлын сугалаанд хожиж альфа хэмээн бодож амьдарсан. 
                  Гэвч тэр өөрийгөө альфа биш доод гаралтай омега гэдгээ мэдэх үед амьдрал нь орвонгоороо эргэв. 
                  Энэ нөхцөл байдал нь омега нартай байж чаддаггүй альфа болох Дужинтай байнга учирснаар хязгаартаа хүрэх аж. 
                  Омегаверсийн ертөнцөд хөл тавьж юу тэдний судасны цохилтыг хурдасгаж, бие нь өөрийн мэдрэлгүй болгож буйг олж мэдээрэй.
                </div>  
                <div className={`bg-primary-400 hover:bg-primary-600 transition-default rounded-full inline-flex h-9 px-4 leading-[34px]`}>
                  <span className={`font-bold text-base`}>Цааш унших</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{backgroundColor: '#110131'}}>
        <div className={`max-w-banner w-full mx-auto px-4 relative`}>
          <Link to={`#`}>
            <picture>
              <source srcSet="./banner/banner-05.webp" media="(min-width: 768px)" />
              <img src="./banner/banner-06.webp" alt="" />
            </picture>
            <div className={`w-full h-full absolute z-10 bottom-0 top-0 flex items-center`}>
              <div className={`max-w-container w-full mx-auto`}>
                <div className={`inline-flex h-5 text-xs font-bold rounded-md px-1 mb-2 leading-[18px]`} style={{backgroundColor: '#ff80bd'}}>
                  Тулаант
                </div>
                <div className={`text-white text-sm font-medium text-shadow line-clamp-3 mb-4 w-96`}>
                  Хэсон амьдралынхаа туршид өөрийгөө удамшлын сугалаанд хожиж альфа хэмээн бодож амьдарсан. 
                  Гэвч тэр өөрийгөө альфа биш доод гаралтай омега гэдгээ мэдэх үед амьдрал нь орвонгоороо эргэв. 
                  Энэ нөхцөл байдал нь омега нартай байж чаддаггүй альфа болох Дужинтай байнга учирснаар хязгаартаа хүрэх аж. 
                  Омегаверсийн ертөнцөд хөл тавьж юу тэдний судасны цохилтыг хурдасгаж, бие нь өөрийн мэдрэлгүй болгож буйг олж мэдээрэй.
                </div>  
                <div className={`bg-primary-400 hover:bg-primary-600 transition-default rounded-full inline-flex h-9 px-4 leading-[34px]`}>
                  <span className={`font-bold text-base`}>Цааш унших</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner
