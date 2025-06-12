import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
                    Research & IP Creation
                </span>
                {" "}Subcommittee
            </h1>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Faculty Incharges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl px-2 w-[320px] sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
                        <div>
                            <Image src={"/research/ds.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover object-top rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Darothi Sarkar</h2>
                        <div className="p-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                        <div className='font-semibold text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/darothi-sarkar-9a994453/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl px-2 w-[320px] sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
                        <div>
                            <Image src={"/research/apm.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover object-top rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Anupam Mondal</h2>
                        <div className="p-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Associate Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                        <div className='font-semibold text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/anupam-mondal-ph-d-8a7a1a39/">Linkedin</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8 mt-4'>Student Team Leads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
                        <div>
                            <Image src={"/research/lead1.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[270px] object-cover object-top rounded-3xl mb-2 transition-all duration-300" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Sanjan Baitalik</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">A Senior CSE Student and Research Lead of the GenAI CoE, proficient in AI/ML/GenAI, with research experience in financial forecasting and fuzzy feature selection, aspiring to pursue a PhD</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/sanjanbaitalik/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
                        <div>
                            <Image src={"/research/lead2.jpeg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[270px] object-cover object-top rounded-3xl mb-2 transition-all duration-300" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Rajashik Datta</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">Student Research Lead of the GenAI CoE, currently a Senior CSE(AI) student.  Proficiency: AI/ML/GenAI. Research & interests: Financial forecasting, fuzzy feature selection, cryptocurrency price prediction</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/rajashikdatta/">Linkedin</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
