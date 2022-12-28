import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../redux/single-product/singleProductSlice'
import ProductCard from './ProductCard'
import './styles/productDetail.css'

function ProductDetail() {
    const {prId} = useParams()
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.singleProduct.product)
    const loader = useSelector((state)=>state.singleProduct.loader)

    // console.log(product);
    // console.log(prId);

    useEffect(()=>{
        dispatch(fetchSingleProduct(prId))
    }, [])

  return (
    <div className="productDetail">
        <div className='left'>
            <ProductCard product={product}/>
        </div>
        <div className='right'> 
            <div className="inner">
                <h1 className='font-bold text-lg mb-3'>{product.title}</h1>
                <p className='mb-4'>
                    {
                        product.description
                    }
                </p>
                <span>Price: {product.price}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail