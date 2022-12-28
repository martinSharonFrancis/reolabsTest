import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/products/productsSlice';
import Loader from './Loader';
import Paginate from './Paginate';

function Feed() {
    const dispatch = useDispatch();
    const loader = useSelector((state) => {
        return state.products.loader
    })
    const products = useSelector((state) => {
        return state.products.products
    })
    // console.log(JSON.stringify(products));
    // console.log(products);
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    
    return (
        <>        
            {
                 
                products.length ? <Paginate products={products} />: <Loader/>
            }
        </>
    )
}

export default Feed