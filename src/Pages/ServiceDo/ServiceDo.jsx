import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const ServiceDo = () => {

    const {user} = useContext(AuthContext);

    const [book, setBook] = useState([]);

    useEffect(() => {
        getDate()
    }, [user])

    const getDate = async () => {
        const { data } = await axios(`https://home-service-server-mu.vercel.app/service-do/${user?.email}`)
        setBook(data)
    }
    

    // handleStatus
    const handleStatus = async (id, prevStatus, status) => {
        if(prevStatus === status) return console.log('Error');
        // console.log(id,prevStatus, status);
        const {data} = await axios.patch(`https://home-service-server-mu.vercel.app/book/${id}`, {status})
        console.log(data);
        getDate()
    }

    return (
      <section className='container px-4 mx-auto pt-12'>
        <div className='flex items-center gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>Bid Requests</h2>
  
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {book.length} Requests
          </span>
        </div>
  
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Title</span>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Email</span>
                        </div>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Deadline</span>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <button className='flex items-center gap-x-2'>
                          <span>Price</span>
                        </button>
                      </th>
  
                     
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        Status
                      </th>
  
                      <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                  {book?.map(b=>(<tr key={b._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {b.name}
                      </td>
  
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {b.email}
                      </td>
  
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {b.date}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {b.price}
                      </td>
                      
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 
                        {b.status === 'pending' && ' bg-yellow-100/60 text-yellow-500 '}
                        {b.status === 'In progress' && ' bg-blue-100/60 text-blue-500'}
                        {b.status === 'Complete' && ' bg-emerald-100/60 text-emerald-500'}
                        {b.status === 'Rejected' && ' bg-red-100/60 text-red-500'}
 
                        `}
                        >


                          <span className={`h-1.5 w-1.5 rounded-full 
                          {b.status === 'pending' && ' bg-yellow-500 '}
                          {b.status === 'In progress' && ' bg-blue-500'}
                          {b.status === 'Complete' && ' bg-green-500'}
                          {b.status === 'Rejected' && ' bg-red-500'}
                          `}>

                          </span>
                          <h2 className='text-sm font-normal '>{b.status}</h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                        <button
                        onClick={() => handleStatus(b._id, b.status, 'In progress')}
                        disabled={b.status === 'Complete'}
                         className='btn text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                          Accept
                        </button>
                        {/* rejected button */}
                        <button
                        onClick={() => handleStatus(b._id, b.status, 'Rejected')}
                        disabled={b.status === 'Complete'}
                         className='btn text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                          Decline
                        </button>
                      </div>
                    </td>
                    </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ServiceDo