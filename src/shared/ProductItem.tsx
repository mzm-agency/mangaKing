import React from 'react'
import { Link } from 'react-router-dom'


interface Props {
    data: any
}

const ProductItem = ({ data }: Props) => {
    return (
        <Link to={`/product/${data?.id}`}
            className='product-item relative rounded-md h-[300px] border-2 border-black transition-all cursor-pointer
             '>
            <img className='w-full rounded-md h-full' src={data?.thumbnail} />

            <div className='absolute bottom-0 flex items-end justify-between p-4 bg-black/50 w-full '>
                <div className='grid gap-1'>
                    <p className='leading-none text-sm font-semibold text-white'>{data.title}</p>
                    <p className='leading-none text-xs font-medium text-primary'>{data?.category}</p>
                </div>
                <div className='bg-primary p-1'>
                    <p className='leading-none text-xs text-black font-semibold'>13</p>
                </div>

            </div>

        </Link>
    )
}

export default ProductItem