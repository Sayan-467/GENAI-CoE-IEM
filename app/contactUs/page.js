"use client"
import React, { useState } from 'react'

const page = () => {
  const [form, setForm] = useState({ name: "", email: "", query: "" })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: "", email: "", query: "" })
      } else {
        setError("Failed to submit. Please try again.")
      }
    } catch {
      setError("Failed to submit. Please try again.")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl pt-28 font-bold mb-6 text-center">Get in touch with us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-700 p-4 sm:p-8 rounded-2xl flex flex-col gap-4 w-full max-w-md shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 rounded text-black"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-2 rounded text-black"
          required
        />
        <textarea
          name="query"
          value={form.query}
          onChange={handleChange}
          placeholder="Your Query"
          className="p-2 rounded text-black min-h-[100px]"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded"
        >
          Submit
        </button>
        {success && <p className="text-green-400 text-center">Query submitted successfully!</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}
      </form>
    </div>
  )
}

export default page
