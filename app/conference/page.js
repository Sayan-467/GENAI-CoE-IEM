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
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/dr-amit-kumar-das/">Linkedin</Link></div>
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
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/dr-moutushi-singh-bb295b6a/">Linkedin</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <h2 className='text-3xl font-bold mb-8'>Student Team Leads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/conference/lead1.jpeg"} alt="Lead 1" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Archita Dasgupta</h2>
                        <p className='text-center text-sm mb-2 line-clamp-4'>Driven by a deep interest  in data science with a strong foundation in artificial intelligence, machine learning and backend development. Skilled in Python and SQL, with experience using machine learning and deeplearning frameworks like Scikit-learn, TensorFlow, and Keras . Proficient in backend development using Django, and adept at data manipulation and visualization through Pandas, NumPy, Matplotlib, and Seaborn. Additionally, experienced with advanced agentic AI tools such as Crewai and Langchain to enhance intelligent automation workflows.  Being a member of the IEEE Computational Intelligence Society (IEEE CIS), Treasurer of ACM-IEM student chapter, I bring a blend of technical expertise and leadership. As the Student Lead at the Gen-AI Centre of Excellence, I am dedicated to advancing AI research and fostering a collaborative innovation environment.</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/archita-dasgupta-096272226/">Linkedin</Link></div>
                    </div>
                    <div className="bg-slate-700 hover:bg-slate-800 rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-2 w-[348px]">
                        <div>
                            <Image src={"/conference/lead2.jpg"} alt="Lead 2" width={300} height={300} className="w-[300px] h-[300px] object-cover rounded-3xl mb-4" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Nishaad Mishra</h2>
                        <p className='text-center text-sm mb-2 line-clamp-4'>Turning curiosity into code, and ideas into intelligence.  I’m a Computer Science and Engineering undergraduate at the Institute of Engineering and Management (IEM), Kolkata, with a passion for building smart systems that learn, adapt, and create.  My interests span across Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing — areas where I enjoy translating abstract concepts into impactful, real-world solutions. I work fluently in Python, Java, and C, and bring hands-on expertise with tools like TensorFlow, Scikit-learn, OpenCV, and NLTK.  Lately, I’ve been diving deep into the evolving world of Generative AI and Agentic AI frameworks such as LangChain and CrewAI — developing autonomous systems that go beyond just predictions to decision-making and interaction.  Curiosity fuels my journey, and with every line of code, I aim to push the boundaries of what AI can do.</p>
                        <div className='font-semibold mb-2 text-blue-300'><Link href="https://www.linkedin.com/in/nishaad-mishra-9a506a286/">Linkedin</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
