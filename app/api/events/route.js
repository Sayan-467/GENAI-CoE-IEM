import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("events");

    try {
        const events = await collection
            .find({})
            .sort({ organisedOn: -1 })
            .toArray();

        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({ success: false, error: true, message: "Error fetching events", error: error }, { status: 500 })
    }
}

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("events");

    try {
        const result = await collection.insertOne(body);

        return NextResponse.json({ success: true, error: false, message: "Event added successfully", result: result });
    } catch (error) {
        return NextResponse.json({ success: false, error: true, message: "Error adding event", error: error }, { status: 500 })
    }
}
