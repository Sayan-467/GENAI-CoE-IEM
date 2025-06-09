import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("genai-coe");
    const collection = db.collection("contact_queries");

    const body = await request.json();
    if (!body.name || !body.email || !body.query) {
      return NextResponse.json(
        { success: false, error: true, message: "All fields are required." },
        { status: 400 }
      );
    }

    const doc = {
      name: body.name,
      email: body.email,
      query: body.query,
      createdAt: new Date()
    };

    await collection.insertOne(doc);

    return NextResponse.json({
      success: true,
      error: false,
      message: "Query submitted successfully"
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: true, message: "Error saving query", details: error.message },
      { status: 500 }
    );
  }
}
