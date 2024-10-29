// Photo.ts
import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  albumId: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Photo", photoSchema);
