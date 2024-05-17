import { Link } from 'react-router-dom'
import Banner from '../shared/Banner'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carausel'
import { Star } from '../assets/icons'


const Home = () => {
  return (
    <>
      <Banner />
      <div className={`max-w-container w-full mx-auto px-4 py-10`}>
        <div className={`grid gap-6`}>
          <h2 className={`text-40 text-secondary-950 font-bold uppercase`}>
            Топ 3 Манга
          </h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem className={`basis-1/3 pb-3`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`relative w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/top-01.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto flex justify-end p-3`}>
                          <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 w-20 h-20 rounded-full flex items-center justify-center border border-secondary-900`}>
                            <span className={`text-secondary-950 text-32 font-bold`}>#1</span>
                          </div>
                        </div>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-2 p-3`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-14 leading-none`}>5/5</span>
                            </div>
                            <h3 className={`text-white text-24 leading-6`}>Амттай цус</h3>
                            <span className={`leading-none`} style={{color: '#ff80bd'}}>Хайр дурлал</span>
                          </div>
                          <div className={`bg-primary-400 flex items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>50</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
              <CarouselItem className={`basis-1/3 pb-3`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`relative w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/top-02.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto flex justify-end p-3`}>
                          <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 w-20 h-20 rounded-full flex items-center justify-center border border-secondary-900`}>
                            <span className={`text-secondary-950 text-32 font-bold`}>#2</span>
                          </div>
                        </div>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-2 p-3`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-14 leading-none`}>5/5</span>
                            </div>
                            <h3 className={`text-white text-24 leading-6`}>Алуурчин</h3>
                            <span className={`leading-none`} style={{color: '#80a3ea'}}>Адал явдал</span>
                          </div>
                          <div className={`bg-primary-400 flex items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>46</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
              <CarouselItem className={`basis-1/3 pb-3`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`relative w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/top-03.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto flex justify-end p-3`}>
                          <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 w-20 h-20 rounded-full flex items-center justify-center border border-secondary-900`}>
                            <span className={`text-secondary-950 text-32 font-bold`}>#3</span>
                          </div>
                        </div>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-2 p-3`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-14 leading-none`}>5/5</span>
                            </div>
                            <h3 className={`text-white text-24 leading-6`}>Миний хайрт хань</h3>
                            <span className={`leading-none`} style={{color: '#ff80bd'}}>Романтик</span>
                          </div>
                          <div className={`bg-primary-400 flex items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>36</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  )
  
}

export default Home
