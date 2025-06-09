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
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Suvojit Acharjee</h2>
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
                    <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
                        <div className="w-full flex justify-center">
                            <Image src={"/training/lead1.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Kinshuk Ganguly</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">A 4th year undergrad student of the department of CSE, who is passionate about Machine Learning, Deep Learning, Natural Language Processing, and Generative AI. He has contributed to backend development using gRPC and has been a part of three published research works based on NLP and ML in agriculture</p>
                        <div className='font-semibold text-blue-300'><Link href="https://www.linkedin.com/in/kinshuk-ganguly-232580275/">Linkedin</Link></div>
                    </div>
                    <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
                        <div className="w-full flex justify-center">
                            <Image src={"/training/lead2.png"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Subhajit Saha</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">A pre-final year B.tech. student in CSE at IEM, Kolkata. Passionate about Web Development, Machine Learning, NLP and Generative AI with a strong academic record and industry experience. worked on various projects in modern technologies and have multiple published research papers. I'm also an active leader and volunteer, contributing to quiz and training activities</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/subhajit-saha-886a6a217/">Linkedin</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8 mt-6'>Student Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
                        <div className="w-full flex justify-center">
                            <Image
                                src={"/training/raunak.jpg"}
                                alt="m1"
                                width={300}
                                height={300}
                                className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Raunak Sen</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">
                            Highly motivated and results-driven B.Tech student at IEM Kolkata with a minor in Artificial Intelligence & Machine Learning. Strong foundation in Java, machine learning algorithms, and data analytics with hands-on project experience in predictive modeling and NLP research. Co-author of a published survey paper and active contributor to the Centre of Excellence in GenAl.
                        </p>
                        <div className='font-semibold text-blue-300'><Link href="https://www.linkedin.com/in/raunaksen/">Linkedin</Link></div>
                    </div>
                    <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
                        <div className="w-full flex justify-center">
                            <Image
                                src={"/training/amreta.jpeg"}
                                alt="m2"
                                width={300}
                                height={300}
                                className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Amreta Dey</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:mb-4">
                            Curious about how AI and data science can solve real-world challenges, especially in domains of healthcare and finance. I love diving into projects where technology meets strategy, and right now, I'm particularly interested in exploring  generative models, real-world impact of emerging technologies, and interdisciplinary research that bridges technical innovation with analytical thinking.
                        </p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/amreta-dey-a1003b26b/">Linkedin</Link></div>
                    </div>
                    <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
                        <div className="w-full flex justify-center">
                            <Image
                                src={"/training/bedita.jpg"}
                                alt="m3"
                                width={300}
                                height={300}
                                className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Bedita Swarnakar</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:mb-4">
                            I'm deeply interested in Artificial Intelligence and Machine Learning, particularly in explainable AI, natural language processing, and deep learning. My goal is to develop technologies that are both innovative and responsibly applied
                        </p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/bedita-swarnakar-501b1828a/">Linkedin</Link></div>
                    </div>
                    <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
                        <div className="w-full flex justify-center">
                            <Image
                                src={"/training/ayuska.jpg"}
                                alt="m4"
                                width={300}
                                height={300}
                                className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Ayuska Saha</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:mb-4">
                            My interests lie in Generative AI, data science, and intelligent systems, with a focus on solving real-world problems. I work on projects in healthcare and FinTech, aiming to build innovative, scalable, and human-centric solutions through the integration of machine learning and emerging technologies.
                        </p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/ayuska-saha-51a223294/">Linkedin</Link></div>
                    </div>
                    <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
                        <div className="w-full flex justify-center">
                            <Image
                                src={"/training/soumya.jpg"}
                                alt="m5"
                                width={300}
                                height={300}
                                className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Soumya</h2>
                        <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:mb-4">
                            I am passionate about research in Artificial Intelligence and Machine Learning, focusing on algorithmic efficiency, model interpretability, and ethical AI
                        </p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/soumya2829/">Linkedin</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
