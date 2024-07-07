/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from "src/assets/icons";
import { something } from "src/lib/dummyData";
import { Link, useLocation } from "react-router-dom";

const New = () => {
  return (
    <div className={`max-w-container w-full mx-auto py-6 px-4 grid gap-6`}>
      <div className={`grid gap-6`}>
        <h1 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
          Шинэ манга
        </h1>
        <div className={`grid xs:grid-cols-2 lg:grid-cols-4 xs:gap-2 lg:gap-4`}>
          {(something || []).slice(0, 8).map((item: any) => {
            return (
              <div key={item} className={`overflow-hidden card relative rounded-lg border-2 border-secondary-950`}>
                <Link to={`/product/${item?.id}`} className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} >
                  <img className={`object-cover w-full h-full`} src={`${item.image}`} alt=''/>
                  <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                    <div className={`flex flex-col h-full font-semibold`}>
                      <div className={`flex-auto`}/>
                      <div className={`flex justify-between items-end`}>
                        <div className={`grid xs:gap-1 sm:gap-2 p-3`}>
                          <div className={`flex items-center text-default-50 gap-0.5`}>
                            <Star/>
                            <span className={`xs:text-12 lg:text-14 leading-none`}>{item.rating}</span>
                          </div>
                          <h5 className={`text-default-50 xs:text-14 sm:text-16 md:text-20 lg:text-24 xs:leading-4 lg:leading-6 line-clamp-2`}>{item.name}</h5>
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
    </div>
  )
}

export default New