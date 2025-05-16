"use client"
import React, { useEffect, useState } from 'react'

const Discussion = () => {
    const [discussions, setDiscussions] = useState([])
    const [question, setQuestion] = useState("")
    const [replies, setReplies] = useState({}) // Stores replies per discussion
    const [replyFormVisible, setReplyFormVisible] = useState({})

    async function fetchDiscussions() {
        try {
            const res = await fetch('/api/discussion')
            if (!res.ok) {
                throw new Error("Error fetching discussions")
            }
            const data = await res.json()
            setDiscussions(Array.isArray(data) ? data : [])
        } catch (error) {
            console.log(error)
            setDiscussions([])
        }
    }

    useEffect(() => {
        fetchDiscussions()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("/api/discussion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ comment: question }),
            });

            if (response.ok) {
                fetchDiscussions();
                setQuestion("");
            } else {
                console.error("Failed to post discussion");
            }
        } catch (error) {
            console.error("Error submitting discussion:", error);
        }
    }

    async function handleReplySubmit(event, discussionId) {
        event.preventDefault();
        const replyText = replies[discussionId];

        if (!replyText) return; // Prevent empty replies

        try {
            const response = await fetch(`/api/discussion/${discussionId}/reply`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: replyText }),
            });

            if (response.ok) {
                fetchDiscussions();
                setReplies({ ...replies, [discussionId]: "" }); // Reset reply input
                setReplyFormVisible({ ...replyFormVisible, [discussionId]: false }); // Hide reply form
            } else {
                console.error("Failed to post reply:", await response.text());
            }
        } catch (error) {
            console.error("Error submitting reply:", error);
        }
    }

    return (
        <div className='container mx-auto px-28 py-40'>
            <h1 className='text-4xl font-bold text-center mb-4'>Discussion Forum</h1>

            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2 mt-2'>
                <textarea 
                    value={question} 
                    onChange={e => setQuestion(e.target.value)} 
                    className="w-1/2 p-2 text-black border-black border-2 rounded-2xl" 
                    placeholder='Write your question' 
                />
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0">
                        Submit
                    </span>
                </button>
            </form>

            <div className='py-3 border-b border-gray-400'></div>
            <ul>
                {discussions.map((discussion) => (
                    <li key={discussion._id} className='py-6 border-b border-gray-400'>
                        <p className='font-semibold text-xl'>{discussion.comment}</p>
                        <p className='text-gray-500 text-sm'>Posted on: {new Date(discussion.createdAt).toLocaleDateString()}</p>
                        <button 
                            onClick={() => setReplyFormVisible({ 
                                ...replyFormVisible, 
                                [discussion._id]: !replyFormVisible[discussion._id] 
                            })} 
                            className="text-blue-500 mt-2"
                        >
                            Reply
                        </button>

                        {replyFormVisible[discussion._id] && (
                            <form onSubmit={(e) => handleReplySubmit(e, discussion._id)} className='flex flex-col items-center gap-2 mt-2'>
                                <textarea 
                                    value={replies[discussion._id] || ""} 
                                    onChange={e => setReplies({ ...replies, [discussion._id]: e.target.value })} 
                                    className="w-1/2 p-2 text-black border-black border-2 rounded-2xl" 
                                    placeholder='Write your reply' 
                                />
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0">
                                        Submit
                                    </span>
                                </button>
                            </form>
                        )}

                        <div className='ml-6 mt-2'>
                            <h3 className='font-semibold'>Replies:</h3>
                            {discussion.replies && discussion.replies.length > 0 ? (
                                discussion.replies.map((reply, index) => (
                                    <div key={index} className='pl-3 border-l-4 border-gray-400 mt-2'>
                                        <p>{reply.text}</p>
                                        <p className='text-gray-500 text-sm'>Replied on: {new Date(reply.createdAt).toLocaleDateString()}</p>
                                    </div>
                                ))
                            ) : (
                                <p className='text-gray-500'>No replies yet.</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Discussion
