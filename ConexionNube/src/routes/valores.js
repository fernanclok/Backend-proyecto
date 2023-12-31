const express = require('express');
const valores = require('../models/valores'); 

const router = express.Router();

//post
router.post('/valores', express.urlencoded({ extended: true }), (req, res) => {
  const valor = new valores(req.body); 

  valor
    .save()
    .then((data) => {
      const valoresSinV = data.toObject();
      delete valoresSinV.__v;
      console.log(valoresSinV);
      res.json(valoresSinV);
    })
    .catch((error) => res.json({ message: error }));
});
// Ruta para obtener todos los administradores
router.get('/valores', (req, res) => {
  valores
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ruta para obtener los ultimos 5 valores
router.get('/valores/5', (req, res) => {
    valores
      .find()
      .sort({ _id: -1 })  // Ordenar en orden descendente por _id
      .limit(5)           // Limitar a 5 documentos
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
module.exports = router;
