import { Link } from 'react-router-dom'
import Banner from '../shared/Banner'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carausel'
import { Star } from '../assets/icons'

const top = [
  {
    image: "./manga/top-01.webp",
    number: "1",
    name: "Амттай цус",
    rating: "5/5",
    category: "Хайр дурлал",
    views: "36",
    color: "#ff80bd",
  },
  {
    image: "./manga/top-02.webp",
    number: "2",
    name: "Алуурчин",
    rating: "5/5",
    category: "Тулаант",
    views: "28",
    color: "#80a3ea",
  },
  {
    image: "./manga/top-03.webp",
    number: "3",
    name: "Миний хайрт хань",
    rating: "5/5",
    category: "Романтик",
    views: "41",
    color: "#f1de15",
  },
];

const something = [
  {
    image: "./manga/something-01.webp",
    name: "Шидэт сарнай",
    rating: "5/5",
    category: "Адал явдал",
    views: "36",
    color: "#80a3ea",
  },
  {
    image: "./manga/something-02.webp",
    name: "Миний таван нэрт дайчдын түүх",
    rating: "5/5",
    category: "Хайр дурлал",
    views: "28",
    color: "#f12867",
  },
  {
    image: "./manga/something-03.webp",
    name: "Ичгүүргүй илбэчин",
    rating: "5/5",
    category: "Романтик",
    views: "41",
    color: "#f1de15",
  },
  {
    image: "./manga/something-04.webp",
    name: "Тоглоом дахин давтагдана",
    rating: "5/5",
    category: "Хүчтэн",
    views: "44",
    color: "#37a5b3",
  },
  {
    image: "./manga/something-05.webp",
    name: "Хөрөнгө оруулагч Z! Нөлөөлөл",
    rating: "5/5",
    category: "Тулаант",
    views: "32",
    color: "#54cf17",
  },
  {
    image: "./manga/something-06.webp",
    name: "Чамтай өнгөрөөсөн сайхан цаг минь",
    rating: "5/5",
    category: "Хайр дурлал",
    views: "26",
    color: "#fe3aff",
  },
];

const Home = () => {
  return (
    <>
      <Banner />
      <div className={`max-w-container w-full mx-auto py-10 grid xs:gap-10 lg:gap-20 px-4`}>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Топ 3 Манга
          </h2>
          <div className={`flex xs:gap-4 lg:gap-10 overflow-auto scrolling gutter-none top !pb-2`}>
            {(top || []).map((item: any) => {
              return (
                <div key={item} className={`overflow-hidden card relative rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`${item.image}`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto flex justify-end p-3`}>
                          <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 xs:w-10 md:w-20 xs:h-10 md:h-20 rounded-full flex items-center justify-center border border-secondary-900`}>
                            <span className={`text-secondary-950 xs:text-16 md:text-32 font-bold`}>#{item.number}</span>
                          </div>
                        </div>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid xs:gap-1 sm:gap-2 p-3`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`xs:text-12 lg:text-14 leading-none`}>{item.rating}</span>
                            </div>
                            <h5 className={`text-white xs:text-14 sm:text-16 md:text-20 lg:text-24 xs:leading-4 lg:leading-6 line-clamp-2`}>{item.name}</h5>
                            <span className={`leading-none xs:text-12 sm:text-14 lg:text-16`} style={{ color: item.color }}>{item.category}</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>{item.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>  
              );
            })}
          </div>
        </div>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Шинэ сонирхолтой
          </h2>
          <div className={`flex gap-4 overflow-auto scrolling gutter-none !pb-2`}>
            {(something || []).map((item: any) => {
              return (
                <div key={item} className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`${item.image}`} alt=''/>
                    <div className={`absolute top-0 bottom-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>{item.rating}</span>
                            </div>
                            <h6 className={`text-white text-14 leading-4 line-clamp-2`}>{item.name}</h6>
                            <span className={`leading-none text-12`} style={{ color: item.color }}>{item.category}</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>{item.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Зөвхөн чамд зориуллаа
          </h2>
          <div className={`grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 xs:gap-6 lg:gap-9 text-center uppercase category`}>
            <Link to={`#`} className={`grid gap-4`}>
              <img className={`rounded-full aspect-square object-cover object-center transition-default`} src={`./manga/interest-01.webp`}/>
              <h4 className={`text-secondary-950 font-bold text-16`}>
                Хайр дурлал
              </h4>
            </Link>
            <Link to={`#`} className={`grid gap-4`}>
              <img className={`rounded-full aspect-square object-cover object-center transition-default`} src={`./manga/interest-02.webp`}/>
              <h4 className={`text-secondary-950 font-bold xs:text-14 lg:text-16`}>
                Адал явдал
              </h4>
            </Link>
            <Link to={`#`} className={`grid gap-4`}>
              <img className={`rounded-full aspect-square object-cover object-center transition-default`} src={`./manga/interest-03.webp`}/>
              <h4 className={`text-secondary-950 font-bold xs:text-14 lg:text-16`}>
                Тулаант
              </h4>
            </Link>
            <Link to={`#`} className={`grid gap-4`}>
              <img className={`rounded-full aspect-square object-cover object-center transition-default`} src={`./manga/interest-04.webp`}/>
              <h4 className={`text-secondary-950 font-bold xs:text-14 lg:text-16`}>
                Бизнес
              </h4>
            </Link>
            <Link to={`#`} className={`grid gap-4`}>
              <img className={`rounded-full aspect-square object-cover object-center transition-default`} src={`./manga/interest-05.webp`}/>
              <h4 className={`text-secondary-950 font-bold xs:text-14 lg:text-16`}>
                Аймшиг
              </h4>
            </Link>
            <Link to={`#`} className={`grid gap-4`}>
              <img className={`rounded-full aspect-square object-cover object-center transition-default`} src={`./manga/interest-06.webp`}/>
              <h4 className={`text-secondary-950 font-bold xs:text-14 lg:text-16`}>
                Романтик
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Home
