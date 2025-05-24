import React from 'react'
import Link from 'next/link'

const Subco = () => {
    return (
        <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
                    Subcommittees
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="bg-slate-700 rounded-2xl p-2 sm:p-6 md:p-8 flex flex-col gap-2">
                    <Link  href="/media">
                        <h2 className="text-xl sm:text-2xl font-semibold">Media/Publicity Subcommittee</h2>
                    </Link>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-md sm:text-base">
                            <b>Faculty Incharges:</b> Dr. Monalisa Dey, Prof. Bavrabi Ghosh
                        </div>
                        <div className="text-md sm:text-base">
                            <b>Student Leads:</b> Chandrashekhar Lall Chaudhury, Sagnik Rahman
                        </div>
                        <Link href="/media">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medzium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                View in Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-slate-700 rounded-2xl p-2 sm:p-6 md:p-8 flex flex-col gap-2">
                    <Link  href="/training">
                        <h2 className="text-xl sm:text-2xl font-semibold">Training & Enablement Subcommittee</h2>
                    </Link>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-md sm:text-base">
                            <b>Faculty Incharges:</b> Dr. Soma Das, Dr. Suvo Acharjee 
                        </div>
                        <div className="text-md sm:text-base">
                            <b>Student Leads:</b> Kinshuk Ganguly, Subhajit Saha
                        </div>
                        <Link  href="/training">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medzium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                View in Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-slate-700 rounded-2xl p-2 sm:p-6 md:p-8 flex flex-col gap-2">
                    <Link  href="/industry">
                        <h2 className="text-xl sm:text-2xl font-semibold">Industry Projects Subcommittee</h2>
                    </Link>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-md sm:text-base">
                            <b>Faculty Incharges:</b> Dr. Sainik Kumar Mahata, Prof. Saikat Dutt, Prof. Ankita Sen
                        </div>
                        <div className="text-md sm:text-base">
                            <b>Student Leads:</b> Sanket Ghosh, Sujaan Bhattacharyya
                        </div>
                        <Link  href="/industry">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medzium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                View in Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-slate-700 rounded-2xl p-2 sm:p-6 md:p-8 flex flex-col gap-2">
                    <Link  href="/research">
                        <h2 className="text-xl sm:text-2xl font-semibold">Research & IP Creation Subcommittee</h2>
                    </Link>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-md sm:text-base">
                            <b>Faculty Incharges:</b> Dr. Darothi Sarkar, Dr. Anupam Mondal 
                        </div>
                        <div className="text-md sm:text-base">
                            <b>Student Leads:</b> Sanjan Baitalik, Rajashik Datta 
                        </div>
                        <Link  href="/research">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medzium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                View in Details
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="bg-slate-700 rounded-2xl p-2 sm:p-6 md:p-8 flex flex-col gap-2">
                    <Link  href="/conference">
                        <h2 className="text-xl sm:text-2xl font-semibold">Conference/Seminar Subcommittee</h2>
                    </Link>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-md sm:text-base">
                            <b>Faculty Incharges:</b> Dr. Amit Kumar Das, Dr. Moutushi Singh Biswas 
                        </div>
                        <div className="text-md sm:text-base">
                            <b>Student Leads:</b> Archita Dasgupta, Nishaad Mishra
                        </div>
                        <Link  href="/conference">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medzium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                View in Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subco
