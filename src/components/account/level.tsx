import { Button } from "src/ui/Button"

const Level = () => {
  return (
    <div className={`grid gap-6`}>
      <div className={`featured overflow-hidden bg-black w-full xs:h-44 md:h-48 lg:h-60 relative`}>
        <div className={`flex xs:justify-start lg:justify-center items-center relative z-10 h-full px-4`}>
          <h1 className={`xs:text-left lg:text-center text-white xs:text-24 md:text-32 lg:text-40 font-bold leading-none`}>
            <span className={`text-primary-400 uppercase`}>Хязгааргүй хандах</span> <br/>
            <span className={`uppercase`}>3000 гаруй анги</span>
            <span className={`block xs:text-16 lg:text-20 mt-4 font-medium`}>
              Долоо хоног бүр шинэ комикс
            </span>
          </h1>
        </div>
        <div>
          <img className={`absolute top-0 right-4 xs:block md:hidden lg:hidden z-10 w-32`} src="./banner/payments-image.png"/>
          <img className={`absolute top-2 right-0 xs:hidden md:block lg:block z-10`} src="./banner/payments-tablet.png"/>
          <img className={`absolute top-0 xs:hidden lg:block z-10`} src="./banner/payments-desktop.png"/>
        </div>
      </div>
      <div className={`max-w-[768px] w-full mx-auto grid gap-6`}>
        <h2 className={`text-center font-bold xs:text-20 lg:text-40 uppercase`}>
          Худалдан авалтын төрлүүд
        </h2>
        <div>
          <div className={`flex items-center justify-between`}>
            <div className={`border-y border-secondary-100 w-full py-4 flex items-center justify-between px-4 cursor-pointer`}>
              <div className={`flex items-center`}>
                <div className={`font-bold grid xs:w-20 lg:w-44`}>
                  <span className={`bg-primary-400 text-10 rounded inline-flex w-14 px-2 pay`}>Premium</span>
                  <span className={`xs:text-14 lg:text-24`}>7 хоног</span>
                </div>
                <div className={`grid font-regular text-secondary-700 xs:text-12 lg:text-14`}>
                  <span>Бүх мангаг унших боломжтой</span>
                  <span>Та туршаад үзээрэй</span>
                </div>
              </div>
              <div className={`font-bold xs:text-16 lg:text-20 grid text-right`}>
                1,800₮
              </div>
            </div>
          </div>
          <div className={`flex items-center justify-between`}>
            <div className={`border-y border-secondary-100 w-full py-4 flex items-center justify-between px-4 cursor-pointer active-pay`}>
              <div className={`flex items-center`}>
                <div className={`font-bold grid xs:w-20 lg:w-44`}>
                  <span className={`bg-primary-400 text-10 rounded inline-flex w-14 px-2 pay`}>Premium</span>
                  <span className={`xs:text-14 lg:text-24`}>1 сар</span>
                </div>
                <div className={`grid font-regular text-secondary-700 xs:text-12 lg:text-14`}>
                  <span>Бүх мангаг унших боломжтой</span>
                  <span>Та туршаад үзээрэй</span>
                </div>
              </div>
              <div className={`font-bold xs:text-14 lg:text-20 grid text-right`}>
                5,000₮
                <span className={`xs:text-10 lg:text-12`}>Хэмнэлт: 2,200₮</span>
              </div>
            </div>
          </div>
          <div className={`flex items-center justify-between`}>
            <div className={`border-y border-secondary-100 w-full py-4 flex items-center justify-between px-4 cursor-pointer`}>
              <div className={`flex items-center`}>
                <div className={`font-bold grid xs:w-20 lg:w-44`}>
                  <span className={`bg-primary-400 text-10 rounded inline-flex w-14 px-2 pay`}>Premium</span>
                  <span className={`xs:text-14 lg:text-24`}>3 сар</span>
                </div>
                <div className={`grid font-regular text-secondary-700 xs:text-12 lg:text-14`}>
                  <span>Бүх мангаг унших боломжтой</span>
                  <span>Та туршаад үзээрэй</span>
                </div>
              </div>
              <div className={`font-bold xs:text-14 lg:text-20 grid text-right`}>
                20,000₮
                <span className={`xs:text-10 lg:text-12`}>Хэмнэлт: 1,600₮</span>
              </div>
            </div>
          </div>
          <div className={`flex items-center justify-between`}>
            <div className={`border-y border-secondary-100 w-full py-4 flex items-center justify-between px-4 cursor-pointer`}>
              <div className={`flex items-center`}>
                <div className={`font-bold grid xs:w-20 lg:w-44`}>
                  <span className={`bg-primary-400 text-10 rounded inline-flex w-14 px-2 pay`}>Premium</span>
                  <span className={`xs:text-14 lg:text-24`}>6 сар</span>
                </div>
                <div className={`grid font-regular text-secondary-700 xs:text-12 lg:text-14`}>
                  <span>Бүх мангаг унших боломжтой.</span>
                  <span>Эвентэд үнэгүй оролцох боломжтой</span>
                </div>
              </div>
              <div className={`font-bold xs:text-14 lg:text-20 grid text-right`}>
                35,000₮
                <span className={`xs:text-10 lg:text-12`}>Хэмнэлт: 8,200₮</span>
              </div>
            </div>
          </div>
        </div>
        <Button variant="primary" size="md">
          Худалдаж авах
        </Button>
        <ul className={`font-regular text-16 text-secondary-700`}>
          <li>
            • Төлбөр төлөгдсөнөөс хойш 5 минутанд багц идэвхжинэ.
          </li>
          <li>
            • Аливаа санал, гомдолыг <a href="#" className={`underline`}>support@mangaking.com</a> руу илгээж шийдвэрлүүлнэ.
          </li>
          <li>
            • Төлбөр буцаагдахгүй болохыг анхаарна уу!
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Level