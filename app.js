const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoute");
const fruitVegetableRoutes = require("./routes/fresh");
const electronicRoutes = require("./routes/electronic");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/fruitVegetable", fruitVegetableRoutes);
app.use("/electronic", electronicRoutes);

// Sync Database
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
