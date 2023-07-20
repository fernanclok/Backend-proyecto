const express = require("express");
const Administrador = require("../models/administradores"); // Corrected model name

const router = express.Router();

// Ruta para crear un administrador
router.post(
  "/administradores",
  express.urlencoded({ extended: true }),
  (req, res) => {
    const administrador = new Administrador(req.body);
    administrador
      .save()
      .then((data) => {
        const adminSinV = data.toObject();
        delete adminSinV.__v;
        console.log(adminSinV);
        res.json(adminSinV);
      })
      .catch((error) => res.json({ message: error }));
  }
);

// Obtener todos los administradores
router.get("/administradores", (req, res) => {
  Administrador.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un administrador por ID
router.get("/administradores/:id", (req, res) => {
  const { id } = req.params;
  Administrador.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un administrador por ID (using HTTP PUT or PATCH)
router.put("/administradores/:id", (req, res) => {
  const { id } = req.params;
  const { Nombre, ApellPaterno, ApellMaterno, Correo, Usuario, Password } =
    req.body;
  Administrador.updateOne(
    { _id: id }, 
    { $set: { Nombre, ApellPaterno, ApellMaterno, Correo, Usuario, Password } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un administrador por ID
router.delete("/administradores/:id", (req, res) => {
  const { id } = req.params;
  Administrador.deleteOne({ _id: id }) 
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
