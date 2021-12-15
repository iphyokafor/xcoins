import express from "express";
import { Profile } from "../models/Profile";
import { profileValidation } from "../validation/profile.validation";

export var router = express.Router();

router.get("/api/profile", async (req, res) => {
  try {
    const profile = await Profile.find().lean();
    res.json({ status: 200, message: "Profile fetched successfully", profile });
  } catch (error) {
    res.json({
      status: 500,
      message: error,
    });
  }
});

router.post("/api/profile", async (req, res) => {
  const { error } = profileValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { email, name, nickname } = req.body;

  try {
    let profile = await Profile.findOne({
      $or: [{ email }, { nickname }],
    });

    if (profile) {
      return res.json({ status: 400, message: "Profile already exists" });
    } else {
      profile = await Profile.create({ name, email, nickname });
    }

    res.json({ status: 201, message: "Profile created successfully", profile });
  } catch (error) {
    res.json({
      status: 400,
      message: error,
    });
  }
});
