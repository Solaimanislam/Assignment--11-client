
import { TabTitle } from "../Utils/title";
import AllCard from "./AllCard";
import { useEffect, useState } from "react";
import axios from "axios";


const AllServicep = () => {


    const [itemsPerPage] = useState(3);
    const [count, setCount] = useState(0);
    const [service, setService] = useState([]);
    const [currentPage, setCurrentPage] = useState(3);
    const [search, setSearch] = useState('')

    TabTitle('Service');
    // const allServices = useLoaderData();

    useEffect(() => {
        const getDate = async () => {
            const {data} = await axios(`http://localhost:5000/all-service?page=${currentPage}&size=${itemsPerPage}$search=${search}`)
            setService(data);
            
        }
        getDate()
    }, [currentPage, itemsPerPage, search])

    useEffect(() => {
        const getCount = async () => {
            const {data} = await axios(`http://localhost:5000/service-count?search=${search}`)
            
            setCount(data.count)
        }
        getCount()
    }, [search])

    console.log(count);
    const numberOfPage = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPage).keys()].map(element => element + 1);

    // handle pagination button
    const handlePagination = (value) => {
        console.log(value);
        setCurrentPage(value);
    }

    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value;
        setSearch(text);
    } 
    console.log(search);

    

    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>


                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter Service Name'
                                aria-label='Enter Service Name'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>

                   
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-3 lg:my-10 ">
                    {
                        service.map(ser => <AllCard
                            key={ser._id}
                            ser={ser}
                        ></AllCard>)
                    }
                </div>
            </div>
            {/* Pagination */}
            <div className='flex justify-center mt-12'>
                {/* Previous page */}
                <button
                disabled = {currentPage === 1}
                onClick={()=> handlePagination( currentPage - 1 )}
                 className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* numbers */}
                {pages.map(btnNum => (
                    <button
                    onClick={()=> handlePagination(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-blue-500 text-white' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* next */}
                <button
                disabled = {currentPage === numberOfPage}
                onClick={()=> handlePagination( currentPage + 1 )}
                 className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AllServicep