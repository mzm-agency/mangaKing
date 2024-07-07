/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from "src/assets/icons";
import { all } from "src/lib/dummyData";
import { Link, useLocation } from "react-router-dom";

const Menu = [
  { name: "Бүгд", 
    link: `/genres`,
  },
  { name: "Адал явдал", 
    link: `/`, 
  },
  { name: "Хайр дурлал", 
    link: `/`, 
  },
  { name: "Уран зөгнөл", 
    link: `/`, 
  },
  { name: "Тулааны урлаг", 
    link: `/`, 
  },
  { name: "Инээдмийн", 
    link: `/`, 
  },
  { name: "Драма", 
    link: `/`, 
  },
  { name: "Аймшиг", 
    link: `/`, 
  },
  { name: "Дахин төрөлт", 
    link: `/`, 
  },
];

const Genres = () => {
  const location = useLocation();
  return (
    <div className={`max-w-container w-full mx-auto py-6 px-4 grid gap-6`}>
      <div className={`grid gap-6`}>
        <h1 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>Жанрууд</h1>
        <div className={`xs:text-14 lg:text-16 flex gap-2 overflow-auto scrolling gutter-none`}>
          {Menu?.map((item: any, index: number) => {
            const active = location?.pathname == item.link;
            return (
              <Link key={`${index}`}
                to={`${item.link}`}
                target={`${item.target ? '_blank' : '_self'}`}
                className={`flex items-center rounded-lg
                ${active ? 'bg-primary-400 xs:h-8 lg:h-10' : 'border-2 border-black'
                  }`}>
                <div className={`font-bold px-4 h-5 text-black whitespace-nowrap leading-[18px]`}>
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={`grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gutter-none !pb-2`}>
        {(all || []).map((item: any) => {
          return (
            <div key={item} className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
              <Link to={`/product/${item.id}`} className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} >
                <img className={`object-cover w-full h-full`} src={`${item.image}`} alt=''/>
                <div className={`absolute top-0 bottom-0 left-0 w-full h-full z-10`}>
                  <div className={`flex flex-col h-full font-semibold`}>
                    <div className={`flex-auto`}/>
                    <div className={`flex justify-between items-end`}>
                      <div className={`grid gap-1 p-2`}>
                        <div className={`flex items-center text-default-50 gap-0.5`}>
                          <Star/>
                          <span className={`text-12 leading-none`}>{item.rating}</span>
                        </div>
                        <h6 className={`text-default-50 text-14 leading-4 line-clamp-2`}>{item.name}</h6>
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
  )
}

export default Genres