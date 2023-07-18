const mongoose = require("mongoose");

const CuartoSchema = mongoose.Schema(
  {
    ID_cuarto: {
        type: Number,
        required: true,
    },
  },
  {
    versionKey: false,
    collection: "cuartos",
  }
);

module.exports = mongoose.model("cuartos", CuartoSchema);
