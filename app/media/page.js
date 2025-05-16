import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
        <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
          Media/Publicity
        </span>
        {" "}Subcommittee
      </h1>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h2 className='text-3xl font-bold mb-8'>Faculty Incharges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-96">
            <div>
              <Image src={"/media/md.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Dr. Monalisa Dey</h2>
            <div className="p-2 flex flex-col justify-center items-start text-center gap-2">
              <div className="text-md sm:text-base">
                <b>Asst. Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
              </div>
            </div>
          </div>
          <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-96">
            <div>
              <Image src={"/media/bg.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Prof. Bavrabi Ghosh</h2>
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
          <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
            <div>
              <Image src={"/media/lead1.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Chandrasekhar Lall Chaudhury</h2>
            <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/chandrashekhar-l-82ba58285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin URL</Link></div>
          </div>
          <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2">
            <div>
              <Image src={"/media/lead2.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Sagnik Rahaman</h2>
            <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/sagnik-rahman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin URL</Link></div>
          </div>
        </div>
      </div>

      <h2 className='text-3xl font-bold mb-8 text-center mt-8'>Student Members</h2>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col justify-center items-center p-2 py-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
          <Image src={"/media/abhiroop.jpg"} alt="m1" width={300} height={200} className="w-[300px] h-[260px] object-cover rounded-3xl mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold">Abhiroop Sarkar</h2>
          <div className='font-semibold my-2 text-blue-300'><Link href="https://www.linkedin.com/in/abhiroop2004/">Linkedin URL</Link></div>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-700 hover:bg-slate-800 rounded-2xl">
          <Image src={"/media/ss.jpg"} alt="m2" width={300} height={200} className="w-[300px] h-[260px] object-cover rounded-3xl mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold">Syed Sayan</h2>
          <div className='font-semibold my-2 text-blue-300'><Link href="https://www.linkedin.com/in/syed-sayan-8a1a5228a/">Linkedin URL</Link></div>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-700 hover:bg-slate-800 rounded-2xl">
          <Image src={"/media/koushor.jpg"} alt="m3" width={300} height={200} className="w-[300px] h-[260px] object-cover rounded-3xl mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold">Koushor Roy Choudhury</h2>
          <div className='font-semibold my-2 text-blue-300'><Link href="https://www.linkedin.com/in/koushor-roy-choudhury-049582282/">Linkedin URL</Link></div>
        </div>
        <div className="flex flex-col justify-center items-center p-2 py-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
          <Image src={"/media/suchandra.jpg"} alt="m4" width={300} height={200} className="w-[300px] h-[260px] object-cover rounded-3xl mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold">Suchandra Sahoo</h2>
          <div className='font-semibold my-2 text-blue-300'><Link href="https://www.linkedin.com/in/suchandra-sahoo-166aaa28a/">Linkedin URL</Link></div>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-700 hover:bg-slate-800 rounded-2xl">
          <Image src={"/media/bose.jpg"} alt="m5" width={300} height={200} className="w-[300px] h-[260px] object-cover rounded-3xl mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold">Sayan Bose</h2>
          <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/bose-sayan/">Linkedin URL</Link></div>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-700 hover:bg-slate-800 rounded-2xl">
          <Image src={"/media/tania.jpg"} alt="m6" width={300} height={200} className="w-[300px] h-[260px] object-cover rounded-3xl mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold">Tania Ray</h2>
          <div className='font-semibold my-2 text-blue-300'><Link href="https://www.linkedin.com/in/tania-ray-84394928a/">Linkedin URL</Link></div>
        </div>
      </div>
    </div>
  )
}

export default page
