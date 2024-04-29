import React from 'react'
import ProductItem from './ProductItem'
interface Props {
    title: string
    data: any
}

const ProductList = ({ title, data }: Props) => {
    return (
        <div className='mx-4 my-12'>
            <h1 className='text-lg pb-6 font-medium'>{title}</h1>
            <div className='grid grid-cols-5 gap-4 '>
                {data.map((item: any, index: number) => {
                    return (
                        <ProductItem key={`product_item_index_${index}`} data={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList
