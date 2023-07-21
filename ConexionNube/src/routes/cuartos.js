const express = require("express");
const CuartoSchema = require("../models/cuartos"); // Corrected model name

const router = express.Router();

// Obtener todos los cuartos
router.get("/cuartos", (req, res) => {
  CuartoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
