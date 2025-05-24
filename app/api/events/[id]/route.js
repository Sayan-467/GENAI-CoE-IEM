// /app/api/event/[id]/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("genai-coe");
  const collection = db.collection("event");

  try {
    const events = await collection.findOne({ _id: new ObjectId(id) });

    if (!events) {
      return NextResponse.json({ success: false, error: true, message: "event not found" }, { status: 404 });
    }

    return NextResponse.json(events);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { success: false, error: true, message: "Error fetching event details", details: error.message },
      { status: 500 }
    );
  }
}
