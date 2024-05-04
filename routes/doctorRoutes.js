const express = require("express");
const routes = express.Router();
const Doctor = require("../models/Doctor");

routes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newDoctor = new Doctor(data);
    const response = await newDoctor.save();
    console.log("data saved Docotr succesfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

routes.get("/", async (req, res) => {
  try {
    const response = await Doctor.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ error: "client error" });
  }
});

module.exports = routes;
