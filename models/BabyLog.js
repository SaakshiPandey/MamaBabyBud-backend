const mongoose = require("mongoose");

const babyLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    date: { type: Date, required: true },

    weight: Number,
    height: Number,
    temperature: Number,
    feedingType: String,
    sleepHours: Number,
    diaperCount: Number,
    vaccinationGiven: String,
    notes: String,

    growthStatus: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("BabyLog", babyLogSchema);