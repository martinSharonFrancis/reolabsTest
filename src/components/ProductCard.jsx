import axios from 'axios';
import React, { useState } from 'react'
import Loader from './Loader';
import './styles/productCard.css'

function ProductCard({ product: { image, title, id } }) {
    // console.log(image);
    const [isImgLoad, setIsImgLoad] = useState(false)
    if (image != undefined) {
        axios.get(`${image}`).then(res => {
            setIsImgLoad(true)
        })
    }
    return (
        <div className='w-full'>
            <div className="img_block min-h-sm h-96 relative">
                {
                    isImgLoad ? <img src={image} alt="product image" className='product_img absolute left-0 top-0 w-full h-full object-contain' /> : <Loader class_needed='loader_center' />
                }
            </div>
            <h3 className='font-semibold text-black text-lg text-center'>{title}</h3>
        </div>
    )
}

export default ProductCard