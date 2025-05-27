import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-1 sm:mb-8">
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
              <Image src={"/media/md.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-2" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Dr. Monalisa Dey</h2>
            <div className="p-2 flex flex-col justify-center items-start text-center gap-1">
              <div className="text-md sm:text-base">
                <b>Asst. Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
              </div>
            </div>
            <div className='font-semibold text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/dr-monalisa-dey-9365a5130/">Linkedin</Link></div>
          </div>
          <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-96">
            <div>
              <Image src={"/media/bg.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-2" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Prof. Bavrabi Ghosh</h2>
            <div className="p-2 flex flex-col justify-center items-start text-center gap-1">
              <div className="text-md sm:text-base">
                <b>Asst. Professor, Dept. of CSE & CSE(AI), IEM Kolkata</b>
              </div>
            </div>
            <div className='font-semibold text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/bavrabi-ghosh-71a402a1/">Linkedin</Link></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen">
        <h2 className='text-3xl font-bold mb-8 mt-4'>Student Team Leads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div className="group bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] transition-all duration-300">
            <div className="w-full flex justify-center">
              <Image src={"/media/lead1.jpg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4 transition-all duration-300" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-center">Chandrashekhar Lall Chaudhury</h2>
            <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">A CSE undergrad who devotes time in exploring AWS and Generative AI models. Also, a guitarist who has spent nearly half of his life into hard rock and heavy metal music and exploring audio engineering techniques</p>
            <div className='font-semibold mb-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/chandrashekhar-l-82ba58285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Link></div>
          </div>
          <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
            <div className="w-full flex justify-center">
              <Image src={"/media/lead2.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[320px] object-cover rounded-3xl mb-1 transition-all duration-300" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-center">Sagnik Rahman</h2>
            <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">With a keen interest in Artificial Intelligence, Machine Learning, and Generative AI, I’m passionate about innovation and creativity. I’ve worked on projects involving time series data analysis and agentic AI, and have experience building AI-powered solutions using Python and web technologies. Beyond tech, I enjoy expressing creativity through painting and visual design</p>
            <div className='font-semibold mb-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/sagnik-rahman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Link></div>
          </div>
        </div>
      </div>

      <h2 className='text-3xl font-bold mb-8 text-center mt-8'>Student Members</h2>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
          <Image src={"/media/abhiroop.jpg"} alt="m1" width={300} height={200} className="w-[300px] h-[320px] object-cover rounded-3xl mb-1 transition-all duration-300" />
          <h2 className="text-xl md:text-2xl font-semibold">Abhiroop Sarkar</h2>
          <p className='text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]'>I am passionate about research in Theoretical Computer Science, along with study and application of Cryptography. Apart from that, I am also interested in applications of Machine Learning in everyday problems</p>
          <div className='font-semibold my-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/abhiroop2004/">Linkedin</Link></div>
        </div>
        <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
          <Image src={"/media/ss.jpg"} alt="m2" width={300} height={200} className="w-[300px] h-[320px] object-cover rounded-3xl mb-1 transition-all duration-300" />
          <h2 className="text-xl md:text-2xl font-semibold">Syed Sayan</h2>
          <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">Myself Syed Sayan, currently pursuing my B. Tech from IEM in CSE(AI). Truly interested in problem solving (DSA) & competitive coding in C++ and passionate in Web Development along with fluent knowledge in HTML, CSS, JS, Node JS, Express JS, React JS, MongoDB, Next JS. Aiming to become a software engineer along with the knowledge of Artificial Intelligence and Machine Learning</p>
          <div className='font-semibold my-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/syed-sayan-8a1a5228a/">Linkedin</Link></div>
        </div>
        <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
          <Image src={"/media/koushor.jpg"} alt="m3" width={300} height={200} className="w-[300px] h-[320px] object-cover rounded-3xl mb-1 transition-all duration-300" />
          <h2 className="text-xl md:text-2xl font-semibold">Koushor Roy Choudhury</h2>
          <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">A motivated and detail-oriented professional with a passion for innovation and continuous learning. Skilled in problem-solving and committed to delivering high-quality results, I thrive in dynamic environments and aim to contribute meaningfully to organizational success</p>
          <div className='font-semibold my-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/koushor-roy-choudhury-049582282/">Linkedin</Link></div>
        </div>
        <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
          <Image src={"/media/suchandra.jpg"} alt="m4" width={300} height={200} className="w-[300px] h-[280px] object-cover rounded-3xl mb-1" />
          <h2 className="text-xl md:text-2xl font-semibold">Suchandra Sahoo</h2>
          <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">Passionate researcher in making: Machine Learning, Data Analytics and Natural Language Processing, with a strong drive for interdisciplinary innovation. Actively engaged in hands-on tech projects and continuous learning through research-driven explorations</p>
          <div className='font-semibold my-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/suchandra-sahoo-166aaa28a/">Linkedin</Link></div>
        </div>
        <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
          <Image src={"/media/bose.jpg"} alt="m5" width={300} height={200} className="w-[300px] h-[320px] object-cover rounded-3xl mb-1 transition-all duration-300" />
          <h2 className="text-xl md:text-2xl font-semibold">Sayan Bose</h2>
          <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">I'm Sayan Bose, currently pursuing my B. Tech from IEM in CSE(AI). Paasionate in problem solving (DSA) & competitive coding in Java, Python and have interest in Artificial Intelligence and Machine Learning</p>
          <div className='font-semibold mb-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/bose-sayan/">Linkedin</Link></div>
        </div>
        <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px] group transition-all duration-300">
          <Image src={"/media/tania.jpg"} alt="m6" width={300} height={200} className="w-[300px] h-[320px] object-cover rounded-3xl mb-1 transition-all duration-300" />
          <h2 className="text-xl md:text-2xl font-semibold">Tania Ray</h2>
          <p className="text-center text-sm mb-2 transition-all duration-300 line-clamp-4 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:max-h-[200px]">I'm Tania Ray, a CSE AI undergrad passionate about exploring Generative AI. I enjoy creating innovative solutions using cutting-edge technology. With a keen interest in design, management, and AI applications, I aim to blend creativity and intelligence to build impactful, real-world projects that push boundaries</p>
          <div className='font-semibold my-2 text-blue-300'><Link target="_blank" href="https://www.linkedin.com/in/tania-ray-84394928a/">Linkedin</Link></div>
        </div>
      </div>
    </div>
  )
}

export default page
