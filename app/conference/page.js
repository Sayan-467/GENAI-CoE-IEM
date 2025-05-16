import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
                    Conference/Seminar
                </span>
                {" "}Subcommittee
            </h1>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Faculty Incharges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-96">
                        <div>
                            <Image src={"/conference/akds.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Amit Kumar Das</h2>
                        <div className="px-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Dean, Industry Consultancy, IEM & Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-96">
                        <div>
                            <Image src={"/conference/msb.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Moutushi Biswas Singh</h2>
                        <div className="px-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Professor & HoD, Dept. of IT & CSE, IEM Kolkata</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Student Team Leads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
                        <div>
                            <Image src={"/media/lead1.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Archita Dasgupta</h2>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/chandrashekhar-l-82ba58285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin URL</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
                        <div>
                            <Image src={"/media/lead2.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Nishaad Mishra</h2>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/sagnik-rahman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin URL</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
