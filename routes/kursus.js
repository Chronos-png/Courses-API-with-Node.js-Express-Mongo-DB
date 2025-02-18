const express = require("express");
const router = express.Router();
const Kursus = require("../models/kursus");

// GET: Mendapatkan semua kursus
router.get("/", async (req, res) => {
  try {
    const kursus = await Kursus.find();
    res.status(200).json(kursus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Menambah kursus baru
router.post("/", async (req, res) => {
  const kursus = new Kursus({
    nama: req.body.nama,
    deskripsi: req.body.deskripsi,
    harga: req.body.harga,
  });

  try {
    const kursusBaru = await kursus.save();
    res.status(201).json(kursusBaru);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Menghapus kursus berdasarkan ID
router.delete("/:id", async (req, res) => {
  try {
    const kursus = await Kursus.findByIdAndDelete(req.params.id);
    if (!kursus)
      return res.status(404).json({ message: "Kursus tidak ditemukan" });
    res.status(200).json({ message: "Kursus berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
