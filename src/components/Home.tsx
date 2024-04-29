import React from 'react'
import Banner from '../shared/Banner'
import ProductList from '../shared/ProductList'
import { datas } from '../shared/dummy'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container flex-col flex bg-[#e9e9e9]'>
                <ProductList title='Онцлох манга' data={datas} />
            </div>
        </div>
    )
}

export default Home
