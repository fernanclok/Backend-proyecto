const express = require("express");
const MedicineSchema = require("../models/medicamentos");

const router = express.Router();

//ruta crear usuario
router.post(
  "/medicamentos",
  express.urlencoded({ extended: true }),
  (req, res) => {
    const medicamento = new MedicineSchema(req.body);
    medicamento
      .save()
      .then((data) => {
        const medicamentoSinV = data.toObject();
        delete medicamentoSinV.__v;
        console.log(medicamentoSinV);
        res.json(medicamentoSinV);
      })
      .catch((error) => res.json({ message: error }));
  }
);

//obtener todos los medicamentos
router.get("/medicamentos", (req, res) => {
  MedicineSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un medicamento
router.get("/medicamentos/:id", (req, res) => {
  const { id } = req.params;
  MedicineSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un medicamento
router.put("/medicamentos/:id", (req, res) => {
  const { id } = req.params;
  const {
    categoria,
    nombre,
    nombre_cientifico,
    formula,
    cantidad,
    fecha_caducidad,
  } = req.body;
  MedicineSchema.updateOne(
    { _id: id },
    {
      $set: {
        categoria,
        nombre,
        nombre_cientifico,
        formula,
        cantidad,
        fecha_caducidad,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar un medicamento
router.delete("/medicamentos/:id", (req, res) => {
  const { id } = req.params;
  MedicineSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
