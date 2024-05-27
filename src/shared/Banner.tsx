import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Button } from '../ui/Button';

const banner = [
  {
    desktop: "./banner/desktop-01.webp",
    mobile: "./banner/mobile-01.webp",
    category: "Хайр дурлал",
    color: "#ff99bb",
    bg: "#4d0202",
  },
  {
    desktop: "./banner/desktop-02.webp",
    mobile: "./banner/mobile-02.webp",
    category: "Адал явдал",
    color: "#6fc2ff",
    bg: "#371117",
  },
  {
    desktop: "./banner/desktop-03.webp",
    mobile: "./banner/mobile-03.webp",
    category: "Тулаант",
    color: "#c7ff80",
    bg: "#110131",
  },
];

const Banner = () => {
  return (
    <Swiper pagination={{
      dynamicBullets: true,
    }} modules={[Navigation, Pagination]} className={`default relative`}>
      {(banner || []).map((item: any) => {
        return ( 
          <SwiperSlide className={`banner relative before:absolute before:z-[5] before:bottom-0 before:w-full xs:before:h-[100px] sm:before:h-[100px] lg:before:h-[170px]`} style={{ backgroundColor: item.bg }}>
            <div className={`max-w-banner w-full mx-auto relative`}>
              <Link to={`#`}>
                <picture>
                  <source srcSet={`${item.desktop}`} media="(min-width: 768px)" />
                  <img className={`object-cover object-center xs:h-[430px] md:h-auto lg:h-auto`} src={`${item.mobile}`} alt="" />
                </picture>
                <div className={`w-full h-full absolute z-10 bottom-0 top-0 flex items-center px-4`}>
                  <div className={`max-w-container w-full mx-auto`}>
                    <div className={`inline-flex h-5 text-12 font-bold rounded-md px-1 mb-2 leading-[18px]`} style={{ backgroundColor: item.color }}>
                      Хайр дурлал
                    </div>
                    <div className={`text-default-50 text-14 font-medium text-shadow line-clamp-3 mb-4 w-96`}>
                      Хэсон амьдралынхаа туршид өөрийгөө удамшлын сугалаанд хожиж альфа хэмээн бодож амьдарсан. 
                      Гэвч тэр өөрийгөө альфа биш доод гаралтай омега гэдгээ мэдэх үед амьдрал нь орвонгоороо эргэв. 
                      Энэ нөхцөл байдал нь омега нартай байж чаддаггүй альфа болох Дужинтай байнга учирснаар хязгаартаа хүрэх аж. 
                      Омегаверсийн ертөнцөд хөл тавьж юу тэдний судасны цохилтыг хурдасгаж, бие нь өөрийн мэдрэлгүй болгож буйг олж мэдээрэй.
                    </div>  
                    <Button variant="primary" size="sm">
                      Шууд унших
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default Banner
