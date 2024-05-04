import React from 'react'

const Footer = () => {
  return (
    <div className='flex-col flex gap-6 items-center justify-center h-22 bg-black py-3'>
      <img className="h-8 w-auto" src={'/mangakinglogo.png'} />
      <ul className='flex items-center divide-x divide-white '>
        <li className='text-sm text-white px-4 hover:text-primary transition-all cursor-pointer font-normal'>Бидний тухай</li>
        <li className='text-sm text-white px-4 hover:text-primary transition-all cursor-pointer font-normal'>Санал хүсэлт</li>
        <li className='text-sm text-white px-4 hover:text-primary transition-all cursor-pointer font-normal'>Холбоо барих</li>
        <li className='text-sm text-white px-4 hover:text-primary transition-all cursor-pointer font-normal'>Нууцлалын бодлого</li>
      </ul>
      <h1 className='text-xs text-[#c5c5c5]'>ⓒ developed by Sumbe</h1>
    </div>
  )
}

export default Footer
