const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema({
  patientName: {
    type: "string",
    required: true,
    min: 3,
    max: 25,
    unique: true,
  },
  patientAge: {
    type: "string",
    required: true,
    min: 1,
    max: 2,
  },
  patientGender: {
    type: "string",
    required: true,
  },
  patientNumber: {
    type: "string",
    required: true,
    min: 10,
    max: 14,
  },
  hasMedicalHistory: {
    type: Boolean,
    default: false, // Initially set to false
  },
  previousMedications: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Users", patientsSchema);
