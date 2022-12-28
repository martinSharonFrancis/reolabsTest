import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../components/Category'
import Feed from '../components/Feed'
import ProductDetail from '../components/ProductDetail'
import Search from '../components/Search'

function Pins() {
  return (
    <>
        <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/category/:catName' element={<Category />} />
            <Route path='/products/:prId' element={<ProductDetail />} />
            <Route path='/search' element={<Search />} />            
        </Routes>
    </>
  )
}

export default Pins