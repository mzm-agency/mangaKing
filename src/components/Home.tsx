import { Link } from 'react-router-dom'
import Banner from '../shared/Banner'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carausel'
import { Star } from '../assets/icons'


const Home = () => {
  return (
    <>
      <Banner />
      <div className={`max-w-container w-full mx-auto py-10 grid xs:gap-10 lg:gap-20`}>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase px-4 leading-none`}>
            Топ 3 Манга
          </h2>
          <div className={``}>
            <div className={`flex xs:gap-4 lg:gap-10 overflow-x-scroll`}>
              <div className={`xs:basis-[316px] lg:basis-[396px] card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                  <img className={`object-cover w-full h-full aspect-auto`} src={`./manga/top-01.webp`} alt=''/>
                  <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                    <div className={`flex flex-col h-full font-semibold`}>
                      <div className={`flex-auto flex justify-end p-3`}>
                        <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 xs:w-10 lg:w-20 xs:h-10 lg:h-20 rounded-full flex items-center justify-center border border-secondary-900`}>
                          <span className={`text-secondary-950 xs:text-16 lg:text-32 font-bold`}>#1</span>
                        </div>
                      </div>
                      <div className={`flex justify-between items-end`}>
                        <div className={`grid xs:gap-1 lg:gap-2 p-3`}>
                          <div className={`flex items-center text-white gap-0.5`}>
                            <Star/>
                            <span className={`xs:text-12 lg:text-14 leading-none`}>5/5</span>
                          </div>
                          <h5 className={`text-white xs:text-14 lg:text-24 xs:leading-4 lg:leading-6`}>Амттай цус</h5>
                          <span className={`leading-none xs:text-12 lg:text-16`} style={{color: '#ff80bd'}}>Хайр дурлал</span>
                        </div>
                        <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                          <span className={`text-12 font-semibold`}>50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={`xs:basis-[316px] lg:basis-[396px] card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                  <img className={`object-cover w-full h-full`} src={`./manga/top-02.webp`} alt=''/>
                  <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                    <div className={`flex flex-col h-full font-semibold`}>
                      <div className={`flex-auto flex justify-end p-3`}>
                        <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 xs:w-10 lg:w-20 xs:h-10 lg:h-20 rounded-full flex items-center justify-center border border-secondary-900`}>
                          <span className={`text-secondary-950 xs:text-16 lg:text-32 font-bold`}>#2</span>
                        </div>
                      </div>
                      <div className={`flex justify-between items-end`}>
                        <div className={`grid xs:gap-1 lg:gap-2 p-3`}>
                          <div className={`flex items-center text-white gap-0.5`}>
                            <Star/>
                            <span className={`xs:text-12 lg:text-14 leading-none`}>5/5</span>
                          </div>
                          <h5 className={`text-white xs:text-14 lg:text-24 xs:leading-4 lg:leading-6`}>Алуурчин</h5>
                          <span className={`leading-none xs:text-12 lg:text-16`} style={{color: '#80a3ea'}}>Адал явдал</span>
                        </div>
                        <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                          <span className={`text-12 font-semibold`}>46</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={`xs:basis-[316px] lg:basis-[396px] card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                  <img className={`object-cover w-full h-full`} src={`./manga/top-03.webp`} alt=''/>
                  <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                    <div className={`flex flex-col h-full font-semibold`}>
                      <div className={`flex-auto flex justify-end p-3`}>
                        <div style={{boxShadow: '2px 2px 0 #000'}} className={`bg-primary-400 xs:w-10 lg:w-20 xs:h-10 lg:h-20 rounded-full flex items-center justify-center border border-secondary-900`}>
                          <span className={`text-secondary-950 xs:text-16 lg:text-32 font-bold`}>#3</span>
                        </div>
                      </div>
                      <div className={`flex justify-between items-end`}>
                        <div className={`grid xs:gap-1 lg:gap-2 p-3`}>
                          <div className={`flex items-center text-white gap-0.5`}>
                            <Star/>
                            <span className={`xs:text-12 lg:text-14 leading-none`}>5/5</span>
                          </div>
                          <h5 className={`text-white xs:text-14 lg:text-24 xs:leading-4 lg:leading-6`}>Миний хайрт хань</h5>
                          <span className={`leading-none xs:text-12 lg:text-16`} style={{color: '#ffd704'}}>Романтик</span>
                        </div>
                        <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                          <span className={`text-12 font-semibold`}>36</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase px-4 leading-none`}>
            Шинэ сонирхолтой
          </h2>
          <Carousel className={`xs:pl-0 lg:pl-4 xs:pr-0 lg:pr-4`}>
            <CarouselContent className={`flex gap-0 ml-0 xs:pl-4 lg:pl-0`}>
              <CarouselItem className={`xs:basis-[154px] lg:basis-[206px] pb-1.5`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/something-01.webp`} alt=''/>
                    <div className={`absolute top-0 bottom-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>5/5</span>
                            </div>
                            <h6 className={`text-white text-14 leading-4`}>Цэцгэн дайн</h6>
                            <span className={`leading-none text-12`} style={{color: '#80a3ea'}}>Адал явдал</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>59</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
              <CarouselItem className={`xs:basis-[154px] lg:basis-[206px] pb-1.5`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/something-02.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>5/5</span>
                            </div>
                            <h6 className={`text-white text-14 leading-4`}>Миний таван нэрт дайчдын түүх</h6>
                            <span className={`leading-none  text-12`} style={{color: '#f9143f'}}>Хайр дурлал</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>32</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
              <CarouselItem className={`xs:basis-[154px] lg:basis-[206px] pb-1.5`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/something-03.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>5/5</span>
                            </div>
                            <h6 className={`text-white text-14 leading-4`}>Ичгүүргүй илбэчин</h6>
                            <span className={`leading-none  text-12`} style={{color: '#fff15c'}}>Романтик</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>41</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
              <CarouselItem className={`xs:basis-[154px] lg:basis-[206px] pb-1.5`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/something-04.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>5/5</span>
                            </div>
                            <h6 className={`text-white text-14 leading-4`}>Тоглоом дахин давтагдана</h6>
                            <span className={`leading-none  text-12`} style={{color: '#37a5b3'}}>Аймшиг</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>66</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
              <CarouselItem className={`xs:basis-[154px] lg:basis-[206px] pb-1.5`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/something-05.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>5/5</span>
                            </div>
                            <h6 className={`text-white text-14 leading-4`}>Хөрөнгө оруулагч Z! Нөлөөлөл</h6>
                            <span className={`leading-none  text-12`} style={{color: '#b3b3b3'}}>Тулаант</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
                            <span className={`text-12 font-semibold`}>75</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
              <CarouselItem className={`xs:basis-[154px] lg:basis-[206px] pb-1.5`}>
                <div className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} to={`#`}>
                    <img className={`object-cover w-full h-full`} src={`./manga/something-06.webp`} alt=''/>
                    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
                            <div className={`flex items-center text-white gap-0.5`}>
                              <Star/>
                              <span className={`text-12 leading-none`}>5/5</span>
                            </div>
                            <h6 className={`text-white text-14 leading-4`}>Чамтай өнгөрөөсөн сайхан цаг минь</h6>
                            <span className={`leading-none  text-12`} style={{color: '#ff80bd'}}>Бизнес</span>
                          </div>
                          <div className={`bg-primary-400 flex flex-image items-center justify-center w-5 h-5`} style={{borderRadius: '4px 0 0'}}>
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
        <div className={`grid xs:gap-4 lg:gap-8 px-4`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Зөвхөн чамд зориуллаа
          </h2>
          <div className={`grid xs:grid-cols-2 lg:grid-cols-6 xs:gap-6 lg:gap-9 text-center uppercase category`}>
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
