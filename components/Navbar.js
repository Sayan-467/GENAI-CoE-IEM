"use client"
import React, { useState } from 'react'
// import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    const [showdropdown, setShowdropdown] = useState(false)
    const pathname = usePathname()
    const showNavbar = ["/", "/login", "/content", "/events", "/discussion"].includes(pathname)

    // const { data: session } = useSession()
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }

    return (
        <>
            {showNavbar && <nav className='bg-slate-600 w-[90vw] fixed top-10 right-[5vw] rounded-full px-11 py-4 flex justify-between'>
                <div className='logo flex gap-12 justify-center items-center'>
                    <Link href={"/"}>
                        <Image className='rounded-xl' src={"/logo.jpg"} alt='genai coe logo' height={50} width={50} />
                    </Link>

                    <ul className='flex gap-8 items-center text-white'>
                        <Link href="/"><li className='font-semibold hover:underline hover:shadow-lg'>Home</li></Link>
                        <Link href="#aboutUs"><li className='font-semibold hover:underline hover:shadow-lg'>About us</li></Link>
                        <Link href="/content"><li className='font-semibold hover:underline hover:shadow-lg'>Contents</li></Link>
                        <Link href="/events"><li className='font-semibold hover:underline hover:shadow-lg'>Events</li></Link>
                        <Link href="#contact"><li className='font-semibold hover:underline hover:shadow-lg'>Contact us</li></Link>
                    </ul>
                </div>

                <div className='social-icons flex justify-center items-center gap-4 text-3xl'>
                    <Link className='text-white' href="https://www.linkedin.com/company/iem-uem-generative-ai-coe/" target='_blank' rel="noopener noreferrer">
                        <FaLinkedin />
                    </Link>
                    <Link className='text-white' href="https://www.instagram.com/iemgenai?igsh=MTRhMTdnYzVxcXB5NA==" target='_blank' rel="noopener noreferrer">
                        <FaInstagram />
                    </Link>
                </div>

                {/* <div className='flex gap-3 relative'> */}
                {/* {session && <>
                        <button onClick={()=>setShowdropdown(!showdropdown)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>

                        <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-[125px] top-[55px]`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Main Page</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contents</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Events</Link>
                                </li>
                                <li>
                                    <Link onClick={()=>signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                </li>
                            </ul>
                        </div></>
                    } */}

                {/* {session && <button onClick={() => { signOut() }} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 font-medium rounded-lg text-sm px-5 py2.5 text-center me-2 mb-2'>Sign out</button>}
                    {!session &&
                        <Link href={"/login"}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Log in
                                </span>
                            </button>
                        </Link>
                    } */}
                {/* </div> */}
            </nav>}
        </>
    )
}

export default Navbar
