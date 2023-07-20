const express = require("express");
const Sensores = require("../models/sensores"); // Corrected model name

const router = express.Router();

// Ruta para crear un sensor
router.post("/sensores", express.urlencoded({ extended: true }), (req, res) => {
  const sensor = new Sensores(req.body); // Use a different variable name here

  sensor
    .save()
    .then((data) => {
      const sensoresSinV = data.toObject();
      delete sensoresSinV.__v;
      console.log(sensoresSinV);
      res.json(sensoresSinV);
    })
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los sensores
router.get("/sensores", (req, res) => {
  Sensores.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
