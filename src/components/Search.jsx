import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/products/productsSlice';
import { getSearchRersult } from '../redux/search/searchSlice';
import Loader from './Loader';
import Paginate from './Paginate';

function Search() {
  const searchTerm = useSelector((state) => state.search.searchTerm)
  const searchResult = useSelector((state) => state.search.searchResult)

  const dispatch = useDispatch()
  // console.log(searchResult);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  useEffect(() => {
    dispatch(getSearchRersult(searchTerm))
  }, [searchTerm])

  return (
    <>
      {
        searchResult.length ? <Paginate products={searchResult} /> : <Loader />
      }
    </>
  )
}

export default Search