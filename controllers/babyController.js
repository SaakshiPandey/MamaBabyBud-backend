const BabyLog = require("../models/BabyLog");

/*
Simple growth evaluation logic
(For academic project – not medical standard)
*/

const calculateGrowthStatus = (data) => {
  if (data.weight < 2.5) return "Underweight";
  if (data.weight >= 2.5 && data.weight <= 4) return "Normal";
  if (data.weight > 4) return "Above Normal";

  return "Normal";
};

exports.addBabyLog = async (req, res) => {
  try {
    const growthStatus = calculateGrowthStatus(req.body);

    const log = await BabyLog.create({
      userId: req.user,
      ...req.body,
      growthStatus
    });

    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBabyLogs = async (req, res) => {
  try {
    const logs = await BabyLog.find({ userId: req.user }).sort({ date: -1 });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};