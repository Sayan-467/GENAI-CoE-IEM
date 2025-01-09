import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("content");

    try {
        const contents = await collection
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(contents);
    }
    catch (error) {
        return NextResponse.json({ success: false, error: true, message: "Error fetching content", error: error }, { status: 500 });
    }

}

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("content");

    try {
        const result = await collection.insertOne(body);

        return Response.json({ success: true, error: false, message: "Content added successfully", result: result });
    } catch (error) {
        return Response.json({ success: false, error: true, message: "Error adding content", error: error }, { status: 500 });
    }
}
