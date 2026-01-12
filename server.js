require("dotenv").config();

const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const PORT = 3001;

app.use("/api", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
