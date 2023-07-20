const express = require("express");
const Clientes = require("../models/clientes"); // Corrected model name

const router = express.Router();

// Ruta para crear un cliente
router.post("/clientes", express.urlencoded({ extended: true }), (req, res) => {
  const cliente = new Clientes(req.body); // Use a different variable name here
  cliente
    .save()
    .then((data) => {
      const clientesSinV = data.toObject();
      delete clientesSinV.__v;
      console.log(clientesSinV);
      res.json(clientesSinV);
    })
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los clientes
router.get("/clientes", (req, res) => {
  Clientes.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un cliente por ID
router.get("/clientes/:id", (req, res) => {
  const { id } = req.params;
  Clientes.findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

//actualizar un cliente por ID (using HTTP PUT or PATCH)
router.put("/clientes/:id", (req, res) => {
  const { id } = req.params;
  const { Empresa, Zona_asignada} = req.body;
  Clientes.updateOne(
    { _id: id },
    { $set: { Empresa, Zona_asignada } }
  )
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

router.delete("/clientes/:id", (req, res) => {
  const { id } = req.params;
  Clientes.deleteOne({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});
module.exports = router;
