"use client";
import React, { useEffect, useState } from "react";

const Discussion = () => {
    const [discussions, setDiscussions] = useState([]);
    const [question, setQuestion] = useState("");
    const [replies, setReplies] = useState({});
    const [replyFormVisible, setReplyFormVisible] = useState({});

    async function fetchDiscussions() {
        try {
            const res = await fetch("/api/discussion");
            const data = await res.json();
            setDiscussions(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching discussions:", error);
        }
    }

    useEffect(() => {
        fetchDiscussions();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!question.trim()) return;

        try {
            const res = await fetch("/api/discussion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ comment: question })
            });

            if (res.ok) {
                setQuestion("");
                fetchDiscussions();
            } else {
                console.error("Failed to post discussion");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    }

    async function handleReplySubmit(e, id) {
        e.preventDefault();
        const replyText = replies[id];
        if (!replyText?.trim()) return;

        try {
            const res = await fetch("/api/discussion", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quesId: id, reply: { text: replyText } })
            });

            if (res.ok) {
                setReplies({ ...replies, [id]: "" });
                setReplyFormVisible({ ...replyFormVisible, [id]: false });
                fetchDiscussions();
            } else {
                console.error("Failed to submit reply");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    }

    return (
        <div className="container mx-auto px-28 py-40">
            <h1 className="text-4xl font-bold text-center mb-4">Discussion Forum</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 mt-2">
                <textarea
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    className="w-1/2 p-2 text-black border-black border-2 rounded-2xl"
                    placeholder="Write your question"
                />
                <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0">Submit</span>
                </button>
            </form>

            <div className="py-3 border-b border-gray-400"></div>
            <ul>
                {discussions.map(d => (
                    <li key={d._id} className="py-6 border-b border-gray-400">
                        <p className="font-semibold text-xl">{d.comment}</p>
                        <p className="text-gray-500 text-sm">Posted on: {new Date(d.createdAt).toLocaleDateString()}</p>
                        <button
                            onClick={() => setReplyFormVisible({ ...replyFormVisible, [d._id]: !replyFormVisible[d._id] })}
                            className="text-blue-500 mt-2"
                        >Reply</button>

                        {replyFormVisible[d._id] && (
                            <form onSubmit={(e) => handleReplySubmit(e, d._id)} className="flex flex-col items-center gap-2 mt-2">
                                <textarea
                                    value={replies[d._id] || ""}
                                    onChange={e => setReplies({ ...replies, [d._id]: e.target.value })}
                                    className="w-1/2 p-2 text-black border-black border-2 rounded-2xl"
                                    placeholder="Write your reply"
                                />
                                <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0">Submit</span>
                                </button>
                            </form>
                        )}

                        <div className="ml-6 mt-2">
                            <h3 className="font-semibold">Replies:</h3>
                            {d.replies?.length > 0 ? (
                                d.replies.map((reply, i) => (
                                    <div key={i} className="pl-3 border-l-4 border-gray-400 mt-2">
                                        <p>{reply.text}</p>
                                        <p className="text-gray-500 text-sm">Replied on: {new Date(reply.createdAt).toLocaleDateString()}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No replies yet.</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Discussion;