"use client";

import React, { useState } from "react";
import Image from "next/image";

const EventDetailsClient = ({ event }) => {
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  return (
    <div className="container mx-auto py-12 sm:py-24 px-2 sm:px-4 md:px-16 flex justify-center items-center">
      <div className="bg-slate-200 w-full max-w-4xl rounded-2xl px-2 sm:px-6 md:px-16 py-6 sm:py-12 flex flex-col gap-3">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black">{event.title}</h1>
          <Image className="mb-3" src={event.titlePic} alt="image of the events" width={400} height={250} />
        </div>
        <p className="text-justify text-black text-base sm:text-lg">{event.desc}</p>
        <div className="my-2">
          <h2 className="font-bold text-lg text-black">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4 mt-2">
            {event.pic.map((image, index) => (
              <button
                key={index}
                className="cursor-pointer focus:outline-none"
                title="Click to enlarge"
                onClick={() => setEnlargedIndex(index)}
              >
                <Image src={image} alt="Event Image" width={200} height={200} className="rounded-xl w-full h-auto" />
              </button>
            ))}
          </div>
        </div>
        {enlargedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2">
            <div className="relative bg-white rounded-2xl p-2 sm:p-6 flex flex-col items-center max-w-full">
              <button
                className="absolute top-2 right-2 text-black text-2xl font-bold"
                onClick={() => setEnlargedIndex(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="w-full flex justify-center items-center">
                <Image
                  src={event.pic[enlargedIndex]}
                  alt="Enlarged Event Image"
                  width={700}
                  height={700}
                  className="rounded-xl mb-4 max-h-[60vh] w-auto object-contain"
                />
              </div>
              <a
                href={event.pic[enlargedIndex]}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                Download Image
              </a>
            </div>
          </div>
        )}
        <p className="text-black text-sm mt-4">
          Organised on: {new Date(event.organisedOn).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default EventDetailsClient;
