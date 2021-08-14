const express = require("express");
const router = express.Router();
const Country = require("../models/Country");

// Route to get all countries
router.get("/", async (req, res, next) => {
  try {
    const countries = await Country.find().lean();
    return res.status(200).json({
      success: true,
      message: "countries loaded..",
      countries,
    });
  } catch (err) {
    next(err);
  }
});

// Retrives one country
router.get("/:name", async (req, res, next) => {
  const name = req.params.name;
  try {
    const country = await Country.findOne({ name }).lean();
    return res.status(200).json({
      success: true,
      message: "country loaded..",
      country,
    });
  } catch (err) {
    next(err);
  }
});

// Route to add a country
router.post("/", async (req, res, next) => {
  console.log("post");
  const { name, capital, area, desc } = req.body;
  try {
    const country = await Country.create({ name, capital, area, desc });
    return res.status(201).json({
      success: true,
      message: "Country created..",
      country,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
