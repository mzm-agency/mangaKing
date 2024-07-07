import React from 'react'
import { ArrowLeft, ArrowLeftFirst, ArrowRight, ArrowRightFirst, List } from '../assets/icons'
import { Link } from 'react-router-dom'

const ReadDetail = () => {
  return (
    <div className={`text-white`}>
      <div className={`fixed top-0 bg-black/70 w-full xs:pl-1.5 lg:pl-0 xs:pr-3 lg:pr-0`}>
        <div className={`xs:w-full lg:w-[992px] mx-auto flex items-center justify-between z-10 py-3`}>
          <Link className={`flex items-center gap-3`} to={`/`}>
            <ArrowLeftFirst/>
            <div>
              <h1 className={`font-semibold xs:text-14 lg:text-16 leading-none`}>
                Алуурчны сүүлийн тулаан
              </h1>
              <span className={`font-regular xs:text-12 lg:text-14`}>Анги 1</span>
            </div>
          </Link>
          <Link to={`/`}>
            <div className={`w-24`}>
              <img src={`/logo-small.png`}/>
            </div>
          </Link>
        </div>
      </div>
      <div className={`fixed bottom-0 bg-black/70 w-full z-10 px-3`}>
        <div className={`xs:w-full lg:w-[468px] mx-auto flex items-center justify-between z-10 py-3 text-16 cursor-pointer`}>
          <Link to={`/`} className={`font-semibold flex items-center gap-2 text-[#8c877e]`}>
            <ArrowLeft/>
            Өмнөх
          </Link>
          <Link to={`/`} className={`font-semibold flex items-center gap-2 text-white`}>
            <List/>
            Ангиуд
          </Link>
          <Link to={`/`} className={`font-semibold flex items-center gap-2 text-white`}>
            Дараах
            <ArrowRight/>
          </Link>
        </div>
      </div>
      <div className={`h-full xs:w-full lg:w-[992px] mx-auto grid gap-8`}>
        <div>
          <img src={`/manga/detail-01.webp`}/>
          <img src={`/manga/detail-02.webp`}/>
          <img src={`/manga/detail-03.webp`}/>
          <img src={`/manga/detail-04.webp`}/>
          <img src={`/manga/detail-05.webp`}/>
          <img src={`/manga/detail-06.webp`}/>
          <img src={`/manga/detail-07.webp`}/>
          <img src={`/manga/detail-08.webp`}/>
          <img src={`/manga/detail-09.webp`}/>
          <img src={`/manga/detail-10.webp`}/>
          <img src={`/manga/detail-11.webp`}/>
          <img src={`/manga/detail-12.webp`}/>
          <img src={`/manga/detail-13.webp`}/>
          <img src={`/manga/detail-14.webp`}/>
          <img src={`/manga/detail-15.webp`}/>
          <img src={`/manga/detail-16.webp`}/>
          <img src={`/manga/detail-17.webp`}/>
          <img src={`/manga/detail-18.webp`}/>
          <img src={`/manga/detail-19.webp`}/>
          <img src={`/manga/detail-20.webp`}/>
          <img src={`/manga/detail-21.webp`}/>
          <img src={`/manga/detail-22.webp`}/>
          <img src={`/manga/detail-23.webp`}/>
          <img src={`/manga/detail-24.webp`}/>
          <img src={`/manga/detail-25.webp`}/>
          <img src={`/manga/detail-26.webp`}/>
          <img src={`/manga/detail-27.webp`}/>
          <img src={`/manga/detail-28.webp`}/>
          <img src={`/manga/detail-29.webp`}/>
          <img src={`/manga/detail-30.webp`}/>
          <img src={`/manga/detail-31.webp`}/>
          <img src={`/manga/detail-32.webp`}/>
          <img src={`/manga/detail-33.webp`}/>
          <img src={`/manga/detail-34.webp`}/>
          <img src={`/manga/detail-35.webp`}/>
          <img src={`/manga/detail-36.webp`}/>
          <img src={`/manga/detail-37.webp`}/>
          <img src={`/manga/detail-38.webp`}/>
          <img src={`/manga/detail-39.webp`}/>
          <img src={`/manga/detail-40.webp`}/>
          <img src={`/manga/detail-41.webp`}/>
          <img src={`/manga/detail-42.webp`}/>
          <img src={`/manga/detail-43.webp`}/>
          <img src={`/manga/detail-44.webp`}/>
          <img src={`/manga/detail-45.webp`}/>
          <img src={`/manga/detail-46.webp`}/>
          <img src={`/manga/detail-47.webp`}/>
          <img src={`/manga/detail-48.webp`}/>
          <img src={`/manga/detail-49.webp`}/>
          <img src={`/manga/detail-50.webp`}/>
          <img src={`/manga/detail-51.webp`}/>
          <img src={`/manga/detail-52.webp`}/>
          <img src={`/manga/detail-53.webp`}/>
          <img src={`/manga/detail-54.webp`}/>
        </div>
        <div className={`mb-20 grid gap-6 px-3`}>
          <Link to={`#`} className={`card-link relative overflow-hidden rounded-lg border-2 border-secondary-950 flex items-center justify-between p-2`}>
            <div className={`flex items-center gap-4`}>
              <div className={`rounded-lg overflow-hidden`}>
                <img className={`w-40 h-[112px] object-cover object-center`} src={`/manga/view-03.webp`}/>
              </div>
              <div className={`font-bold text-black text-20`}>
                2-р анги унших
              </div>
            </div>
            <div className={`h-28 bg-primary-400 w-10 rounded-lg flex items-center justify-center`}>
              <ArrowRightFirst/>
            </div>
          </Link>
          <div className={`text-center grid gap-2 justify-center`}>
            <img className={`mx-auto`} width={112} src={`/logo-dark.png`}/>
            <p className={`text-black/70 text-12 font-regular`}>© 2024. Manga King.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadDetail
