import { recent } from "src/lib/dummyData";
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
            <TabsTrigger value="recently">Сүүлд уншсан</TabsTrigger>
            <TabsTrigger value="favorites">Уншаад л баймаар</TabsTrigger>
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
                            <span>"3-р бүлэг"</span>
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="favorites">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default MyLibrary