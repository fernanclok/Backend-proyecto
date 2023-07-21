const mongoose = require('mongoose');

const MedicineSchema = mongoose.Schema(
  {
    categoria: {
      type: String,
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
