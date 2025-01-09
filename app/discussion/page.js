"use client"
import React, { useEffect, useState } from 'react'

const Discussion = () => {
    const [discussions, setDiscussions] = useState([])
    const [question, setQuestion] = useState("")

    useEffect(() => {
        async function fetchDiscussions() {
            try {
                const res = await fetch('/api/discussion')
                if (!res.ok) {
                    throw new Error("Error fetching discussions")
                }
                const data = res.json()
                if (Array.isArray(data)) {
                    setDiscussions(data)
                }
                else {
                    setDiscussions([])
                }
                console.log(data)
            } catch (error) {
                console.log(error)
                setDiscussions([])
            }
        }
        fetchDiscussions()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const comment = formData.get("comment");

        try {
            const response = await fetch("/api/discussion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment }),
            });

            if (response.ok) {
                fetchDiscussions();
                event.target.reset(); 
            } else {
                console.error("Failed to post discussion");
            }
        } catch (error) {
            console.error("Error submitting discussion:", error);
        }
    }

    return (
        <div className='container mx-auto px-28 py-40'>
            <h1 className='text-4xl font-bold text-center mb-4'>Discussion Forum</h1>

            <form onSubmit={handleSubmit} action="" className='flex flex-col items-center gap-2 mt-2'>
                <textarea value={question} onChange={e => setQuestion(e.target.value)} className="w-1/2 p-2 text-black  border-black border-2 rounded-2xl" placeholder='Write your question' name="" id="" />
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Submit
                    </span>
                </button>
            </form>

            <div className='py-3 border-b border-gray-400'></div>
            <ul>
                {discussions.map((discussion) => (<li key={discussion._id} className='py-6 border-b border-gray-400'>
                    <p className='font-semibold text-xl'>{discussion.comment}</p>
                    <p className='text-gray-500 text-sm'>Posted on : {new Date(discussion.createdAt).toLocaleDateString()}</p>
                    <div className='ml-6 mt-2'>
                        <h3 className='font-semibold'>Replies : </h3>
                        {discussion.replies.map((reply, index) => (<div key={index} className='pl-3 border-l-4 border-gray-400'>
                            <p>{reply}</p>
                            <p className='text-gray-500 text-sm'>Replied on : {new Date(reply.createdAt).toLocaleDateString()}</p>
                        </div>))}
                    </div>
                </li>))}
            </ul>
        </div>
    )
}

export default Discussion
