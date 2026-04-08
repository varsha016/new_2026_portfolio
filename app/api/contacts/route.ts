import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";

import ContactModel from "../../models/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fName, lName, email, sub, text } = body;

    if (!fName || !email || !text) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    await connectDB();

    const newContact = await ContactModel.create({
      fName,
      lName,
      email,
      sub,
      text,
    });

    return NextResponse.json(
      { message: "Message sent successfully", data: newContact },
      { status: 201 }
    );
  } catch (error: any) {
  console.error("API ERROR:", error); // 👈 important
  return NextResponse.json(
    { message: error.message || "Server error" },
    { status: 500 }
  );
}
}