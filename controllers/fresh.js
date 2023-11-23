const FruitVegetable = require("../models/fresh");

exports.getFruitVegetables = async (req, res) => {
  try {
    const fruitVegetables = await FruitVegetable.findAll();
    res.json(fruitVegetables);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addFruitVegetable = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newFruitVegetable = await FruitVegetable.create({ name, price });
    res.json(newFruitVegetable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
