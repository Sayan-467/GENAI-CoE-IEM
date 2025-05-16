// /app/api/content/route.js
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
  } catch (error) {
    return NextResponse.json(
      { success: false, error: true, message: "Error fetching contents", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("genai-coe");
  const collection = db.collection("content");

  try {
    const body = await request.json();
    
    // Optional: Add timestamp if not already present
    if (!body.createdAt) {
      body.createdAt = new Date();
    }

    const result = await collection.insertOne(body);

    return NextResponse.json({
      success: true,
      error: false,
      message: "Content added successfully",
      result: result,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: true, message: "Error adding content", details: error.message },
      { status: 500 }
    );
  }
}
