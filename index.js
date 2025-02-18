const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Terhubung ke MongoDB"))
  .catch((err) => console.error("Gagal terhubung ke MongoDB:", err));

// Routing untuk kursus
const kursusRoutes = require("./routes/kursus");
app.use("/api/kursus", kursusRoutes);

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
