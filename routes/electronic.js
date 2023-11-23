const express = require("express");
const electronicController = require("../controllers/electricController");
const router = express.Router();

// Get all electronics
router.get("/", electronicController.getElectronics);

// Add a new electronic item
router.post("/add", electronicController.addElectronic);

module.exports = router;
