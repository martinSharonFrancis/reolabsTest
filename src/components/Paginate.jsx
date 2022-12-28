import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function Paginate({products}) {

    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 4

    // get current post
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / postPerPage); i++) {
        pageNumbers.push(i)
    }

    function paginate(pageNum) {
        setCurrentPage(pageNum)
    }
    function paginatePrev(){
        setCurrentPage(currentPage!=1?currentPage - 1: 1)
    }
    function paginateNext(){
        setCurrentPage(currentPage!=pageNumbers.length?currentPage + 1: pageNumbers.length)
    }

    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    currentProducts.length && currentProducts.map((product) => <Link key={product.id} to={`/products/${product.id}`}><ProductCard key={product.id} product={product} /></Link>)
                }
            </div>
            <nav aria-label="Page navigation example" className='mt-5 text-center'>
                <ul className="inline-flex -space-x-px mt-5">
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={(e) => { e.preventDefault(); paginatePrev() }}
                        >Previous</a>
                    </li>
                    {
                        pageNumbers.map((page) => (
                            <li key={page}>
                                <a href="#"
                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    onClick={(e) => { e.preventDefault(); paginate(page) }}
                                >
                                    {page}
                                </a>
                            </li>
                        ))
                    }
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={(e) => { e.preventDefault(); paginateNext() }}
                        >Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Paginate