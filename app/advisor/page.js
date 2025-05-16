"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const page = () => {
  const [advisors, setAdvisors] = useState([])

  useEffect(() => {
    const fetchAdvisors = async () => {
      const res = await fetch("/advisors.json", { // <-- add await here
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      const data = await res.json()
      setAdvisors(data)
    }
    fetchAdvisors()
  }, [])

  return (
    <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
        <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
          Advisory
        </span>
        {" "}Committee
      </h1>

      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {advisors.map((advisor) => (<div key={advisor.name} className="flex flex-col justify-center items-center p-2 py-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
          <Image src={advisor.img} alt={advisor.name} width={300} height={200} className="w-[300px] h-[260px] object-cover rounded-3xl mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold">{advisor.name}</h2>
          <div className="p-4 flex flex-col justify-center items-start gap-2">
            <div className="text-md sm:text-base">
              <b>{advisor.designation}</b>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default page
