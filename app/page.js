"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const handleContent = () => {
    router.push("/content")
  }

  const handleEvents = () => {
    router.push("/events")
  }

  return (
    <main className="overflow-x-hidden">
      <section className="border-neutral-900 px-4 sm:px-8 md:px-12 lg:px-24 pt-16 md:pt-24 lg:pt-36 pb-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 my-6 lg:my-12">
            <div className="flex flex-col items-center px-2 sm:px-4 lg:px-8 lg:items-start">
              <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl tracking-tight text-transparent font-semibold text-center lg:text-left">
                Welcome to IEM GENAI-CoE
              </h1>
              <p className="my-2 max-w-xl py-3 md:py-6 tracking-tight text-3xl font-normal text-justify">
                <div className="my-2">Igniting Imagination,</div>
                <div className="my-2">Accelerating Innovation!</div>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 lg:p-8">
            <div className="flex justify-center">
              <Image src={"/bg-main.jpg"} className="rounded-3xl" alt="profilePic" height={400} width={400} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 px-4 sm:px-8 w-full justify-center sm:justify-start">
            <button
              onClick={() => {
                handleContent()
              }}
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Explore our Content
            </button>
            <button
              onClick={() => {
                handleEvents()
              }}
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Explore Events
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-900 py-3 px-4 sm:px-8 md:px-12 lg:px-24">
        <h2 id="aboutUs" className="my-8 md:my-12 text-center text-3xl md:text-4xl text-white">
          About Us
        </h2>
        <div className="flex justify-center items-center flex-wrap">
          <div className="w-full lg:w-1/2 p-4 lg:p-8">
            <div className="flex flex-col justify-center items-center gap-8 md:gap-14">
              <Image className="rounded-3xl" src={"/main.jpg"} alt="aboutImg" height={400} width={500} />
              <Image className="rounded-3xl" src={"/bg3.jpg"} alt="aboutImg" height={400} width={500} />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <div className="my-2 max-w-xl py-4 md:py-6 px-2 sm:px-4 text-justify tracking-tight font-normal space-y-1">
                <p>
                  Our CoE is built on the foundation of specialized knowledge and a dedicated focus on generative AI,
                  ensuring we remain at the forefront of technological advancements and industry trends.
                </p>

                <p>
                  We serve as an ecosystem that is committed to fostering innovation through targeted research and
                  development efforts, driving breakthroughs in generative AI technologies and their diverse
                  applications. By developing and disseminating knowledge, ethical guidelines, best practices, and
                  standards, we aim to promote the responsible and effective use of generative AI across various
                  domains.
                </p>

                <p>
                  Collaboration lies at the heart of our mission. Our CoE serves as a hub for cross-functional
                  partnerships, facilitating synergy between departments and industries to solve complex problems and
                  create new opportunities. We also prioritize alignment with industry needs, ensuring that our projects
                  deliver measurable outcomes and remain relevant in a rapidly evolving technological landscape.
                </p>

                <p>
                  Our key functions include organizing workshops and seminars to introduce generative AI to students,
                  faculty, and professionals. We create accessible online learning resources, including courses,
                  tutorials, webinars, and YouTube content, to empower learners at all levels. Additionally, we actively
                  engage with industry partners to initiate collaborative projects and address real-world business
                  challenges using generative AI.
                </p>

                <p>
                  As part of our commitment to innovation, we develop proof-of-concept prototypes that showcase the
                  potential of generative AI in diverse applications. Our development environment, equipped with the
                  latest hardware and software tools, provides the perfect foundation for creating dependable AI
                  solutions.
                </p>

                <p>
                  Join us in exploring the limitless possibilities of generative AI and shaping a future driven by
                  technological excellence and collaboration.
                </p>
              </div>
            </div>
          </div>
          <Link href={"/subco"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Our Subcommittees
              </span>
            </button>
          </Link>
          <Link href={"/advisor"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Our Advisory Committee 
              </span>
            </button>
          </Link>
          <Link href={"/faculty"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Our Faculty Mentors
              </span>
            </button>
          </Link>
        </div>
      </section>

      <section className="border-b border-neutral-900 px-4 sm:px-8 md:px-12 lg:px-24 mx-2 sm:mx-4 md:mx-8">
        <h2 id="aboutUs" className="my-8 md:my-12 text-center text-3xl md:text-4xl text-white">
          <span className="text-pink-500">Vision</span> & <span className="text-purple-500">Mission</span>
        </h2>
        <div className="text-justify">
          <div className="mb-4">
            <span className="font-semibold text-xl md:text-2xl">Vision : </span>

            <p>
              To be a pioneering Center of Excellence in Generative AI, advancing knowledge, fostering innovation,
              creating industry partnership, and building meaningful solutions.
            </p>
          </div>
          <div>
            <span className="font-semibold text-xl md:text-2xl">Mission : </span>

            <p>
              1. <span className="font-semibold">Educate:</span> Equip students, researchers, and professionals with the
              skills and knowledge required to excel in the field of generative AI through comprehensive educational
              programs.{" "}
            </p>
            <p>
              2. <span className="font-semibold">Innovate:</span> Drive cutting-edge research and development in
              generative AI technologies.{" "}
            </p>
            <p>
              3. <span className="font-semibold">Collaborate:</span> Foster interdisciplinary and cross-sector
              collaborations to solve complex problems, integrating insights from diverse fields and industries.
            </p>
            <p>
              4. <span className="font-semibold">Impact:</span> Develop and deploy generative AI solutions that have
              meaningful, positive impacts on society, addressing critical issues in healthcare, education, environment,
              and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* content section  */}
      <section className="border-b border-neutral-900 py-3 px-4 sm:px-8 md:px-12 lg:px-24">
        <h2 className="my-8 md:my-12 text-center text-3xl md:text-4xl text-white">
          Explore our <span className="text-purple-600 tracking-tight"> Top Content</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-center items-center p-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
            <img src="/c1.jpg" alt="" className="w-full h-40 rounded-3xl mb-4 object-cover" />
            <h2 className="text-xl md:text-2xl font-bold mb-2">Monday Motivation</h2>
            <p className="text-purple-300 text-justify flex-grow mb-2">
              📚✨ Tools like ScribeSense & Curipod empower educators to craft personalized lesson plans in minutes,
              making learning more engaging and effective. Let's embrace AI for smarter classrooms and brighter futures!
              📖🖋
            </p>
            <p className="text-sm mb-2">Created at: 2024-12-26T00:00:00Z</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full sm:w-1/2"
            >
              <Link href="https://www.instagram.com/p/DHSjRW4SKqt/?igsh=MW1mdXNubTRzMXIzOQ==">View Content</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
            <img src="/c2.png" alt="" className="w-full h-40 rounded-3xl mb-4 object-cover" />
            <h2 className="text-xl md:text-2xl font-bold mb-2">Fantastic Friday</h2>
            <p className="text-purple-300 text-justify flex-grow mb-2">
              🚀📚 Otis Chandler, co-founder of Goodreads, introduces Smashing—a next-gen reading app that combines AI +
              expert curation to deliver a personalized content feed! Stay ahead with top news, podcasts, and social
              updates tailored to your interests! 🎯💡
            </p>
            <p className="text-sm mb-2">Created at: 2024-12-26T00:00:00Z</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full sm:w-1/2"
            >
              <Link href="https://www.instagram.com/p/DHLAY5lyqoA/?igsh=NWdjdzJ4Y3dpd2My">View Content</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
            <img src="/c3.png" alt="" className="w-full h-40 rounded-3xl mb-4 object-cover" />
            <h2 className="text-xl md:text-2xl font-bold mb-2">Throwback Thursday</h2>
            <p className="text-purple-300 text-justify flex-grow mb-2">
              🧠📖 In 1949, Donald Hebb introduced a groundbreaking learning theory in Organization of Behavior, laying
              the foundation for neural networks and synaptic strength. His postulate remains a pillar in modern AI and
              neuroscience! 🔗🤖
            </p>
            <p className="text-sm mb-2">Created at: 2024-12-26T00:00:00Z</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full sm:w-1/2"
            >
              <Link href="https://www.instagram.com/p/DHIVYBsSNS9/?igsh=MW93b2c1enZxN3FscQ==">View Content</Link>
            </button>
          </div>
        </div>
        <div className="mt-4 font-semibold text-lg md:text-xl text-center">
          For Visiting our Daily Content{" "}
          <Link href={"/content"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Click Here
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* event section  */}
      <section className="border-b border-neutral-900 py-3 px-4 sm:px-8 md:px-12 lg:px-24">
        <h2 className="my-8 md:my-12 text-center text-3xl md:text-4xl text-white">
          Explore our <span className="text-pink-600 tracking-tight"> Events</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-center items-center p-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
            <img src="/event1.jpg" alt="" className="w-full h-40 rounded-3xl mb-4 object-cover" />
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Industry Attitude to GEN AI</h2>
            <p className="text-white text-justify flex-grow mb-2">
              Welcome to the Guest Lecture Series presented by IEM Generative AI CoE. Join us for an inspiring session
              of the Guest Speaker Series presented by the Generative AI - Centre of Excellence (CoE) at IEM! 🎤✨
              Speaker: Shivaji Basu, Head of GenAI HiTech Industry Vertical
            </p>
            <p className="text-sm mb-2">Organised on: 19th Dec.,2024</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full sm:w-auto"
            >
              <Link href="/events">View Events</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
            <img src="/event2.jpg" alt="" className="w-full h-40 rounded-3xl mb-4 object-cover" />
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Generative AI in Industry: Hope, Hype or Reality?</h2>
            <p className="text-white text-justify flex-grow mb-2">
              Welcome to the Panel Discussion Series presented by IEM Generative AI CoE along with IEM ICDC. 
              Speakers: Mrityunjoy Sen (Director, LTIMindtree), Suman Kumar Saha (Associate Director, Cognizant Technology Solutions), Tamal Datta (Managing Director, Skybuffer Solutions Pvt. Ltd), and Prabuddha Samaddar (Data & Analytics Program Manager, Tech Mahindra)
            </p>
            <p className="text-sm mb-2">Organised on: 11th Apr.,2025</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full sm:w-auto"
            >
              <Link href="/events">View Events</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-slate-700 hover:bg-slate-800 rounded-2xl">
            <img src="/event3.png" alt="" className="w-full h-40 rounded-3xl mb-4 object-cover" />
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Introduction, Networking & CV Workshop</h2>
            <p className="text-white text-justify flex-grow mb-2">
              Welcome to the Guest Lecture Series presented by IEM Generative AI CoE. Join us for an inspiring session
              of the Guest Speaker Series presented by the Generative AI - Centre of Excellence (CoE) at IEM! 🎤✨
              Speaker: Biswajit Chaki, Head of Engineering Solutions, IEM Research Foundation
            </p>
            <p className="text-sm mb-2">Organised on: 9th May,2025</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full sm:w-auto"
            >
              <Link href="/events">View Events</Link>
            </button>
          </div>
        </div>
        <div className="mt-4 font-semibold text-lg md:text-xl text-center">
          For Exploring More Events{" "}
          <Link href={"/events"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Click Here
              </span>
            </button>
          </Link>
        </div>
      </section>

      <section className="border-b border-neutral-900 py-3 px-4 sm:px-8 md:px-12 lg:px-24">
        <h2 className="mt-8 md:mt-12 mb-4 text-center text-3xl md:text-4xl text-white">Contact us</h2>
        <p id="contact" className="text-white text-center text-sm sm:text-base">
          Get in touch with us through{" "}
          <Link
            className="text-blue-500"
            target="_blank"
            href={"https://www.linkedin.com/company/iem-uem-generative-ai-coe/"}
          >
            Linkedin
          </Link>
          ,{" "}
          <Link
            className="text-purple-500"
            target="_blank"
            href={"https://www.instagram.com/iemgenai?igsh=MTRhMTdnYzVxcXB5NA=="}
          >
            Instagram
          </Link>
          ,{" "}
          <Link className="text-cyan-400" target="_blank" href={"https://www.facebook.com/share/15UTeakAgX/"}>
            Facebook
          </Link>
          ,{" "}
          <Link
            className="text-green-600"
            target="_blank"
            href={"https://whatsapp.com/channel/0029VavIA8lKbYMHjUPl1q2w"}
          >
            Whatsapp Channel
          </Link>
        </p>
      </section>
    </main>
  )
}

