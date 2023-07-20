const express = require("express");
const Categorias = require("../models/categorias"); // Corrected model name

const router = express.Router();

// Obtener todas las categorías
router.get("/categorias", (req, res) => {
  Categorias.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
