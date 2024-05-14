import { useContext, useEffect, useState } from 'react';
import logo from '../assets/icon.png';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState('light');

    useEffect(() => {

        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='lg:font-bold lg:text-2xl text-sky-500'>Home<span className=' text-red-600'>S</span>ervice</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <div className=" mt-2">
                        <label className="cursor-pointer grid place-items-center">
                            <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>

                    

                    <li className='mt-2'>
                        <Link to='/' className=' text-sky-500 lg:font-semibold md:mx-4 m-0 md:px-4 p-0 '>Home</Link>
                    </li>
                    <li className=' mt-2'>
                        <Link to='/allService' className='md:mx-4 m-0 md:px-4 p-0 text-sky-500 lg:font-semibold'>Service</Link>
                    </li>

                    {!user && (
                        <li>
                            <Link to='/login' className=' text-sky-500 lg:font-semibold'>Login</Link>
                        </li>
                    )}

                </ul>

                {user &&
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link to='/addServices' className='justify-between text-sky-500 font-semibold'>Add Service</Link>
                            </li>
                            <li>
                                <Link to='/manageService' className=' text-sky-500 font-semibold'>Manage Service</Link>
                            </li>
                            <li>
                                <Link to='/my-book' className=' text-sky-500 font-semibold'>Booked-Services</Link>
                            </li>
                            <li>
                                <Link to='/service-do' className='text-sky-500 font-semibold'>Service-To-Do</Link>
                            </li>
                            <li className='mt-2'>
                                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar