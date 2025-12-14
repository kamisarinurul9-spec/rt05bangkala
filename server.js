const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const ADUAN_FILE = path.join(__dirname, "data", "aduan.json");

// helper
function readAduan() {
  if (!fs.existsSync(ADUAN_FILE)) return [];
  return JSON.parse(fs.readFileSync(ADUAN_FILE));
}

function saveAduan(data) {
  fs.writeFileSync(ADUAN_FILE, JSON.stringify(data, null, 2));
}

/* ================= API ================= */

// GET semua aduan
app.get("/api/aduan", (req, res) => {
  const data = readAduan();
  res.json(data);
});

// POST aduan baru
app.post("/api/aduan", (req, res) => {
  const { nama, judul, isi } = req.body;

  if (!nama || !judul || !isi) {
    return res.status(400).json({ error: "Data tidak lengkap" });
  }

  const data = readAduan();
  data.push({
    nama,
    judul,
    isi,
    tanggal: new Date().toLocaleString("id-ID")
  });

  saveAduan(data);
  res.json({ success: true });
});

// DELETE aduan
app.delete("/api/aduan/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const data = readAduan();

  if (isNaN(index) || !data[index]) {
    return res.status(404).json({ error: "Aduan tidak ditemukan" });
  }

  data.splice(index, 1);
  saveAduan(data);
  res.json({ success: true });
});

/* ======================================= */

app.listen(PORT, () => {
  console.log("Server jalan di port", PORT);
});
