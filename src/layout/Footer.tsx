import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDropdown, ArrowIconMd, Facebook, Instagram, TikTok } from '../assets/icons'

const Footer = () => {
  return (
    <footer className={`bg-secondary-950 rounded-t-[24px] xs:pt-8 lg:pt-12 xs:pb-4 lg:pb-8 text-default-50 xs:mt-0 lg:mt-12`}>
      <div className={`max-w-container w-full mx-auto px-4 grid gap-16`}>
        <div className={`grid gap-8`}>
          <div className={`flex items-center justify-between`}>
            <Link to={`/`}>
              <img width={108} src={`/logo-small.png`}/>
            </Link>
            <Link className={`flex items-center gap-8 justify-center h-9 bg-default-50 rounded-full px-4`} to={`/`}>
              <span className={`text-secondary-950 font-semibold text-14`}>Эрх авах</span>
              <span className={`-rotate-90`}>
                <ArrowDropdown/>
              </span>
            </Link>
          </div>
          <div className={`xs:grid lg:flex xs:gap-4 lg:gap-8 items-center`}>
            <Link className={`text-default-50 font-semibold text-[15px]`} to={`/`}>
              Манга Хааны тухай
            </Link>
            <Link className={`text-default-50 font-semibold text-[15px]`} to={`/`}>
              Холбоо барих
            </Link>
            <Link className={`text-default-50 font-semibold text-[15px]`} to={`/`}>
              Оюуны өмч
            </Link>
            <Link className={`text-default-50 font-semibold text-[15px]`} to={`/`}>
              Нууцлалын бодлого
            </Link>
            <Link className={`text-default-50 font-semibold text-[15px]`} to={`/`}>
              Үйлчилгээний нөхцөл
            </Link>
          </div>
        </div>
        <div className={`xs:grid lg:flex gap-4 items-center justify-between`}>
          <div className={`flex items-center gap-5`}>
            <Link target="_blank" to={`/`}>
              <Facebook/>
            </Link>
            <Link target="_blank" to={`/`}>
              <Instagram/>
            </Link>
            <Link target="_blank" to={`/`}>
              <TikTok/>
            </Link>
          </div>
          <p className={`text-12 font-medium`}>© 2024. Manga King.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
 