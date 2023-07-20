const express = require("express");
const Zona = require("../models/zona");

const router = express.Router();

// Obtener todas las zonas
router.get("/zona", (req, res) => {
  Zona.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
