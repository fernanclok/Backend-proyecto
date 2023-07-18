const express = require("express");
const sensoresScheme = require("../models/sensores");

const router = express.Router();

// Ruta para crear un administrador
router.post("/sensores", express.urlencoded({ extended: true }), (req, res) => {
  const sensores = new sensores(req.body);
  sensores
    .save()
    .then((data) => {
      const sensoresSinV = data.toObject();
      delete adminSinV.__v;
      console.log(sensoresSinV);
      res.json(sensoresSinV);
    })
    .catch((error) => res.json({ message: error }));
});

//obtener todos los administradores
router.get("/sensores", (req, res) => {
  sensoresScheme
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
