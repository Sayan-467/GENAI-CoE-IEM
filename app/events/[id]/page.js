import clientPromise from "@/lib/mongodb";
import { BSON } from "mongodb";
import Image from "next/image";

export default async function eventsDetails({ params }) {
    const { id } = params;

    // Fetching events details from the API
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`;
    let res;
    try {
        res = await fetch(apiUrl, {
            cache: "no-store",
        });
    } catch (err) {
        console.error("Fetch error:", err);
        return <div>Error loading events details...</div>;
    }

    if (!res || !res.ok) {
        console.error("API response error:", res && res.status, apiUrl);
        // Show a more specific message for 404
        if (res && res.status === 404) {
            return <div>events not found (404)</div>;
        }
        return <div>Error loading events details...</div>;
    }

    const events = await res.json();

    if (!events) {
        return <div>events not found</div>;
    }

    return (
        <div className="container mx-auto py-24 px-16 flex justify-center items-center">
            <div className="bg-slate-700 w-[70vw] rounded-2xl px-16 py-12 flex flex-col gap-3">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-4xl font-bold mb-4 ">{events.title}</h1>
                    <Image className="mb-3" src={events.titlePic} alt="image of the events" width={400} height={450} />
                </div>
                <p className="text-justify">{events.desc}</p>
                <div className="my-2">
                    <h2 className="font-bold text-lg">Photo Gallery</h2>
                    <div className="grid grid-cols-3 w-full gap-4 mt-2">
                        {events.pic.map((image, index) => (
                            <Image key={index} src={image} alt="Event Image" width={200} height={200} />
                        ))}
                    </div>
                </div>
                {/* <div className="my-2">
                    <h2 className="font-bold text-lg">Key Highlights</h2>
                    <p className="text-justify">{events.keyPoints}</p>
                </div> */}
                <p className="text-gray-400 text-sm mt-4">
                    Organised on: {new Date(events.organisedOn).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}

export const metadata = {
    title: "IEM Generative AI CoE - Events",
    description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};