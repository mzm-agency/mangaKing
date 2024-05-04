
import ProductItem from './ProductItem'
interface Props {
    title: string
    data: any
}

const ProductList = ({ title, data }: Props) => {


    return (
        <div className='mx-4 my-12'>
            <h1 className='text-black font-semibold text-lg flex items-center py-4'>{title}</h1>
            <div className='grid grid-cols-6 gap-6'>
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
