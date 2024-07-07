import { Link, useParams } from "react-router-dom";
import { Rate, Save, Sort, Star } from "../assets/icons"
import { something } from "../lib/dummyData";
import { Button } from "../ui/Button";

const ProductDetail = () => {
  const { slug } = useParams()
  
  return (
    <div className={`max-w-container w-full mx-auto py-6 px-4 grid gap-12`}>
      <div className={`-mx-4 -mt-6 -mb-6 xs:block lg:hidden`}>
        <img src={`/manga/recent-08.webp`}/>
      </div>
      <div className={`grid items-center xs:grid-cols-1 lg:grid-cols-2 gap-8`}>
        <div className={`grid gap-4`}>
          <div className={`flex items-center gap-1`}>
            <Link to={`#`} className={`bg-[#80a3ea] inline-flex items-center rounded h-5 pb-1.5 pt-1 px-1 leading-none`}>
              <span className={`font-medium text-black text-12`}>Тулаант</span>
            </Link>
            <div className={`bg-[#739ab3] uppercase h-5 rounded leading-none px-1`}>
              <span className={`text-white font-semibold text-12`}>Дууссан</span>
            </div>
            <div className={`font-bold text-14 px-1 flex items-center gap-1`}>
              4.7/5
              <Star/>
            </div>
          </div>
          <h1 className={`text-black font-bold xs:text-28 lg:text-40 uppercase leading-none`}>
            Алуурчны сүүлийн тулаан
          </h1>
          <div className={`flex items-center gap-4`}>
            <div className={`cursor-pointer flex items-center gap-2`}>
              <Save/>
              <span className={`font-semibold`}>Тэмдэглэлд хадгалах</span>
            </div>
            <div className={`cursor-pointer flex items-center gap-2`}>
              <Rate/>
              <span className={`font-semibold`}>Үнэлгээ өгөх</span>
            </div>
          </div>
          <p className={`text-secondary-500 font-regular text-16`}>
            Хэсон амьдралынхаа туршид өөрийгөө удамшлын сугалаанд хожиж альфа хэмээн бодож амьдарсан. 
            Гэвч тэр өөрийгөө альфа биш доод гаралтай омега гэдгээ мэдэх үед амьдрал нь орвонгоороо эргэв. 
            Энэ нөхцөл байдал нь омега нартай байж чаддаггүй альфа болох Дужинтай байнга учирснаар хязгаартаа хүрэх аж. 
            Омегаверсийн ертөнцөд хөл тавьж юу тэдний судасны цохилтыг хурдасгаж, бие нь өөрийн мэдрэлгүй болгож буйг олж мэдээрэй.
          </p>
          <div className={`flex items-center gap-3`}>
            <Link to={`#`} className={`underline font-medium text-14 text-secondary-700`}>
              #Тулаант
            </Link>
            <Link to={`#`} className={`underline font-medium text-14 text-secondary-700`}>
              #Хайр дурлал
            </Link>
            <Link to={`#`} className={`underline font-medium text-14 text-secondary-700`}>
              #Шидтэн
            </Link>
            <Link to={`#`} className={`underline font-medium text-14 text-secondary-700`}>
              #Хүч чадал
            </Link>
          </div>
          <div className={`xs:w-full lg:w-40`}>
            <Link to={`/product/${slug}/read/1`}  className={`bg-primary-400 inline-flex items-center justify-center w-full h-12 rounded-full px-6 hover:bg-primary-500 transition-default`}>
              <span className={`font-bold leading-none text-16 capitalize`}>Уншиж эхлэх</span>
            </Link>
          </div>
        </div>
        <div className={`border-2 border-secondary-950 rounded-3xl overflow-hidden xs:hidden lg:block`} style={{filter: 'drop-shadow(4px 4px 0 #000000)'}}>
          <img src={`/manga/recent-08.webp`}/>
        </div>
      </div>
      <div className={`xs:grid lg:flex gap-12`}>
        <div className={`w-full xs:block lg:flex-1`}>
          <div className={`flex items-center justify-between font-semibold text-14 border-b border-secondary-100 pb-4`}>
            <div className={` capitalize`}>15 анги</div>
            <div className={`flex items-center gap-1 cursor-pointer`}>
              <span style={{transform: 'rotateX(0deg)'}}><Sort/></span>
              <span className={`leading-none`}>Сүүлийнх нь эхэндээ</span>
            </div>
          </div>
          <div className={`grid`}>
            <Link to={`/product/${slug}/read/1`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-01.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  1-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`}>
                Уншсан
              </div>
            </Link>
            <Link to={`/product/${slug}/read/1`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
              <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-02.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  2-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#6fc600'}}>
                Үнэгүй
              </div>
            </Link>
            <Link to={`/product/${slug}/read/1`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
              <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-03.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  3-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#6fc600'}}>
                Үнэгүй
              </div>
            </Link>
            <div className={`xs:grid lg:flex gap-4 items-center justify-between bg-primary-400 p-4 rounded-lg my-4`}>
              <p className={`uppercase text-18 text-black font-bold`}>
                Та үргэлжлэлийг уншихийг хүсвэл Эрх худалдан авч уншина уу
              </p>
              <Link to={`/buy`} className={`border-2 border-black h-12 flex items-center justify-center rounded-full card-link`}>
                <span className={`font-bold px-6 leading-none`}>Эрх авах</span>
              </Link>
            </div>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-04.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  4-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-05.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  5-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-06.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  6-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-07.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  7-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-08.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  8-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-09.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  9-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-10.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  10-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-11.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  11-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-12.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  12-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-13.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  13-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-14.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  14-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
            <Link to={`/buy`} className={`border-b flex items-center justify-between font-semibold py-4 last:border-none`}>
              <div className={`flex items-center gap-4`}>
                <div className={`rounded-lg overflow-hidden border-2 border-black card-link`}>
                  <span className={`lock absolute top-2 left-2 z-10 w-4 h-4`}/>
                  <img className={`w-[156px] h-[92px] object-cover object-center`} src={`/manga/view-15.webp`}/>
                </div>
                <div className={`font-bold text-black text-20 grid`}>
                  15-р анги
                  <span className={`font-medium text-12 text-secondary-300`}>2024 оны 3 сарын 30</span>
                </div>
              </div>
              <div className={`uppercase text-secondary-500 text-14`} style={{color: '#ff7426'}}>
                Төлбөртэй
              </div>
            </Link>
          </div>
        </div> 
        <div className={`xs:w-full lg:w-80 h-full`}>
          <h2 className={`text-24 text-secondary-950 font-bold uppercase leading-none`}>
            Танд таалагдана
          </h2>
          <div className={`grid grid-cols-2 gap-4 mt-4`}>
            {(something || []).slice(0, 4).map((item: any) => {
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
    </div>
  )
}
export default ProductDetail