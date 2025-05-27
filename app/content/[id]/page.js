// /app/content/[id]/page.js
import Image from "next/image";

export default async function ContentDetails({ params }) {
    const { id } = params;

    // Fetching content details from the API
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/content/${id}`;
    let res;
    try {
        res = await fetch(apiUrl, {
            cache: "no-store",
        });
    } catch (err) {
        console.error("Fetch error:", err);
        return <div>Error loading content details...</div>;
    }

    if (!res || !res.ok) {
        console.error("API response error:", res && res.status, apiUrl);
        // Show a more specific message for 404
        if (res && res.status === 404) {
            return <div>Content not found (404)</div>;
        }
        return <div>Error loading content details...</div>;
    }

    const content = await res.json();

    if (!content) {
        return <div>Content not found</div>;
    }

    return (
        <div className="container mx-auto py-24 px-16 flex justify-center items-center">
            <div className="bg-slate-200 w-[70vw] rounded-2xl px-16 py-12 flex flex-col gap-3">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-4xl text-black font-bold mb-4 ">{content.title}</h1>
                    <Image
                        className="mb-3"
                        src={content.image}
                        alt="image of the content"
                        width={400}
                        height={450}
                    />
                </div>
                <p className="text-justify text-black">{content.content}</p>
                <p className="text-black text-sm mt-4">
                    Posted on: {new Date(content.createdAt).toLocaleDateString("en-GB")}
                </p>
            </div>
        </div>
    );
}

export const metadata = {
    title: "IEM Generative AI CoE - Content Details",
    description: "🚀 Uniting creative minds in AI innovation 🌐 Shaping the future of Generative AI 🤖",
};
