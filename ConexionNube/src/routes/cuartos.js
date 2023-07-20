const express = require("express");
const Cuartos = require("../models/cuartos"); // Corrected model name

const router = express.Router();

// Obtener todos los cuartos
router.get("/cuartos", (req, res) => {
  Cuartos.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
