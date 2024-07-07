import { Link } from 'react-router-dom'
import Banner from '../shared/Banner'
import { ArrowIconMd, Star } from '../assets/icons'
import { popular, reading, something, top } from '../lib/dummyData';
import { Button } from '../ui/Button';

const Home = () => {
  return (
    <>
      <Banner />
      <div className={`max-w-container w-full mx-auto py-10 grid xs:gap-10 lg:gap-20 px-4`}>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h3 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Үргэлжлүүлж унших
          </h3>
          <div className={`flex gap-4 overflow-auto scrolling gutter-none !pb-2 more`}>
            {(reading || []).map((item: any) => {
              return (
                <div key={item} className={`card relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                  <Link to={`/product/${item.id}`} className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} >
                    <img className={`object-cover w-full h-full`} src={`${item.image}`} alt=''/>
                    <div className={`absolute top-0 bottom-0 left-0 w-full h-full z-10`}>
                      <div className={`flex flex-col h-full font-semibold`}>
                        <div className={`flex-auto`}/>
                        <div className={`flex justify-between items-end`}>
                          <div className={`grid gap-1 p-2`}>
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
            <Link to={`#`} className={`w-full h-full`}>
              <div className={`flex w-full h-full card relative overflow-hidden rounded-lg !bg-secondary-950 border-2 border-secondary-950`}>
                <div className={`flex items-center justify-between w-full bubble`}>
                  <div className={`relative z-10 px-5`}>
                    <div className={`text-default-50 font-bold uppercase text-32 leading-9 my-4`}>
                      Илүүг <br/> уншмаар <br/> байна уу
                    </div>
                    <div className={`shadow-white hover:shadow-white-add transition-default border border-default-50 rounded-full inline-flex gap-2 items-center pt-1.5 pb-2 pl-6 pr-5 hover`}>
                      <span className={`text-default-50 font-bold text-14`}>Цааш үзэх</span>
                      <span className={`relative top-px`}><ArrowIconMd/></span>
                    </div>
                  </div>
                  <div className={`absolute right-0 top-0`}>
                    <img src={`./bubble/continue.png`}/>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Топ 3 Манга
          </h2>
          <div className={`flex xs:gap-4 lg:gap-10 overflow-auto scrolling gutter-none top !pb-2`}>
            {(top || []).slice(0, 3).map((item: any) => {
              return (
                <div key={item} className={`overflow-hidden card relative rounded-lg border-2 border-secondary-950`}>
                  <Link to={`/product/${item.id}`} className={`w-full h-full before:absolute before:bottom-0 before:w-full before:h-full`} >
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
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h2 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Шинэ сонирхолтой
          </h2>
          <div className={`flex gap-4 overflow-auto scrolling gutter-none !pb-2`}>
            {(something || []).map((item: any) => {
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
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h3 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Зөвхөн чамд зориуллаа
          </h3>
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
        <div className={`overflow-hidden rounded-2xl relative`}>
         <Link to={`#`}>
            <picture>
              <source srcSet={`/banner/desktop-04.webp`} media="(min-width: 768px)" />
              <img className={`object-cover object-center`} src={`/banner/mobile-04.webp`} alt="" />
            </picture>
            <div className={`absolute top-0 left-0 xs:px-4 lg:px-10 grid xs:items-start lg:items-center h-full xs:pt-4 lg:pt-0`}>
              <div className={``}>
                <div className={`grid gap-2`}>
                  <div className={`text-primary-400 font-bold text-18`}>Танд таалагдаж магадгүй</div>
                  <img className={`object-cover object-center`} width={375} src={`/banner/banner-text.webp`} alt="" />
                </div>
                <div>
                  <div className={`inline-flex text-10 font-semibold px-1 pb-px items-center leading-[18px] rounded-md my-1`} style={{backgroundColor: '#9cabc4'}}>
                    Триллер
                  </div>
                  <div className={`text-default-50 text-14 font-medium text-shadow line-clamp-3 mb-4 w-96`}>
                    Хэсон амьдралынхаа туршид өөрийгөө удамшлын сугалаанд хожиж альфа хэмээн бодож амьдарсан. 
                    Гэвч тэр өөрийгөө альфа биш доод гаралтай омега гэдгээ мэдэх үед амьдрал нь орвонгоороо эргэв. 
                    Энэ нөхцөл байдал нь омега нартай байж чаддаггүй альфа болох Дужинтай байнга учирснаар хязгаартаа хүрэх аж. 
                    Омегаверсийн ертөнцөд хөл тавьж юу тэдний судасны цохилтыг хурдасгаж, бие нь өөрийн мэдрэлгүй болгож буйг олж мэдээрэй.
                  </div>
                  <div className={`flex items-center gap-4`}>
                    <Button variant="primary" size="sm">
                      Шууд унших
                    </Button>
                    <div className={`text-default-50 font-bold`}>
                      Илүү дэлгэрэнгүй
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={`grid xs:gap-4 lg:gap-8`}>
          <h3 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
            Санал болгое
          </h3>
          <div className={`grid xs:grid-cols-2 lg:grid-cols-4 xs:gap-2 lg:gap-4`}>
            {(popular || []).slice(0, 4).map((item: any) => {
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
    </>
  )
  
}

export default Home
