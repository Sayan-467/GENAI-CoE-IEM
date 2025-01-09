import clientPromise from "@/lib/mongodb";
import { BSON } from "mongodb";
import Image from "next/image";

export default async function ContentDetails({ params }) {
    const { id } = params;

    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("content");

    const content = await collection.findOne({ _id: new BSON.ObjectId(id) });

    if (!content) {
        return <div>Content not found</div>;
    }

    return (
        <div className="container mx-auto py-24 px-16 flex justify-center items-center">
            <div className="bg-slate-700 w-[70vw] rounded-2xl px-16 py-12 flex flex-col gap-3">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-4xl font-bold mb-4 ">{content.title}</h1>
                    <Image className="mb-3" src={content.image} alt="image of the content" width={400} height={450} />
                </div>
                <p className="text-justify">{content.content}</p>
                <p className="text-gray-400 text-sm mt-4">
                    Posted on: {new Date(content.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}

export const metadata = {
    title: "IEM Generative AI CoE - Contents",
    description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};