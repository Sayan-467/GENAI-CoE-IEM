// /app/api/events/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("event");

    const events = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Convert _id to string for each event to avoid serialization issues
    const serializedEvents = events.map(event => ({
      ...event,
      _id: event._id?.toString?.() ?? event._id,
      createdAt: event.createdAt ? new Date(event.createdAt).toISOString() : null,
    }));

    return NextResponse.json(serializedEvents);
  } catch (error) {
    console.error("Database Error:", error.message);
    return NextResponse.json(
      { success: false, error: true, message: "Error fetching events", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("event");

    const body = await request.json();

    // Optional: Add timestamp if not already present
    if (!body.createdAt) {
      body.createdAt = new Date();
    }

    const result = await collection.insertOne(body);

    return NextResponse.json({
      success: true,
      error: false,
      message: "event added successfully",
      result: {
        ...result,
        insertedId: result.insertedId?.toString?.() ?? result.insertedId
      },
    });
  } catch (error) {
    console.error("Database Error:", error.message);
    return NextResponse.json(
      { success: false, error: true, message: "Error adding event", details: error.message },
      { status: 500 }
    );
  }
}
