import { recent, save } from "src/lib/dummyData";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/ui/Tabs"
import { Button } from "src/ui/Button";

const MyLibrary = () => {
  return (
    <div className={`max-w-container w-full mx-auto py-6 px-4`}>
      <div className={`grid gap-6`}>
        <h1 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>Тэмдэглэл</h1>
        <Tabs defaultValue="recently" className={`grid gap-6`}>
          <TabsList>
            <TabsTrigger value="recently">
              <h2 className={`xs:text-14 lg:text-18`}>Сүүлд уншсан</h2>
            </TabsTrigger>
            <TabsTrigger value="favorites">
              <h2 className={`xs:text-14 lg:text-18`}>Хадгалсан</h2>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recently">
            <div className={`grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
              {(recent || []).map((item: any) => {
                return (
                  <div key={item} className={`card-version-2 relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                    <Link to={`/product/${item.id}`}>
                      <img className={`object-cover`} src={`${item.image}`} alt=''/>
                      <div className={`bg-default-50 px-4 py-3`}>
                        <span className={`inline-flex h-5 text-12 font-semibold rounded-md px-1 mb-2 leading-[18px]`} style={{ backgroundColor: item.color }}>{item.category}</span>
                        <h6 className={`uppercase font-bold text-secondary-950 text-20 line-clamp-1 mb-1.5`}>{item.name}</h6>
                        <div className={`grid gap-3`}>
                          <div className={`grid gap-2`}>
                            <div className={`grid gap-1`}>
                              <div className={`text-12 text-secondary-400 font-medium flex gap-0.5`}>
                                Дараагийн бүлэг:<span className={`text-secondary-950 font-semibold`}>Дууссан</span>
                              </div>
                              <div className={`text-12 text-secondary-400 font-medium flex gap-0.5`}>
                                Уншсан бүлэг:<span className={`text-secondary-950 font-semibold`}>50-ийн 1</span>
                              </div>
                            </div>
                            <div className={`bg-secondary-950 h-3 rounded-full overflow-hidden flex items-center px-0.5`}>
                              <span className={`bg-primary-400 h-2 block rounded-full`} style={{ width: '4%' }}/>
                            </div>
                          </div>
                          <Button variant="primary" size="sm">
                            Үргэлжлүүлж унших
                            <span>{item.more}</span>
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="favorites">
            <div className={`grid gap-12`}>
              <div className={`grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                {(save || []).map((item: any) => {
                  return (
                    <div key={item} className={`card-version-2 relative overflow-hidden rounded-lg border-2 border-secondary-950`}>
                      <Link to={`/product/${item.id}`}>
                        <img className={`object-cover`} src={`${item.image}`} alt=''/>
                        <div className={`bg-default-50 px-4 py-3`}>
                          <span className={`inline-flex h-5 text-12 font-semibold rounded-md px-1 mb-2 leading-[18px]`} style={{ backgroundColor: item.color }}>{item.category}</span>
                          <h6 className={`uppercase font-bold text-secondary-950 text-20 line-clamp-1 mb-1.5`}>{item.name}</h6>
                          <div className={`grid gap-3`}>
                            <div className={`grid gap-2`}>
                              <div className={`grid gap-1`}>
                                <div className={`text-12 text-secondary-400 font-medium flex gap-0.5`}>
                                  Дараагийн бүлэг:<span className={`text-secondary-950 font-semibold`}>Дууссан</span>
                                </div>
                                <div className={`text-12 text-secondary-400 font-medium flex gap-0.5`}>
                                  Уншсан бүлэг:<span className={`text-secondary-950 font-semibold`}>50-ийн 1</span>
                                </div>
                              </div>
                              <div className={`bg-secondary-950 h-3 rounded-full overflow-hidden flex items-center px-0.5`}>
                                <span className={`bg-primary-400 h-2 block rounded-full`} style={{ width: '4%' }}/>
                              </div>
                            </div>
                            <Button variant="primary" size="sm">
                              Үргэлжлүүлж унших
                              <span>{item.more}</span>
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              {/* <div className={`grid gap-6`}>
                <h1 className={`xs:text-20 lg:text-40 text-secondary-950 font-bold uppercase leading-none`}>
                  Санал болгож буй
                </h1>
                <div className={`grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gutter-none !pb-2`}>
                  {(popular || []).map((item: any) => {
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
              </div> */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default MyLibrary