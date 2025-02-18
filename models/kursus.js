const mongoose = require("mongoose");

const kursusSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Kursus", kursusSchema);
