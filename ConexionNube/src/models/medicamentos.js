const mongoose = require('mongoose');

const MedicineSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    Categoria: {
      type: Number,
      required: true,
    },
    Nombre: {
      type: String,
      required: true,
    },
    Nombre_cientifico: {
      type: String,
      required: true,
    },
    Formula: {
      type: String,
      required: true,
    },
    Cantidad: {
      type: Number,
      required: true,
    },
    Fecha_caducidad: {
      type: String,
      required: true,
    }
  },
  {
    versionKey: false,
    collection: 'medicamentos'
  }
);

module.exports = mongoose.model('medicamento', MedicineSchema);
