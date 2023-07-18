const express = require("express");
const cuartosScheme = require("../models/cuartos");

const router = express.Router();

// Ruta para crear un administrador
router.post("/cuartos", express.urlencoded({ extended: true }), (req, res) => {
  const cuartos = new cuartos(req.body); // Utilizar el nombre del modelo correcto

  cuartos
    .save()
    .then((data) => {
      const cuartosSinV = data.toObject();
      delete adminSinV.__v;
      console.log(cuartosSinV);
      res.json(cuartosSinV);
    })
    .catch((error) => res.json({ message: error }));
});

//obtener todos los administradores
router.get("/cuartos", (req, res) => {
  cuartosScheme
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
