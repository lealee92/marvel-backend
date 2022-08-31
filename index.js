require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidable());
app.use(cors());
// import des routes
const comicRoutes = require("./routes/comics");
app.use(comicRoutes);

app.get("/", (req, res) => {
  res.json("Welcome on my Marvel API");
});

app.get("*", (req, res) => {
  res.status(404).json("This page doesn't exist !");
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
