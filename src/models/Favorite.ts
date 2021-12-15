import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    name: {
      type: String,
      trim: true,
    },
    favorite1: {
      type: String,
      trim: true,
    },
    favorite2: {
      type: String,
      trim: true,
    },
    favorite3: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Favorite = mongoose.model("Favorite", schema);
