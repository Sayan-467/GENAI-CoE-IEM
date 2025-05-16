import Link from "next/link"
import clientPromise from "@/lib/mongodb"

export default async function EventsPage() {
  const client = await clientPromise
  const db = client.db("genai-coe")
  const collection = db.collection("events")

  const events = await collection.find({}).sort({ organisedOn: -1 }).toArray()

  return (
    <div className="pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8">
        Our{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-transparent font-semibold">
          CoE Events
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {events.map((event) => (
          <div key={event._id} className="bg-slate-700 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-2">
            <Link target="_blank" href={`/events/${event._id}`}>
              <h2 className="text-xl sm:text-2xl font-semibold">{event.title}</h2>
            </Link>
            <div className="flex flex-col justify-center items-start gap-2 sm:gap-3">
              <span className="text-sm sm:text-base">
                Organised on: {new Date(event.organisedOn || event.createdAt).toLocaleDateString()}
              </span>
              <div className="flex flex-wrap gap-2">
                <Link target="_blank" href={`/events/${event._id}`}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-1 sm:mb-0"
                  >
                    View in Details
                  </button>
                </Link>
                {event.form && (
                  <Link target="_blank" href={event.form}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Registration
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: "IEM Generative AI CoE - Events",
  description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
}

