import { connectDB } from "@/lib/config/db";
import EmialModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function POST(req) {
  const formData = await req.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  EmialModel.create(emailData);
  return NextResponse.json({ success: true, msg: "email subscribed" });
}

export async function GET(req) {
  const emails = await EmialModel.find({});
  return NextResponse.json({ emails });
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  await EmialModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "email deleted" });
}
