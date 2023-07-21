const mongoose = require("mongoose");

const ZonaSchema = mongoose.Schema(
  {
    Cuarto: {
        type: Number,
        required: true,
    },
    Sensores: {
        type: Number,
        required: true,
    },
  },
  {
    versionKey: false,
    collection: "zona",
  }
);

module.exports = mongoose.model("zona", ZonaSchema);
