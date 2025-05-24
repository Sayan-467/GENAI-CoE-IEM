import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
                    Training & Enablement
                </span>
                {" "}Subcommittee
            </h1>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Faculty Incharges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-96">
                        <div>
                            <Image src={"/training/sd.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Soma Das</h2>
                        <div className="px-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Associate Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/dr-soma-das-4732a237/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-96">
                        <div>
                            <Image src={"/training/sa.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Suvo Acharjee</h2>
                        <div className="px-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Associate Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/suvojit-acharjee?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Student Team Leads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/training/lead1.png"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Kinshuk Ganguly</h2>
                        <p className="text-center text-sm mb-2 line-clamp-4">A 4th year undergrad student of the department of CSE, who is passionate about Machine Learning, Deep Learning, Natural Language Processing, and Generative AI. He has contributed to backend development using gRPC and has been a part of three published research works based on NLP and ML in agriculture</p>
                        <div className='font-semibold text-blue-300'><Link href="https://www.linkedin.com/in/kinshuk-ganguly-232580275/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/training/lead2.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Subhajit Saha</h2>
                        <p className="text-center text-sm mb-2 line-clamp-4">A Senior CSE Student and Research Lead of the GenAI CoE, proficient in AI/ML/GenAI, with research experience in financial forecasting and fuzzy feature selection, aspiring to pursue a PhD</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/subhajit-saha-886a6a217/">Linkedin</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8 mt-6'>Student Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/training/raunak.jpg"} alt="m1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Raunak Sen</h2>
                        <p className="text-center text-sm mb-2 line-clamp-4">A 4th year undergrad student of the department of CSE, who is passionate about Machine Learning, Deep Learning, Natural Language Processing, and Generative AI. He has contributed to backend development using gRPC and has been a part of three published research works based on NLP and ML in agriculture</p>
                        <div className='font-semibold text-blue-300'><Link href="https://www.linkedin.com/in/raunaksen/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/training/amreta.jpeg"} alt="m2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Amreta Dey</h2>
                        <p className="text-center text-sm mb-2 line-clamp-4">A Senior CSE Student and Research Lead of the GenAI CoE, proficient in AI/ML/GenAI, with research experience in financial forecasting and fuzzy feature selection, aspiring to pursue a PhD</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/amreta-dey-a1003b26b/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/training/bedita.jpg"} alt="m3" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Bedita Swarnakar</h2>
                        <p className="text-center text-sm mb-2 line-clamp-4">A Senior CSE Student and Research Lead of the GenAI CoE, proficient in AI/ML/GenAI, with research experience in financial forecasting and fuzzy feature selection, aspiring to pursue a PhD</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/bedita-swarnakar-501b1828a/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/training/ayuska.jpg"} alt="m4" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Ayuska Saha</h2>
                        <p className="text-center text-sm mb-2 line-clamp-4">A Senior CSE Student and Research Lead of the GenAI CoE, proficient in AI/ML/GenAI, with research experience in financial forecasting and fuzzy feature selection, aspiring to pursue a PhD</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/ayuska-saha-51a223294/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/training/soumya.jpg"} alt="m5" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Soumya</h2>
                        <p className="text-center text-sm mb-2 line-clamp-4">A Senior CSE Student and Research Lead of the GenAI CoE, proficient in AI/ML/GenAI, with research experience in financial forecasting and fuzzy feature selection, aspiring to pursue a PhD</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/soumya2829/">Linkedin</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
