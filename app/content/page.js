import React from 'react'
import Link from 'next/link';
import clientPromise from '@/lib/mongodb'

export default async function Content() {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("content");

    const contents = await collection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

    return (
        <div className='pt-44 pb-14 px-24 container mx-auto'>
            <h1 className='text-4xl font-bold text-center mb-8'>Our <span className='bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 bg-clip-text text-4xl text-transparent font-semibold'>Daily Contents</span></h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                {contents.map((content) => (<div key={content._id} className='bg-slate-700 rounded-2xl p-8 w-1/2 flex flex-col gap-2'>
                    <Link target='_blank' href={`/content/${content._id}`}><h2 className='text-2xl font-semibold'>{content.title}</h2></Link>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <span>Posted on: {new Date(content.createdAt).toLocaleDateString()}</span>
                        <Link target='_blank' href={`/content/${content._id}`}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View in Details</button></Link>
                    </div>
                </div>))}
            </div>
            <div className='text-center mt-8 font-semibold text-lg'>
                For more contents, visit our <Link className='text-purple-500 hover:underline' target='_blank' href='https://www.instagram.com/iemgenai?igsh=MTRhMTdnYzVxcXB5NA=='>Instagram</Link> page.
            </div>
        </div>
    )
}

export const metadata = {
    title: "IEM Generative AI CoE - Contents",
    description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};