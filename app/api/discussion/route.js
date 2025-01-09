import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("discussion");

    try {
        const discussions = await collection
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(discussions);
    }
    catch (error) {
        return NextResponse.json({ success: false, error: true, message: "Error fetching discussions", error: error }, { status: 500 })
    }
}

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("discussion");

    const body = await req.json();
    body.createdAt = new Date();
    body.replies = []

    try {
        const result = await collection.insertOne(body);

        return NextResponse.json({ success: true, error: false, message: "Discussion added successfully", result: result })
    } catch (error) {
        return NextResponse.json({ success: false, error: true, message: "Error adding discussion", error: error }, { status: 500 })
    }
}

export async function PUT(req) {
    const client = await clientPromise
    const db = client.db("genai-coe")
    const collection = db.collection("discussion")

    const { quesId, reply } = await req.json()
    reply.createdAt = new Date()

    try {
        const result = await collection.updateOne(
            { _id: ObjectId(quesId) },
            { $push: { replies: reply } }
        )
        return NextResponse(result)
    }
    catch (error) {
        return NextResponse.json({ success: false, error: true, message: "Error adding reply", error: error }, { status: 500 })
    }
}
