"use server"

import connectDB from "@/lib/connectDB"
import Event from "@/Models/ReservationModel"

export async function GET() {
    try {
      await connectDB();
      const events = await Event.find();
  
      return new Response(JSON.stringify(events), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Something went wrong' }), {
        status: 500,
      });
    }
  }


  export async function POST(request) {
    try {
      await connectDB();
      const body = await request.json()

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