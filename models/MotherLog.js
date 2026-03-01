const mongoose = require("mongoose");

const motherLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    date: { type: Date, required: true },

    systolic: Number,
    diastolic: Number,
    weight: Number,
    sugarLevel: Number,
    heartRate: Number,
    sleepHours: Number,
    waterIntake: Number,
    meals: String,
    mood: String,
    notes: String,

    riskScore: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("MotherLog", motherLogSchema);