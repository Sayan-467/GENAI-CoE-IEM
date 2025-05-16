"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const page = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await fetch('/students.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            console.log("res", res)
            const data = await res.json()
            console.log("data", data)
            setStudents(data);
        }
        fetchStudents();
    }, [])

    return (
        <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
                    Industry Projects
                </span>
                {" "}Subcommittee
            </h1>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Faculty Incharges</h2>
                <div className="my-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl px-2 w-[320px] sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
                        <div>
                            <Image src={"/industry/sm.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover object-top rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Dr. Sainik Kumar Mahata</h2>
                        <div className="p-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Associate Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl px-2 w-[320px] sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
                        <div>
                            <Image src={"/industry/sd.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover object-top rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Prof. Saikat Dutt</h2>
                        <div className="p-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Professor of Practice, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl px-2 w-[320px] sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
                        <div>
                            <Image src={"/industry/as.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover object-top rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Prof. Ankita Sen</h2>
                        <div className="p-2 flex flex-col justify-center items-start text-center gap-2">
                            <div className="text-md sm:text-base">
                                <b>Asst. Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Student Team Leads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/industry/lead1.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[270px] object-cover object-top rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Sanket Ghosh</h2>
                        <p className="text-center text-sm mb-2 line-clamp-3">GenAI and SaaS Application developer</p>
                        <div className='font-semibold text-blue-300'><Link href="https://www.linkedin.com/in/sanketghosh19/">Linkedin URL</Link></div>
                        <div className='font-semibold text-violet-300'><Link href="https://github.com/sanketghosh19">Github URL</Link></div>
                        <div className='font-semibold mb-1 text-slate-200'><Link href="https://portfolio-tawny-chi-91.vercel.app/">Portfolio URL</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/industry/lead2.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[270px] object-cover object-top rounded-3xl mb-2" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Sujaan Bhattacharyya</h2>
                        <p className="text-center text-sm mb-2 line-clamp-3">I'm a Python developer passionate about AI, automation, and building tools that solve real problems. I enjoy exploring new languages—both human and programming—and I'm always curious about how things work under the hood.</p>
                        <div className='font-semibold text-blue-300'><Link href="https://www.linkedin.com/in/sujaan-bhattacharyya-92a679257/">Linkedin URL</Link></div>
                        <div className='font-semibold mb-1 text-violet-300'><Link href="https://github.com/Sujaanb">Github URL</Link></div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center min-h-screen pt-6'>
                <h2 className='text-3xl font-bold mb-8'>Student Members</h2>
                <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="flex flex-col justify-start items-center p-2 py-4 bg-slate-700 hover:bg-slate-800 rounded-2xl w-[340px] h-[500px] min-h-[500px] max-h-[500px]"
                        >
                            <Image
                                src={student.image}
                                alt={student.name}
                                width={300}
                                height={200}
                                className="w-[300px] h-[290px] object-cover object-top rounded-3xl mb-4"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold text-center">{student.name}</h2>
                            <p className="text-center text-sm mb-2 line-clamp-3">{student.bio}</p>
                            <div className='font-semibold mb-2 text-blue-300'>
                                <Link href={student.linkedin}>Linkedin URL</Link>
                            </div>
                            <div className="text-center text-xs text-gray-300">Area of Interests: <span className='font-bold'>{student.areaOfInterest}</span></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
