import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    dateRecorded: {
      type: Date,
    },
    cryptocurrency: {
      type: String,
      trim: true,
    },
    euros: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
      validate(value: number) {
        if (value < 0) {
          throw new Error("Quantity must be a positive number");
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Simulator = mongoose.model("Simulator", schema);
