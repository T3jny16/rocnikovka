"use server";

import connectDB from "@/lib/connectDB";
import Event from "@/Models/EventModel";

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const event = await Event.findById(id);
      return new Response(JSON.stringify(event), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    const events = await Event.find();
    return new Response(JSON.stringify(events), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Něco je špatně" }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const data = new Event({
      title: body.title,
      date: body.date,
      description: body.description,
      img: body.img,
    });
    const result = await data.save();

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
    });
  }
}
