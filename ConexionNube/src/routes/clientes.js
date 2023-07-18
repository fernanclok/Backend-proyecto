const express = require("express");
const clientesScheme = require("../models/clientes");

const router = express.Router();

// Ruta para crear un administrador
router.post("/clientes", express.urlencoded({ extended: true }), (req, res) => {
  const clientes = new clientes(req.body);
  clientes
    .save()
    .then((data) => {
      const clientesSinV = data.toObject();
      delete adminSinV.__v;
      console.log(clientesSinV);
      res.json(clientesSinV);
    })
    .catch((error) => res.json({ message: error }));
});

//obtener todos los administradores
router.get("/clientes", (req, res) => {
  clientesScheme
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
