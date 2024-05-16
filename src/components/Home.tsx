import React, { useEffect, useState } from 'react'
import Banner from '../shared/Banner'
import ProductList from '../shared/ProductList'

const Home = () => {
  const [data, setData] = useState([])
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
  }, []);

  return (
    <div>
      <Banner />
      <div className='container flex-col flex'>
        <ProductList title='Онцлох манга' data={data} />
      </div>
    </div>
  )
}

export default Home
