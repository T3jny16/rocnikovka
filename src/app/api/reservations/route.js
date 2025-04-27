"use server";

import connectDB from "@/lib/connectDB";
import Reservation from "@/Models/Reservationmodel";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const existing = await Reservation.findOne({
      eventId: body.eventId,
      seats: { $in: body.seats },
    });

    if (existing) {
      return new Response(
        JSON.stringify({ error: "Jedno z vybraných míst je už obsazené." }),
        {
          status: 409,
        }
      );
    }

    const newReservation = new Reservation({
      eventId: body.eventId,
      eventName: body.eventName,
      price: body.price,
      name: body.name,
      surname: body.surname,
      address: body.address,
      phone: body.phone,
      email: body.email,
      seats: body.seats,
    });

    const saved = await newReservation.save();

    return new Response(JSON.stringify({ success: true, saved }), {
      status: 201,
    });
  } catch (err) {
    console.error("CHYBA SERVERU:", err);
    return new Response(JSON.stringify({ error: "Chyba serveru" }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectDB();
    const reservations = await Reservation.find();
    return new Response(JSON.stringify(reservations), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Chyba pri nacitani" }), {
      status: 500,
    });
  }
}
