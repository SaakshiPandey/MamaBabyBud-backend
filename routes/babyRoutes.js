const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { addBabyLog, getBabyLogs } = require("../controllers/babyController");

router.post("/add", protect, addBabyLog);
router.get("/", protect, getBabyLogs);

module.exports = router;