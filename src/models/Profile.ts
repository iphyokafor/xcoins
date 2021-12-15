import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  nickname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  capital: {
    type: Number,
    default: 0,
    validate(value: number) {
      if (value < 0) {
        throw new Error("Capital must be a positive number");
      }
    },
  },
  divisa: {
    type: String,
    trim: true,
  },
  prefered_cryptocurrency: {
    type: String,
    trim: true,
  },
});

export const Profile = mongoose.model("Profile", schema);
