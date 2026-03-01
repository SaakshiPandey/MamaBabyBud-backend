const MotherLog = require("../models/MotherLog");

const calculateRiskScore = (data) => {
  let score = 0;

  if (data.systolic > 140 || data.diastolic > 90) score += 2;
  if (data.sugarLevel > 180) score += 2;
  if (data.sleepHours < 6) score += 1;
  if (data.heartRate > 100) score += 1;

  return score;
};

exports.addMotherLog = async (req, res) => {
  try {
    const riskScore = calculateRiskScore(req.body);

    const log = await MotherLog.create({
      userId: req.user,
      ...req.body,
      riskScore
    });

    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMotherLogs = async (req, res) => {
  try {
    const logs = await MotherLog.find({ userId: req.user }).sort({ date: -1 });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};