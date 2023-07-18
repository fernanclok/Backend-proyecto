const express = require("express");
const categoriasScheme = require("../models/categorias"); // Corregir el nombre de archivo del modelo

const router = express.Router();

// Ruta para crear un administrador
router.post(
  "/categorias",
  express.urlencoded({ extended: true }),
  (req, res) => {
    const categorias = new categorias(req.body); 
    categorias
      .save()
      .then((data) => {
        const categoriasSinV = data.toObject();
        delete adminSinV.__v;
        console.log(categoriasSinV);
        res.json(categoriasSinV);
      })
      .catch((error) => res.json({ message: error }));
  }
);

//obtener todos los administradores
router.get("/categorias", (req, res) => {
  categoriasScheme
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// // obtener un administrador
// router.get('/administradores/:id', (req, res) => {
//   const { id } = req.params;
//   AdministradorScheme
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// //actualizar un administrador
// router.get('/administradores/:id', (req, res) => {
//   const { id } = req.params;
//   const { Nombre, ApellPaterno, ApellMaterno, Correo, Usuario, Password } = req.body;
//   AdministradorScheme
//     .updateOne({id}, {$set: {Nombre, ApellPaterno, ApellMaterno, Correo, Usuario, Password}})
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// //actualizar un administrador
// router.delete('/administradores/:id', (req, res) => {
//   const { id } = req.params;
//   AdministradorScheme
//     .deleteOne({id})
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

module.exports = router;