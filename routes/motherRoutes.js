const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { addMotherLog, getMotherLogs } = require("../controllers/motherController");

router.post("/add", protect, addMotherLog);
router.get("/", protect, getMotherLogs);

module.exports = router;