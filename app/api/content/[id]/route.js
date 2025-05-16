// /app/api/content/[id]/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("genai-coe");
  const collection = db.collection("content");

  try {
    const content = await collection.findOne({ _id: new ObjectId(id) });

    if (!content) {
      return NextResponse.json({ success: false, error: true, message: "Content not found" }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { success: false, error: true, message: "Error fetching content details", details: error.message },
      { status: 500 }
    );
  }
}
