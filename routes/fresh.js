const express = require("express");
const fruitVegetableController = require("../controllers/fresh");
const router = express.Router();

// Get all fruit and vegetables
router.get("/", fruitVegetableController.getFruitVegetables);

// Add a new fruit or vegetable
router.post("/add", fruitVegetableController.addFruitVegetable);

module.exports = router;
