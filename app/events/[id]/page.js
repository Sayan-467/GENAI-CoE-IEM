import clientPromise from "@/lib/mongodb";
import { BSON } from "mongodb";
import Image from "next/image";

export default async function eventsDetails({ params }) {
    const { id } = params;

    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("events");

    const events = await collection.findOne({ _id: new BSON.ObjectId(id) });

    if (!events) {
        return <div>Events not found</div>;
    }

    return (
        <div className="container mx-auto py-24 px-16 flex justify-center items-center">
            <div className="bg-slate-700 w-[70vw] rounded-2xl px-16 py-12 flex flex-col gap-3">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-4xl font-bold mb-4 ">{events.title}</h1>
                    <Image className="mb-3" src="/event1.jpg" alt="image of the events" width={400} height={450} />
                </div>
                <p className="text-justify">{events.desc}</p>
                <div>
                    <h2>Photo Gallery</h2>
                    <div className="flex gap-4">
                        <Image src={`/${events.pic}`} alt="image of the events" width={200} height={200} />
                        <Image src={`/${events.pic}`} alt="image of the events" width={200} height={200} />
                        <Image src={`/${events.pic}`} alt="image of the events" width={200} height={200} />
                    </div>
                </div>
                <p className="text-justify">{events.keyPoints}</p>
                <p className="text-gray-400 text-sm mt-4">
                    Organised on: {new Date(events.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}

export const metadata = {
    title: "IEM Generative AI CoE - Events",
    description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};