const mongoose = require("mongoose");

const CuartoSchema = mongoose.Schema(
  {
    _id: {
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
