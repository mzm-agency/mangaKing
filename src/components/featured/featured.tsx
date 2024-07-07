
import { Link } from "react-router-dom";
import { Star } from "src/assets/icons";
import { all, top } from "src/lib/dummyData";


const Featured = () => {
  return (
    <div className={`max-w-container w-full mx-auto py-6 px-4 grid gap-6`}>
      <div className={`grid gap-6`}>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Топ 6 Манга
          </h2>
          <div className={`flex gap-4 overflow-auto scrolling gutter-none top !pb-2`}>
            {(top || []).slice(0, 6).map((item: any) => {
              return (
                <div key={item} className={`overflow-hidden card relative rounded-lg border-2 border-secondary-950`}>
                  <Link to={`/product/${item.id}`} className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} >
                    <img className={`object-cover w-full h-full`} src={`${item.image}`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto flex justify-end p-3`}>
                          <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 w-10 h-10 rounded-full flex items-center justify-center border border-secondary-900`}>
                            <span className={`text-secondary-950 text-20 font-bold`}>#{item.number}</span>
                          </div>
                        </div>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-0 p-3`}>
                            <div className={`flex items-center text-default-50 gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>{item.rating}</span>
                            </div>
                            <h5 className={`text-default-50 text-14 xs:leading-4 lg:leading-6 line-clamp-2`}>{item.name}</h5>
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
            Онцлох
          </h2>
          <div className={`grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gutter-none !pb-2`}>
            {(all || []).slice(0, 12).map((item: any) => {
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
      </div>
    </div>
  )
}

export default Featured