const Electronic = require("../models/electronic");

exports.getElectronics = async (req, res) => {
  try {
    const electronics = await Electronic.findAll();
    res.json(electronics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addElectronic = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newElectronic = await Electronic.create({ name, price });
    res.json(newElectronic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
