import React from 'react'

interface Props {
    data: any
}

const ProductItem = ({ data }: Props) => {
    return (
        <div className='relative rounded-md h-[300px] hover:border hover:border-black transition-all cursor-pointer'>
            <img className='w-full rounded-md h-full' src={data?.thumbnail} />

            <div className='absolute bottom-0 text-white'>
                {data.title}
                {data.thumbnail}
                {data.category}
                {data.ageRestriction}
                {data.description}
            </div>

        </div>
    )
}

export default ProductItem