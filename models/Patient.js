const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
