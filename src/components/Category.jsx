import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategoryProducts } from '../redux/categories/categorySlice'
import Loader from './Loader'
import Paginate from './Paginate'

function Category() {
    const dispatch = useDispatch()
    const categoryProducts = useSelector((state) => state.category.categoryProducts)
    const loader = useSelector((state) => state.category.loader)
    const {catName} = useParams();

    useEffect(() => {
        dispatch(getCategoryProducts(catName))
    }, [catName])

    return (
        <>
            {
                loader ? <Loader /> : <Paginate products={categoryProducts} />
            }
        </>
    )
}

export default Category