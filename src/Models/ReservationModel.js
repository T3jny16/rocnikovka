

import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
    {
      eventId: String,
      eventName: String,
      price: Number,
      name: String,
      surname: String,
      address: String,
      phone: String,
      email: String,
      seats: [mongoose.Schema.Types.Mixed], //Schema.Types.Mixed uklada čísla 123 i texty jako stání     (skibidi)"
    },
    { timestamps: true }
  );

export default mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
