const mongoose = require("mongoose");

//NOTA falta ID_sensor pero mongoDB le pone un id automatico se lo pondre manual?

const sensoresSchema = mongoose.Schema(
  {
    N_encargado: {
        type: Number,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Codigo: {
        type: String,
        required: true
    },
  },
  {
    versionKey: false,
    collection: "sensores",
  }
);

module.exports = mongoose.model("sensores", sensoresSchema);
