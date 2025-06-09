// /app/events/[id]/page.jsx
import EventDetailsClient from "@/components/EventDetailsClient";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "IEM Generative AI CoE - Events",
  description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};

export default async function Page({ params }) {
  const { id } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Error loading event details</div>;
  }

  const eventData = await res.json();

  return <EventDetailsClient event={eventData} />;
}
