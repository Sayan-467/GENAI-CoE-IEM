// /app/events/[id]/page.jsx
import EventDetailsClient from "@/components/EventDetailsClient";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const metadata = {
  title: "IEM Generative AI CoE - Events",
  description:
    "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};

export default async function Page({ params }) {
  const { id } = params;

  let eventData = null;

  try {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("event");

    eventData = await collection.findOne({ _id: new ObjectId(id) });

    if (!eventData) {
      return <div>Event not found (404)</div>;
    }
  } catch (error) {
    console.error("MongoDB Fetch Error:", error.message);
    return <div>Error loading event details</div>;
  }

  return <EventDetailsClient event={eventData} />;
}
