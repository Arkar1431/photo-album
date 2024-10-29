// Album.ts
import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Album", albumSchema);
