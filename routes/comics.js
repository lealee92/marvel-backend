const axios = require("axios");
const express = require("express");
const router = express.Router();

const apiKey = process.env.API_SECRET;

// route comics : get a list of comics

router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}`
    );
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.status(200).json({ message: "marvel's comics" });
});

module.exports = router;
