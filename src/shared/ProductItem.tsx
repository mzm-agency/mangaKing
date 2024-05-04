import React from 'react'
import { Link } from 'react-router-dom'


interface Props {
    data: any
}

const ProductItem = ({ data }: Props) => {
    return (
        <Link to={`/product/${data?.id}`} className='relative rounded-md h-[300px] hover:border hover:border-black transition-all cursor-pointer'>
            <img className='w-full rounded-md h-full' src={data?.thumbnail} />

            <div className='absolute bottom-0 text-white'>
                {data.title}
                {data.category}
                {data.ageRestriction}
                {data.description}
            </div>

        </Link>
    )
}

export default ProductItem