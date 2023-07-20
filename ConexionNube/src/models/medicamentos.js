const mongoose = require('mongoose');

const MedicineSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    categoria: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    nombre_cientifico: {
      type: String,
      required: true,
    },
    formula: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    fecha_caducidad: {
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
