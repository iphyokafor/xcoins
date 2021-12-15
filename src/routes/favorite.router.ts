import express from "express";
import { Favorite } from "../models/Favorite";

export const router = express.Router();

router.get("/api/favorite", async (req, res) => {
  try {
    const favorite = await Favorite.find().lean();
    res.json({
      status: 200,
      message: "Favorite fetched successfully",
      favorite,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error,
    });
  }
});

router.get("/api/favorite/:profile_id", async (req, res) => {
  let query = {};
  const { profile_id } = req.params;
  try {
    query = { profile_id };
    const data = await Favorite.find(query);
    res.json({
      status: 200,
      message: "Favorite profile fetched successfully",
      data,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error,
    });
  }
});
