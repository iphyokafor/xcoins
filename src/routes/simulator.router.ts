import express from "express";
import { Router } from "express";
import { Simulator } from "../models/Simulator";
import cors from "cors";
import { Profile } from "../models/Profile";

const app = express();
app.use(cors());

export const router = express.Router();

router.get("/api/simulator", async (req, res) => {
  try {
    const simulator = await Simulator.find().lean();
    res.json({
      status: 200,
      message: "Simulator fetched successfully",
      simulator,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error,
    });
  }
});

router.get("/api/simulator/:profile_id", async (req, res) => {
  let query = {};
  const { profile_id } = req.params;

  const id = await Profile.findById(profile_id);

  if (!id) {
    return res.json({
      status: 404,
      message: "Simulator profile not found!",
    });
  }

  try {
    query = { profile_id };
    const data = await Simulator.find(query);
    res.json({ status: 200, message: "Simulator fetched successfully", data });
  } catch (error) {
    res.json({
      status: 500,
      message: error,
    });
  }
});

router.post("/api/simulator/:profile_id", async (req, res) => {
  const { profile_id } = req.params;
  const { name } = req.body;

  const id = await Profile.findById(profile_id);
  if (!id) {
    return res.json({
      status: 404,
      message: "Simulator profile not found! You cannot create a simulator.",
    });
  }

  const simulatorExists = await Simulator.findOne({ name });
  if (simulatorExists) {
    return res.json({ status: 409, message: "Simulator already exists" });
  }

  try {
    const newData = {
      ...req.body,
      profile_id,
    };
    const simulator = await Simulator.create(newData);
    res.json({
      status: 201,
      message: "Simulator created successfully",
      simulator,
    });
  } catch (error) {
    res.json({
      status: 400,
      message: error,
    });
  }
});
