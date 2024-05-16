import React, { useEffect, useState } from 'react'
import Banner from '../shared/Banner'
import ProductList from '../shared/ProductList'
import { datas } from '../shared/dummy'
import { Button } from '../ui/Button'

const Home = () => {
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    console.log("🚀 ~ Home ~ category:", category)

    const fetchData = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setData(json.products))
            .catch(e => {
                console.error('Error:', e);
            });
    };

    useEffect(() => {
        fetchData();
        fetchCategory()
    }, []);


    const fetchCategory = () => {
        fetch('http://localhost:8080/api/category/list')
            .then(res => res.json())
            .then(json => {

                setCategory(json.categories
                )

            })
            .catch(e => {
                console.error('Error:', e);
            });
    };

    return (
        <div>
            {category.map((e: any, index: number) => {
                return (
                    <div key={index}>{e.name}</div>
                )
            })}
            <Banner />
            <div className='container flex-col flex'>
                <Button variant='default'>shad ui test title</Button>
                <ProductList title='Онцлох манга' data={data} />
            </div>
        </div>
    )
fb47e2d34ff956a2facc6a72ebdf14bbb31
}

export default Home
