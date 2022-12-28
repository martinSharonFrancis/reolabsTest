import React, { Fragment, useEffect, useState } from 'react'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../redux/search/searchSlice'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {AiFillHome} from 'react-icons/ai'

import { getCategoryList } from '../redux/categories/categorySlice'

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchTerm = useSelector((state) => state.search.searchTerm)
    const categoryList = useSelector((state) => state.category.categoryList)
    const setsearchTerm = (term) => {
        dispatch(setSearchTerm(term))
    }
    useEffect(() => {
        dispatch(getCategoryList())
    }, [])



    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
            <Link to='/'>
                <AiFillHome fontSize={32} />
            </Link>
            <div className='flex justify-start items-center w-full px-2 rounded-md bg-gray-500 border-none outline-none focus-within:shadow-sm'>
                <IoMdSearch fontSize={21} className='ml-1' />
                <input type="text"
                    onChange={(e) => setsearchTerm(e.target.value)}
                    placeholder="Search Product"
                    value={searchTerm}
                    onFocus={() => navigate('/search')}
                    className='p-2 w-full bg-gray-300 outline-none'
                />
            </div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    // onFocus={()=>{navigate('/catgegory')}}
                    >
                        Categories
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {
                                categoryList && categoryList.map((category) => (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to={`/category/${category}`}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {category}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default Navbar