const express = require("express");
const zonaScheme = require("../models/zona");

const router = express.Router();

// Ruta para crear un administrador
router.post("/zona", express.urlencoded({ extended: true }), (req, res) => {
  const zona = new zona(req.body);
  zona
    .save()
    .then((data) => {
      const zonaSinV = data.toObject();
      delete adminSinV.__v;
      console.log(zonaSinV);
      res.json(zonaSinV);
    })
    .catch((error) => res.json({ message: error }));
});

//obtener todos los administradores
router.get("/zona", (req, res) => {
  zonaScheme
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
