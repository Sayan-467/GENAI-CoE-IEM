import React from 'react'
import Link from 'next/link';
import clientPromise from '@/lib/mongodb'

export default async function event({ params }) {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("events");

    const events = await collection
        .find({})
        .sort({ organisedOn: -1 })
        .toArray();

    return (
        <div className='py-44 px-24 container mx-auto'>
            <h1 className='text-4xl font-bold text-center mb-8'>Our <span className='bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-4xl text-transparent font-semibold'>CoE Events</span></h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                {events.map((event) => (<div key={event._id} className='bg-slate-700 rounded-2xl p-8 w-1/2 flex flex-col gap-2'>
                    <Link target='_blank' href={`/event/${event._id}`}><h2 className='text-2xl font-semibold'>{event.title}</h2></Link>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <span>Organised on: {new Date(event.organisedOn).toLocaleDateString()}</span>
                        <div className='flex gap-2'>
                            <Link target='_blank' href={`/events/${event._id}`}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View in Details</button></Link>
                            <Link target='_blank' href={`${event.form}`}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Registration</button></Link>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export const metadata = {
    title: "IEM Generative AI CoE - Events",
    description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};