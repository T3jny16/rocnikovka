

import mongoose from "mongoose";

const Event = mongoose.Schema(
  {
    title: String,
    date: Date,
    description: String,
    img: String
  },
);

export default mongoose.models.Event || mongoose.model("Event", Event);