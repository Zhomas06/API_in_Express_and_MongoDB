const { Router } = require("express");

const forums = Router();

forums.get("/", async (req, res) => {
  try {
    res.status(200).json("Done!");
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});