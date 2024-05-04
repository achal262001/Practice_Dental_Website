const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPatient = new Patient(data);
    const response = await newPatient.save();
    res.status(200).json(response);
    console.log("Patienst data is saved succesfully");
  } catch (err) {
    console.log("The error is :", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Patient.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ error: "client error" });
  }
});

module.exports = router;
