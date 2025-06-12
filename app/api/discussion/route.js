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
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error fetching discussions", error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("discussion");

    const body = await req.json();
    if (!body.comment) return NextResponse.json({ success: false, message: "Comment is required." }, { status: 400 });

    const doc = {
        comment: body.comment,
        createdAt: new Date(),
        replies: []
    };

    try {
        const result = await collection.insertOne(doc);
        return NextResponse.json({ success: true, message: "Discussion added successfully", result });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error adding discussion", error: error.message }, { status: 500 });
    }
}

export async function PUT(req) {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("discussion");

    const { quesId, reply } = await req.json();
    if (!quesId || !reply?.text) return NextResponse.json({ success: false, message: "Invalid reply data." }, { status: 400 });

    reply.createdAt = new Date();

    try {
        const result = await collection.updateOne(
            { _id: new ObjectId(quesId) },
            { $push: { replies: reply } }
        );
        return NextResponse.json({ success: true, message: "Reply added", result });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error adding reply", error: error.message }, { status: 500 });
    }
}