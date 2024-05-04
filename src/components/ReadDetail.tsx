import React from 'react'
import { ArrowIcon, EposidesIcon, SimpleArrow } from '../assets/icons'
import { Link } from 'react-router-dom'

const ReadDetail = () => {
  return (
    <div className='bg-black/40'>
      <div className='fixed inset-x-0 h-[70px] bg-black/80 top-0'>
        <div className='w-[900px] h-full mx-auto flex items-center justify-between px-2'>
          <div className='flex gap-3 items-center'>
            <SimpleArrow />
            <div className='flex-col flex gap-1'>
              <p className='leading-none text-white text-sm font-semibold'>My Beautiful Time with You</p>
              <p className='leading-none text-white text-xs font-regular'>3-р анги</p>
            </div>
          </div>
          <img className='h-6' src='/logo.png' />
        </div>
      </div>
      <div className='fixed inset-x-0 h-[70px] bg-black/80 bottom-0'>

        <div className='flex gap-12 items-center justify-center h-full'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <ArrowIcon />
            <p className='text-sm font-semibold text-white'>Өмнөх</p>
          </div>
          <Link to={`/product/2`} className='flex items-center gap-2 cursor-pointer'>
            <div className=''> <EposidesIcon /></div>
            <p className='text-sm font-semibold text-white'>Ангиуд</p>
          </Link>
          <div className='flex items-center gap-2 cursor-pointer'>
            <p className='text-sm font-semibold text-white'>Дараа</p>
            <div className='rotate-180'> <ArrowIcon /></div>
          </div>

        </div>
      </div>

      <div className='flex-col w-[900px] mx-auto'>
        <img className='' src='/read/read1.webp' />
        <img className='' src='/read/read2.webp' />
        <img className='' src='/read/read3.webp' />
        <img className='' src='/read/read4.webp' />
        <img className='' src='/read/read5.webp' />
      </div>
    </div>
  )
}

export default ReadDetail
