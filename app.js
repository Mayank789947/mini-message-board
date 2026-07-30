require("dotenv").config();

const express = require("express");
const path = require("node:path");
const indexRoutes = require("./routes/indexRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const pool = require("./db/pool");

(async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log(result.rows[0]);
  } catch (err) {
    console.error("TEST CONNECTION:", err);
  }
})();

app.use("/", indexRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});